<script lang="ts">
  import type { Snippet } from 'svelte';
  import { BOT_INPUT_ID } from '$lib/constants';
  import type { HTMLTextareaAttributes } from 'svelte/elements';

  type ChatInputActionsProps = {
    onSubmitChatMessage: (message: string) => void;
    autoFocus?: boolean;
    children: Snippet;
  };

  const { onSubmitChatMessage, autoFocus, children }: ChatInputActionsProps = $props();
  const onTextAreaKeyDown: HTMLTextareaAttributes['onkeydown'] = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSubmitChatMessage(event.currentTarget.value);
      event.currentTarget.value = '';
    }
  };
</script>

<div
  class="flex flex-col justify-center w-full rounded-sm border border-primary-900 bg-gray-white-lite dark:bg-gray-black-dark"
>
  <textarea
    autofocus={autoFocus}
    name={BOT_INPUT_ID}
    id={BOT_INPUT_ID}
    class="w-full text-black bg-transparent resize-none dark:text-white min-h-32 chat-input"
    onkeydown={onTextAreaKeyDown}
  ></textarea>
  <div class="flex justify-between p-1 w-full">
    {@render children()}
  </div>
</div>

<style>
  @reference "tailwindcss/theme";

  .chat-input {
    border: none;
    outline: none;
  }
  .chat-input:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
</style>
