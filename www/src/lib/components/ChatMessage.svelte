<script lang="ts">
  import type { Message } from '$lib/types';
  import Avatar from 'flowbite-svelte/Avatar.svelte';

  const { message, user }: Message = $props();
</script>

<div class={['max-w-[60%] flex gap-2 my-2 items-end', user === 'user' ? 'mr-auto' : 'ml-auto']}>
  <p
    class={[
      'rounded-lg p-4 whitespace-pre-line break-words text-justify',
      {
        'bg-primary-300 dark:bg-primary-100': user === 'user',
        'bg-secondary-300 dark:bg-secondary-100': user === 'bot',
      },

      { '!text-primary-900': user === 'user', '!text-secondary-900': user === 'bot' },
    ]}
  >
    {message}
  </p>
  <Avatar border class={[user === 'user' ? 'order-first' : 'order-last']}
    >{user === 'user' ? 'You' : 'Bot'}</Avatar
  >
</div>
