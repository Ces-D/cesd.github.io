/** A chat message contains the message and an identifier indicating who the user is */
export type Message = { message: string; user: 'user' | 'bot' };
