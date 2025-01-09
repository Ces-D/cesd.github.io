<script lang="ts">
  import type { Snippet } from 'svelte';
  import { BOT_INPUT_ID } from '$lib/constants';
  import type { HTMLTextareaAttributes } from 'svelte/elements';

  type ChatInputActionsProps = {
    onSubmitChatMessage: (message: string) => void;
    children: Snippet;
  };

  const { onSubmitChatMessage, children }: ChatInputActionsProps = $props();
  const onTextAreaKeyDown: HTMLTextareaAttributes['onkeydown'] = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSubmitChatMessage(event.currentTarget.value);
      event.currentTarget.value = '';
    }
  };
</script>

<div
  class="flex flex-col justify-center mt-3 w-full rounded bg-gray-white-lite outline-primary dark:bg-gray-black-dark"
>
  <textarea
    name={BOT_INPUT_ID}
    id={BOT_INPUT_ID}
    class="w-full text-black bg-transparent border-none outline-none resize-none dark:text-white min-h-32"
    onkeydown={onTextAreaKeyDown}
  ></textarea>
  <div class="flex justify-between p-1 w-full">
    {@render children()}
  </div>
</div>
