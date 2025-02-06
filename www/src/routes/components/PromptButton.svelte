<script lang="ts">
  import Button from 'flowbite-svelte/Button.svelte';
  import Icon from '@iconify/svelte';

  type PromptButtonProps = {
    prompt: string;
    icon?: string;
    onSubmitPrompt: (prompt: string) => void;
  };

  let { prompt, icon, onSubmitPrompt }: PromptButtonProps = $props();
</script>

<Button
  outline
  class="text-black dark:text-white hover:cursor-pointer border-gray-black dark:hover:text-primary-500 hover:text-primary-900 hover:border-primary-900"
  onclick={() => onSubmitPrompt(prompt)}
>
  {#if typeof icon === 'string'}
    <Icon {icon} class="me-2" width="24" height="24" />
  {/if}
  <span class="hidden md:block">
    {prompt}
  </span>
</Button>
