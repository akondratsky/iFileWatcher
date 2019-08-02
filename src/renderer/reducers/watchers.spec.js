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

// const watcherStubs = [watcherStub1, watcherStub2];


describe('Watchers reducers', () => {
  it('should add watcher if id not exists', () => {
    const action = {
      type: ActionTypes.JSON_SAVE_WATCHER,
      payload: {
        ...watcherStub2,
      },
    };

    const actual = reducer([{ ...watcherStub1 }], action);
    const correct = [{ ...watcherStub1 }, { ...watcherStub2 }];

    expect(actual).to.deep.equal(correct);
  });
});
