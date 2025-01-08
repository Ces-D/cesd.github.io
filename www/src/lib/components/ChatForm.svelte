<script lang="ts">
  import IconButton from '$lib/components/IconButton.svelte';
  import Icon from '@iconify/svelte';
  import type { HTMLTextareaAttributes } from 'svelte/elements';

  type ChatFormProps = {
    onSubmitChatMessage: (message: string) => void;
  };

  const { onSubmitChatMessage }: ChatFormProps = $props();
  const onTextAreaKeyDown: HTMLTextareaAttributes['onkeydown'] = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSubmitChatMessage(event.currentTarget.value);
      event.currentTarget.value = '';
    }
  };
</script>

<form
  class="flex flex-col justify-center mt-3 w-full rounded bg-gray-white-lite outline-primary dark:bg-gray-black-dark"
>
  <textarea
    class="w-full text-black bg-transparent border-none outline-none resize-none dark:text-white min-h-32"
    onkeydown={onTextAreaKeyDown}
  ></textarea>
  <div class="flex justify-between p-1 w-full">
    <IconButton>
      <Icon icon="iconamoon:sign-plus-bold" width="24" height="24" />
    </IconButton>
    <IconButton>
      <Icon icon="iconamoon:send-fill" width="24" height="24" />
    </IconButton>
  </div>
</form>
