const path = require('path');
const url = require('url');
const { app, crashReporter, BrowserWindow, Menu } = require('electron');

const isDevelopment = process.env.NODE_ENV === 'development';

let mainWindow = null;
let forceQuit = false;

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  for (const name of extensions) {
    try {
      await installer.default(installer[name], forceDownload);
    } catch (e) {
      console.log(`Error installing ${name} extension: ${e.message}`);
    }
  }
};

crashReporter.start({
  productName: 'YourName',
  companyName: 'YourCompany',
  submitURL: 'https://your-domain.com/url-to-submit',
  uploadToServer: false,
});

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', async () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    minWidth: 640,
    minHeight: 480,
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.setMenuBarVisibility(false);

  if (isDevelopment) {
    await installExtensions();

    const indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:8080',
      pathname: '/index.html',
      slashes: true,
    });
    mainWindow.loadURL(indexPath);
  } else {
    mainWindow.loadFile(path.resolve(path.join(__dirname, 'index.html')));
  }

  // show window once on first load
  mainWindow.webContents.once('did-finish-load', () => mainWindow.show());

  if (isDevelopment)
    mainWindow.webContents.once('dom-ready', () => {
      mainWindow.webContents.openDevTools();
      mainWindow.maximize();
      mainWindow.webContents.on('context-menu', (e, props) => {
        Menu.buildFromTemplate([
          {
            label: 'Inspect element',
            click() {
              mainWindow.inspectElement(props.x, props.y);
            },
          },
        ]).popup(mainWindow);
      });
      console.log('DOM is ready.');
    });

  mainWindow.webContents.on('did-finish-load', () => {
    // Handle window logic properly on macOS:
    // 1. App should not terminate if window has been closed
    // 2. Click on icon in dock should re-open the window
    // 3. ⌘+Q should close the window and quit the app
    if (process.platform === 'darwin') {
      mainWindow.on('close', function(e) {
        if (!forceQuit) {
          e.preventDefault();
          mainWindow.hide();
        }
      });

      app.on('activate', () => {
        mainWindow.show();
      });

      app.on('before-quit', () => {
        forceQuit = true;
      });
    } else {
      mainWindow.on('closed', () => {
        mainWindow = null;
      });
    }
  });
});
