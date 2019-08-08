import { getWatcherValidation, checkIsWatcherNameValid, checkIsFileValid } from './utils';
import * as Strings from 'Constants/strings';
import { MAX_FILE_SIZE } from 'Constants/util';
import mockFs from 'mock-fs';
import sinon from 'sinon';
import fs from 'fs';

const validFilePath = 'C:\\git\\validJsonFile.json';
const invalidFilePath = 'c:\\git\\invalidJsonFile.json';

const watcherStub = {
  name: 'new watcher',
  file: validFilePath,
  task: 'npm run watch',
};

describe('WatcherEditor utils', () => {
  beforeEach(() => {
    mockFs({
      [validFilePath]: '{"C:\\\\git\\\\validFilename.json" : "too recursive" }',
      [invalidFilePath]: '{"sfs1 : 1 { ]}} I am broken agrrhhh kill me pleeessss',
    });
  });

  afterEach(() => mockFs.restore());

  describe('getWatcherValidation', () => {
    it('should return isValid equals true if all is ok', () => {
      const validation = getWatcherValidation({ ...watcherStub });
      expect(validation.isValid).to.be.equal(true);
    });

    it('should return isValid equals false if name is empty and message', () => {
      const watcher = {
        ...watcherStub,
        name: '',
      };
      const validation = getWatcherValidation(watcher);
      expect(validation.isValid).to.be.equal(false);
      expect(validation.nameMsg).to.be.equal(Strings.NAME_COULD_NOT_BE_EMPTY);
    });

    it('should fail validation if name is too long', () => {
      const watcher = {
        ...watcherStub,
        name: '1234567890123456789012345678901',
      };
      const validation = getWatcherValidation(watcher);
      expect(validation.isValid).to.be.equal(false);
      expect(validation.nameMsg).to.be.equal(Strings.NAME_SHOULD_NOT_BE_TOO_LONG);
    });

    it('"file" field should not be empty', () => {
      const watcher = {
        ...watcherStub,
        file: '',
      };
      const validation = getWatcherValidation(watcher);
      expect(validation.isValid).to.be.equal(false);
      expect(validation.fileMsg).to.be.equal(Strings.FILE_FIELD_SHOULD_NOT_BE_EMPTY);
    });

    describe('should check file', () => {
      it('Should check file is exists', () => {
        const watcher = {
          ...watcherStub,
          file: 'C:\\thisfilenotexisting.json',
        };
        const validation = getWatcherValidation(watcher);
        expect(validation.isValid).to.be.equal(false);
        expect(validation.fileMsg).to.be.equal(Strings.CANNOT_READ_THIS_FILE);
      });

      it('should check file that file is not too large', () => {
        const watcher = { ...watcherStub };
        const sandbox = sinon.sandbox.create();
        sandbox.stub(fs, 'statSync').callsFake(() => ({ size: MAX_FILE_SIZE + 33 }));

        const validation = getWatcherValidation(watcher);
        expect(validation.isValid).to.be.equal(false);
        expect(validation.fileMsg).to.be.equal(Strings.FILE_SHOULD_NOT_BE_LARGER);

        sandbox.restore();
      });

      it('should check file is valid JSON file', () => {
        const watcher = {
          ...watcherStub,
          file: invalidFilePath,
        };
        const validation = getWatcherValidation(watcher);
        expect(validation.isValid).to.be.equal(false);
        expect(validation.fileMsg).to.be.equal(Strings.FILE_IS_NOT_VALID_JSON_FILE);
      });
    });
  });

  describe('checkIsWatcherNameValid', () => {
    it('should return error for empty names and names contained only spaces', () => {
      const names = ['', '     ', '\t'];
      names.forEach((name) => {
        const error = checkIsWatcherNameValid(name);
        expect(error).to.be.equal(Strings.NAME_COULD_NOT_BE_EMPTY);
      });
    });

    it('should return error for too long (>30) name', () => {
      const name = '1234567890123456789012345678901';
      const error = checkIsWatcherNameValid(name);
      expect(error).to.be.equal(Strings.NAME_SHOULD_NOT_BE_TOO_LONG);
    });
  });

  describe('checkIsFileValid', () => {
    it('should return error if filename is empty', () => {
      const error = checkIsFileValid('');
      expect(error).to.be.equal(Strings.FILE_FIELD_SHOULD_NOT_BE_EMPTY);
    });

    it('Should check file is exists', () => {
      const error = checkIsFileValid('C:\\thisfilenotexisting.json');
      expect(error).to.be.equal(Strings.CANNOT_READ_THIS_FILE);
    });

    it('should check file that file is not too large', () => {
      const sandbox = sinon.sandbox.create();
      sandbox.stub(fs, 'statSync').callsFake(() => ({ size: MAX_FILE_SIZE + 33 }));

      const error = checkIsFileValid(validFilePath);
      expect(error).to.be.equal(Strings.FILE_SHOULD_NOT_BE_LARGER);

      sandbox.restore();
    });

    it('should check file is valid JSON file', () => {
      const error = checkIsFileValid(invalidFilePath);
      expect(error).to.be.equal(Strings.FILE_IS_NOT_VALID_JSON_FILE);
    });
  });
});
