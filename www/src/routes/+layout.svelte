<script lang="ts">
  import { ROUTE } from '$lib/constants';
  import IconLink from '$lib/components/IconLink.svelte';
  import DarkMode from '$lib/components/DarkMode.svelte';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  import { dev } from '$app/environment';
  import '../app.css';
  import Cactus from '$lib/components/Icons/Cactus.svelte';
  import ArticleOutline from '$lib/components/Icons/ArticleOutline.svelte';

  let { children } = $props();

  injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<div class="grid grid-cols-1 min-h-screen bg-background grid-rows-[3.5rem_1fr] font-lato">
  <nav class="flex sticky top-0 items-center px-1 w-full shadow-sm md:px-2 2xl:px-4 bg-background">
    <h3 class="flex-1">
      <a class="rounded-lg" href={ROUTE.home.default}>Cesar Diaz</a>
    </h3>
    <section class="flex gap-2 items-center h-full">
      <IconLink href={ROUTE.posts.default}>
        <ArticleOutline />
      </IconLink>
      <!-- <Tooltip type="light" arrow>Blog Posts</Tooltip> -->
      <IconLink href={ROUTE.home.default}>
        <Cactus />
      </IconLink>
      <!-- <Tooltip type="light" arrow>About Me</Tooltip> -->
      <DarkMode />
      <!-- <Tooltip type="light" arrow>Theme</Tooltip> -->
    </section>
  </nav>
  <section class="grid grid-cols-1 grid-rows-1 gap-2 md:grid-cols-[auto_1fr]">
    {@render children()}
  </section>
</div>
