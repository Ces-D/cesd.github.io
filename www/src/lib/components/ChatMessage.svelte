<script lang="ts">
  type ChatMessageProps = {
    message: string;
    user: 'left' | 'right';
  };
  const { message, user }: ChatMessageProps = $props();
</script>

<p class={['w-3/4', { 'mr-auto': user === 'left', 'ml-auto': user === 'right' }]}>
  {message}
</p>
