import reducer from './watchers';
import { ActionTypes } from 'Actions/watchers';

const watcherStub1 = {
  id: 42,
  enabled: true,
  name: 'new watcher',
  file: 'c:\\git\\my\\package.json',
  task: 'npm run watch',
  notify: true,
  install: true,
  script: true,
};

const watcherStub2 = {
  id: 13,
  enabled: true,
  name: 'new watcher 3',
  file: 'd:\\nofolder\\package.json',
  task: 'npm start',
  notify: false,
  install: true,
  script: false,
};

const watcherStub3 = {
  enabled: true,
  name: 'new watcher 3',
  file: 'd:\\nofolder\\package.json',
  task: 'npm start',
  notify: false,
  install: true,
  script: false,
};

const watcherStub4 = {
  id: 777,
  enabled: false,
  name: 'watcher777',
  script: false,
  file: 'd:\\nofolder\\package.json',
  task: 'npm run fantasy',
  notify: false,
  install: false,
};

describe('Watchers reducers', () => {
  it('should change watcher if id exists', () => {
    const customWatcherStub = {
      id: watcherStub2.id,
      enabled: false,
      name: 'updated watcher',
      file: 'g:\\updated\\package.json',
      task: 'npm run updated',
      notify: true,
      install: false,
      script: true,
    };

    const action = {
      type: ActionTypes.JSON_SAVE_WATCHER,
      payload: {
        ...customWatcherStub,
      },
    };

    const actual = reducer([{ ...watcherStub1 }, { ...watcherStub2 }], action);

    expect(actual.length).to.equal(2);
    expect(actual.find((watcher) => watcher.id === watcherStub2.id)).to.deep.equal(
      customWatcherStub,
    );
  });

  it('should delete watcher by id', () => {
    const initialState = [{ ...watcherStub1 }, { ...watcherStub2 }];
    const action = {
      type: ActionTypes.JSON_DELETE_WATCHER,
      payload: watcherStub2.id,
    };
    const actualState = reducer(initialState, action);
    expect(actualState).to.deep.equal([{ ...watcherStub1 }]);
  });

  it('should create new watcher with new id if no id', () => {
    const action = {
      type: ActionTypes.JSON_SAVE_WATCHER,
      payload: {
        ...watcherStub3,
      },
    };

    const actual = reducer([{ ...watcherStub2 }, { ...watcherStub1 }], action);
    const correct = [{ ...watcherStub2 }, { ...watcherStub1 }, { ...watcherStub3, id: 43 }];

    expect(actual).to.deep.equal(correct);
  });

  it('should update property "Enabled" of watcher', () => {
    const action = {
      type: ActionTypes.JSON_SET_WATCHER_ENABLED_BY_ID,
      payload: { id: 777, enabled: true },
    };

    const actual = reducer([{ ...watcherStub1 }, { ...watcherStub4 }], action);
    const correct = [{ ...watcherStub1 }, { ...watcherStub4, enabled: true }];

    expect(actual).to.deep.equal(correct);
  });

  it('should update property "Notify" of watcher', () => {
    const action = {
      type: ActionTypes.JSON_SET_WATCHER_NOTIFY_BY_ID,
      payload: { id: 777, notify: true },
    };

    const actual = reducer([{ ...watcherStub1 }, { ...watcherStub4 }], action);
    const correct = [{ ...watcherStub1 }, { ...watcherStub4, notify: true }];

    expect(actual).to.deep.equal(correct);
  });

  it('should update property "Install" of watcher', () => {
    const action = {
      type: ActionTypes.JSON_SET_WATCHER_INSTALL_BY_ID,
      payload: { id: 777, install: true },
    };

    const actual = reducer([{ ...watcherStub1 }, { ...watcherStub4 }], action);
    const correct = [{ ...watcherStub1 }, { ...watcherStub4, install: true }];

    expect(actual).to.deep.equal(correct);
  });

  it('should update property "Script" of watcher', () => {
    const action = {
      type: ActionTypes.JSON_SET_WATCHER_SCRIPT_BY_ID,
      payload: { id: 777, script: true },
    };

    const actual = reducer([{ ...watcherStub1 }, { ...watcherStub4 }], action);
    const correct = [{ ...watcherStub1 }, { ...watcherStub4, script: true }];

    expect(actual).to.deep.equal(correct);
  });
});
