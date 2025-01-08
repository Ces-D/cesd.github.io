<!--@component
IconButton
Meant for a button that only contains an icon
 -->

<script lang="ts">
  import Button from 'flowbite-svelte/Button.svelte';
  import type { ButtonProps } from 'flowbite-svelte/Button.svelte';

  let { children, ...props }: Omit<ButtonProps, 'class'> = $props();
</script>

<Button
  {...props}
  class="text-black dark:text-white border-gray-black outline-primary dark:border-gray-black dark:hover:text-gray-white dark:hover:bg-gray-black hover:text-gray-black hover:bg-gray-white"
  size="sm"
>
  {@render children?.()}
</Button>
