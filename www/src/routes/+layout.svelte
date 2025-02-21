<script lang="ts">
  import { ROUTE } from '$lib/constants';
  import Icon from '@iconify/svelte';
  import Tooltip from 'flowbite-svelte/Tooltip.svelte';
  import IconButton from '$lib/components/IconButton.svelte';
  import DarkMode from '$lib/components/DarkMode.svelte';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  import { dev } from '$app/environment';
  import '../app.css';

  let { children } = $props();

  injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<main
  class="grid grid-cols-1 min-h-screen bg-white dark:bg-black prime:bg-primary-100 second:bg-secondary-900 grid-rows-[auto_1fr] font-lato"
>
  <nav
    class="flex sticky top-0 z-10 grid-cols-2 items-center p-1 w-full bg-white shadow-sm md:p-2 2xl:p-4 dark:bg-black shadow-black shadow-b dark:shadow-white"
  >
    <h3 class="flex-1">
      <a class="rounded-lg" href={ROUTE.home.default}>Cesar Diaz</a>
    </h3>
    <section class="flex gap-2 items-center h-full">
      <IconButton href={ROUTE.posts.default} outline>
        <Icon icon="material-symbols:article-outline" width="24" height="24" />
      </IconButton>
      <Tooltip type="light" arrow>Blog Posts</Tooltip>
      <IconButton href={ROUTE.home.default} outline>
        <Icon icon="lucide-lab:cactus" width="24" height="24" />
      </IconButton>
      <Tooltip type="light" arrow>About Me</Tooltip>
      <DarkMode />
      <Tooltip type="light" arrow>Theme</Tooltip>
    </section>
  </nav>
  <section class="p-1 md:p-2 2xl:p-4">
    {@render children()}
  </section>
</main>
