import type { Actions, PageServerLoad } from './$types';
import { PREDEFINED_PROMPT, BOT_INPUT_ID } from '$lib/constants';
import type { Message } from '$lib/types';
import { addChatMessage, getChatHistory } from '$lib/server/database';

function botResponse(prompt: string): Message['message'] {
  if (Object.values(PREDEFINED_PROMPT).includes(prompt)) {
    switch (prompt) {
      case PREDEFINED_PROMPT.bleepBloop:
        return 'Bleep-bloop!';
      case PREDEFINED_PROMPT.planned:
        return 'I plan to take over the world!';
      case PREDEFINED_PROMPT.teach:
        return 'I can teach you how to be a better bot!';
      case PREDEFINED_PROMPT.working:
        return 'I am working on my bot skills!';
      default:
        return 'I am a bot!';
    }
  } else {
    const normalized = prompt.trim().toLowerCase();
    if (normalized === '') {
      return "I'm sorry, I didn't catch that. Could you repeat your question?";
    } else {
      return "I'm sorry, I don't understand that question. Could you ask me something else?";
    }
  }
}

export const load: PageServerLoad = async () => {
  return { chatHistory: getChatHistory() };
};

export const actions: Actions = {
  chat: async (event) => {
    const data = await event.request.formData();
    const prompt = data.get(BOT_INPUT_ID)?.toString() || '';

    const userMessage: Message = { message: prompt, user: 'user' };
    addChatMessage(userMessage);
    const botMessage: Message = { message: botResponse(prompt), user: 'bot' };
    addChatMessage(botMessage);
  },
};
