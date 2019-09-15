const getMessageQueue = (state) => state.messageQueue;

export const getMessages = (state) => getMessageQueue(state).messages;
