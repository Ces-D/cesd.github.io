<script lang="ts">
  import ChatInputActions from '$lib/components/ChatInputActions.svelte';
  import ChatMessage from '$lib/components/ChatMessage.svelte';
  import PromptButton from './components/PromptButton.svelte';
  import { BOT_INPUT_ID, PREDEFINED_PROMPT, ROUTE } from '$lib/constants';
  import IconButton from '$lib/components/IconButton.svelte';
  import Icon from '@iconify/svelte';
  import { enhance } from '$app/forms';
  import type { PageData } from './$types';
  import { invalidateAll } from '$app/navigation';

  const { data }: { data: PageData } = $props();
  let form: HTMLFormElement;

  function updateChatMessageHistory() {
    form.submit();
  }

  function onSubmitPrompt(prompt: string) {
    const body = new FormData(form);
    body.set(BOT_INPUT_ID, prompt);
    fetch('?' + ROUTE.home.chatAction, {
      method: 'POST',
      body,
    });
    invalidateAll();
  }
</script>

<!--
Idea: It run a chatgpt chat box that answers questions about the site, prijects, me, etc.
-->

<section class="flex flex-col justify-center items-center p-1 mx-auto md:w-3/4 lg:w-1/2">
  {#if data.chatHistory.length === 0}
    <h3 class="mt-16 font-normal text-center font-cookie text-primary-500 dark:text-primary-400">
      Ask me a question!
    </h3>
  {/if}

  {#each data.chatHistory as history}
    <ChatMessage {...history} />
  {/each}

  <form
    method="post"
    class="mt-2"
    action={'?' + ROUTE.home.chatAction}
    bind:this={form}
    use:enhance
  >
    <ChatInputActions autoFocus onSubmitChatMessage={updateChatMessageHistory}>
      <IconButton>
        <Icon icon="iconamoon:sign-plus-bold" width="24" height="24" />
      </IconButton>
      <IconButton type="submit">
        <Icon icon="iconamoon:send-fill" width="24" height="24" />
      </IconButton>
    </ChatInputActions>
    <div class="grid grid-rows-1 grid-flow-col gap-2 mt-3">
      <PromptButton
        {onSubmitPrompt}
        prompt={PREDEFINED_PROMPT.bleepBloop}
        icon="mage:robot-dead-fill"
      />
      <PromptButton
        {onSubmitPrompt}
        prompt={PREDEFINED_PROMPT.planned}
        icon="mingcute:schedule-fill"
      />
      <PromptButton {onSubmitPrompt} prompt={PREDEFINED_PROMPT.teach} icon="pixelarticons:teach" />
      <PromptButton
        {onSubmitPrompt}
        prompt={PREDEFINED_PROMPT.working}
        icon="lucide-lab:football-goal"
      />
    </div>
  </form>
</section>
