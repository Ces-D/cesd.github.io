<!--@component
IconButton
Meant for a button that only contains an icon
 -->

<script lang="ts">
  import Button from 'flowbite-svelte/Button.svelte';
  import type { ButtonProps } from 'flowbite-svelte/Button.svelte';

  let { children, ...props }: ButtonProps = $props();
</script>

<Button
  {...props}
  class="p-3 rounded-2xl hover:cursor-pointer bg-background-inverted-50 text-text-inverted hover:bg-background-inverted"
  size="sm"
>
  {@render children?.()}
</Button>
