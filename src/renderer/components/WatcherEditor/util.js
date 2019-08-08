import fs from 'fs';
import * as Strings from 'Constants/strings';
import { MAX_FILE_SIZE } from 'Constants/util';

const checkIsFileValid = (filename) => {
  try {
    const stats = fs.statSync(filename);
    if (stats.size > MAX_FILE_SIZE) {
      return Strings.FILE_SHOULD_NOT_BE_LARGER;
    }

    const data = fs.readFileSync(filename);
    try {
      JSON.parse(data);
    } catch {
      return Strings.FILE_IS_NOT_VALID_JSON_FILE;
    }
  } catch (e) {
    return Strings.CANNOT_READ_THIS_FILE;
  }

  return null;
};

export const getWatcherValidation = (watcher) => {
  const validation = {
    isValid: true,
    nameMsg: null,
    fileMsg: null,
  };

  if (!watcher.name) {
    validation.isValid = false;
    validation.nameMsg = Strings.NAME_COULD_NOT_BE_EMPTY;
  } else if (watcher.name.length > 30) {
    validation.isValid = false;
    validation.nameMsg = Strings.NAME_SHOULD_NOT_BE_TOO_LONG;
  }

  if (!watcher.file) {
    validation.isValid = false;
    validation.fileMsg = Strings.FILE_FIELD_SHOULD_NOT_BE_EMPTY;
  } else {
    const fileError = checkIsFileValid(watcher.file);
    if (fileError) {
      validation.isValid = false;
      validation.fileMsg = fileError;
    }
  }

  return validation;
};
