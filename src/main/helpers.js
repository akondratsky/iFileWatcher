const path = require('path');
const url = require('url');
const { Menu, Tray } = require('electron');

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

const getMainWindowOptions = () => ({
  width: 1000,
  height: 800,
  minWidth: 640,
  minHeight: 480,
  show: false,
  webPreferences: {
    nodeIntegration: true,
  },
});

const loadUrlOrFileInto = async ({ mainWindow, isDevelopment }) => {
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
};

const prepareDevTools = ({ mainWindow }) => {
  mainWindow.webContents.once('dom-ready', () => {
    mainWindow.webContents.openDevTools();
    mainWindow.maximize();
    console.log('DOM is ready.');
  });
};

const addTrayIcon = ({ app, mainWindow }) => {
  const iconPath = path.join(__dirname, 'icon.png');
  const trayIcon = new Tray(iconPath);
  const trayContextMenu = Menu.buildFromTemplate([
    {
      label: 'Open',
      click: () => {
        mainWindow.show();
        mainWindow.maximize();
      },
    },
    {
      label: 'Quit',
      click: () => {
        app.isQuiting = true;
        app.quit();
      },
    },
  ]);

  trayIcon.setIgnoreDoubleClickEvents(false);
  trayIcon.on('double-click', () => {
    if (!mainWindow.isVisible()) {
      mainWindow.show();
      mainWindow.maximize();
    }
  });
  trayIcon.setContextMenu(trayContextMenu);
};

module.exports = {
  getMainWindowOptions,
  loadUrlOrFileInto,
  prepareDevTools,
  addTrayIcon,
};
