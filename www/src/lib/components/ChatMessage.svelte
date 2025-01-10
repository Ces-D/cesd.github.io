<script lang="ts">
  import type { Message } from '$lib/types';

  const { message, user }: Message = $props();
  // TODO: Add a way to display the users name or an icon for the bot?
</script>

<div
  class={[
    'max-w-4/6 rounded-full my-2 px-2 py-1',
    {
      'mr-auto bg-primary-300 dark:bg-primary-100': user === 'user',
      'ml-auto bg-secondary-300 dark:bg-secondary-100': user === 'bot',
    },
  ]}
>
  <p class={[{ '!text-primary-900': user === 'user', '!text-secondary-900': user === 'bot' }]}>
    {message}
  </p>
</div>
