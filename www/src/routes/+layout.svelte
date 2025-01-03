<script lang="ts">
  import '../app.css';
  import { ROUTE } from '$lib/constants';
  import Icon from '@iconify/svelte';
  import Tooltip from 'flowbite-svelte/Tooltip.svelte';
  import Button from 'flowbite-svelte/Button.svelte';

  let { children } = $props();

  let theme = localStorage.getItem('theme') || 'light';
  let toggleTheme = () => {
    theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark');
  };
</script>

<main
  class="overflow-x-hidden overflow-y-scroll w-screen min-h-screen bg-white dark:bg-black font-lato"
>
  <nav
    class="flex sticky top-0 grid-cols-2 items-center p-1 w-full bg-white md:p-2 2xl:p-4 dark:bg-black"
  >
    <h3 class="flex-1"><a class="w-fit" href={ROUTE.home}>Cesar Diaz</a></h3>
    <Button
      href={ROUTE.home}
      class="text-black border-gray-black hover:text-gray-black hover:bg-gray-white"
      outline
    >
      <Icon icon="lucide-lab:cactus" width="24" height="24" />
    </Button>
    <Tooltip arrow>About Me</Tooltip>
    <Button
      onclick={toggleTheme}
      class="text-black border-gray-black hover:text-gray-black hover:bg-gray-white"
      outline
    >
      <Icon icon="tabler:moon" width="24" height="24" />
    </Button>
  </nav>
  <section class="p-1 md:p-2 2xl:p-4">
    {@render children()}
  </section>
</main>
