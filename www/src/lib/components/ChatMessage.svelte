<script lang="ts">
  import type { Message } from '$lib/types';

  const { message, user }: Message = $props();
</script>

<p class={['w-3/4', { 'mr-auto': user === 'user', 'ml-auto': user === 'bot' }]}>
  {message}
</p>
