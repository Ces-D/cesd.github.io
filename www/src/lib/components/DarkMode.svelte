<!--@component
DarkMode
custom dark mode switch
 -->

<script lang="ts">
  import IconButton from './IconButton.svelte';
  import Icon from '@iconify/svelte';

  const toggleTheme = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    const isDark = target.ownerDocument.documentElement.classList.toggle('dark');
    if (target.ownerDocument === document)
      // we are NOT in the iFrame
      localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
  };
</script>

<svelte:head>
  <script>
    if ('color-theme' in localStorage) {
      // explicit preference - overrides author's choice
      localStorage.getItem('color-theme') === 'dark'
        ? window.document.documentElement.classList.add('dark')
        : window.document.documentElement.classList.remove('dark');
    } else {
      // browser preference - does not overrides
      if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        window.document.documentElement.classList.add('dark');
    }
  </script>
</svelte:head>

<IconButton onclick={toggleTheme} outline>
  <Icon icon="tabler:moon" class="hidden dark:block" width="24" height="24" />
  <Icon icon="tabler:sun" class="dark:hidden" width="24" height="24" />
</IconButton>
