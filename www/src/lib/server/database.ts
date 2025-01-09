import type { Message } from '$lib/types';
// FIXME: Super important that this not be implemented in production. We are storing everything in server memory where all users will be able to see the same chat. This is just for testing

const chatDatabase: Array<Message> = [];

export function getChatHistory() {
  return chatDatabase;
}

export function addChatMessage(message: Message) {
  chatDatabase.push(message);
}
