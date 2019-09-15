import { createAction } from 'redux-actions';

export const ActionTypes = {
  WRITE_MESSAGE: 'MessageQueue/WRITE_MESSAGE',
};

export const writeMessage = createAction(
  ActionTypes.WRITE_MESSAGE,
  ({ app, timestamp, name, text, isError }) => ({ app, timestamp, name, text, isError }),
);
