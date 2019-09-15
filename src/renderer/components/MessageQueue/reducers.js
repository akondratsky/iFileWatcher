import { handleActions } from 'redux-actions';
import { writeMessage } from 'Components/MessageQueue/actions';

export default handleActions(
  {
    [writeMessage]: (state, { payload: message }) => {
      if (state.messages.length < 50) {
        return { ...state, messages: [...state.messages, message] };
      }
      // eslint-disable-next-line no-unused-vars
      const [first, ...messages] = state.messages;
      messages.push(message);
      return { ...state, messages };
    },
  },
  {
    messages: [],
  },
);
