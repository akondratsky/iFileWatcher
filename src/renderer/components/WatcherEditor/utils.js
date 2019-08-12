import fs from 'fs';
import * as Strings from 'Constants/strings';
import { MAX_FILE_SIZE } from 'Constants/util';

export const checkIsFileValid = (filename) => {
  if (!filename) return Strings.FILE_FIELD_SHOULD_NOT_BE_EMPTY;

  try {
    const stats = fs.statSync(filename);
    const data = fs.readFileSync(filename);

    if (stats.size > MAX_FILE_SIZE) {
      return Strings.FILE_SHOULD_NOT_BE_LARGER;
    }

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

export const checkIsWatcherNameValid = (value) => {
  const name = value.trim();

  if (!name) {
    return Strings.NAME_COULD_NOT_BE_EMPTY;
  } else if (name.length > 30) {
    return Strings.NAME_SHOULD_NOT_BE_TOO_LONG;
  }
};

export const getWatcherValidation = (watcher) => {
  const validation = {
    isValid: true,
    nameMsg: null,
    fileMsg: null,
  };

  const nameError = checkIsWatcherNameValid(watcher.name);
  if (nameError) {
    validation.isValid = false;
    validation.nameMsg = nameError;
  }

  const fileError = checkIsFileValid(watcher.file);
  if (fileError) {
    validation.isValid = false;
    validation.fileMsg = fileError;
  }

  return validation;
};
