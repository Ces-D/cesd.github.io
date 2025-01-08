<script lang="ts">
  import ChatForm from '$lib/components/ChatForm.svelte';
  import ChatMessage from '$lib/components/ChatMessage.svelte';
  import type { Snapshot } from './$types';
  import PromptButton from './components/PromptButton.svelte';

  type Message = { message: string; isUser: boolean };

  let chatMessageHistory = $state<Array<Message>>([]);
  export const snapShot: Snapshot<Array<Message>> = {
    capture: () => chatMessageHistory,
    restore: (value) => (chatMessageHistory = value),
  };

  const updateChatMessageHistory = (message: string, isUser = true) => {
    chatMessageHistory = [...chatMessageHistory, { message, isUser }];
  };
  // TODO: Create a server action that recieves the users message and pushes a response to the history. This is a replication of the conversation between ai and the user
</script>

<!-- TODO: What should be on the home page

Idea: It run a chatgpt chat box that answers questions about hte site, prijects, me, etc.
-->

<section class="flex flex-col justify-center items-center p-1 mx-auto md:w-3/4 lg:w-1/2">
  {#if chatMessageHistory.length === 0}
    <h3 class="mt-16 font-normal text-center font-cookie text-primary-500 dark:text-primary-400">
      Ask me a question!
    </h3>
  {/if}

  {#each chatMessageHistory as history}
    <ChatMessage message={history.message} user={history.isUser ? 'left' : 'right'} />
  {/each}
  <ChatForm onSubmitChatMessage={updateChatMessageHistory} />
  <div class="grid grid-rows-1 grid-flow-col gap-2 mt-3">
    <PromptButton prompt="Bleep-Bloop?" icon="mage:robot-dead-fill" />
    <PromptButton prompt="What do you have planned today?" icon="mingcute:schedule-fill" />
    <PromptButton prompt="Teach me a useful tip on a topic you like?" icon="pixelarticons:teach" />
    <PromptButton
      prompt="What's a goal your currently working on?"
      icon="lucide-lab:football-goal"
    />
  </div>
</section>
