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
    //Need to come up with way to toggle between three class states
    // TODO::
    // first state: light
    // second state: dark
    // third state: none
    const variantOne = target.ownerDocument.documentElement.classList.toggle('light-variant');
    const variantTwo = target.ownerDocument.documentElement.classList.toggle('dark-variant');

    if (target.ownerDocument === document) {
      window.localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
      
    }
  };
  // we are NOT in the iFrame
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
