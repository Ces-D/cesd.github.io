<!--@component
DarkMode
custom dark mode switch
 -->

<script lang="ts">
  import IconButton from './IconButton.svelte';
  import Icon from '@iconify/svelte';
  import { theme } from '../types';

  const toggleTheme = (_: MouseEvent) => {
    let target = window.document.documentElement;
    const currentThemeParse = theme.safeParse(target.getAttribute('data-theme'));
    let currentTheme = currentThemeParse.success ? currentThemeParse.data : theme.enum.light;

    const currentVariantIndex = theme.options.indexOf(currentTheme);
    const nextThemeVariant =
      theme.options.at(
        currentVariantIndex === theme.options.length - 1 ? 0 : currentVariantIndex + 1
      ) ?? theme.enum.light;

    target.setAttribute('data-theme', nextThemeVariant);
    window.localStorage.setItem('color-theme', nextThemeVariant);
  };
</script>

<svelte:head>
  <script>
    const storedTheme = window.localStorage.getItem('color-theme');
    const body = window.document.documentElement;

    if (storedTheme) {
      // user preference - overrides
      body.setAttribute('data-theme', storedTheme);
      window.localStorage.setItem('color-theme', storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.setAttribute('data-theme', 'dark');
      window.localStorage.setItem('color-theme', 'dark');
    } else {
      body.setAttribute('data-theme', 'light');
      window.localStorage.setItem('color-theme', 'light');
    }
  </script>
</svelte:head>

<IconButton onclick={toggleTheme} outline>
  <span class="theme-icon-light">
    <Icon icon="tabler:sun" width="24" height="24" />
  </span>
  <span class="theme-icon-dark">
    <Icon icon="tabler:moon" width="24" height="24" />
  </span>
  <span class="theme-icon-orange">
    <Icon icon="tabler:sun-electricity" width="24" height="24" />
  </span>

  <!-- <Icon -->
  <!--   icon="tabler:moon-2" -->
  <!--   id={theme.enum.secondary} -->
  <!--   class="hidden second:block" -->
  <!--   width="24" -->
  <!--   height="24" -->
  <!-- /> -->
</IconButton>

<style>
  .theme-icon-light {
    display: block;
  }
  .theme-icon-dark {
    display: none;
  }
  .theme-icon-orange {
    display: none;
  }
  :global(html[data-theme='dark'] .theme-icon-light) {
    display: none;
  }
  :global(html[data-theme='dark'] .theme-icon-dark) {
    display: block;
  }
  :global(html[data-theme='dark'] .theme-icon-orange) {
    display: none;
  }

  :global(html[data-theme='orange'] .theme-icon-light) {
    display: none;
  }
  :global(html[data-theme='orange'] .theme-icon-dark) {
    display: none;
  }
  :global(html[data-theme='orange'] .theme-icon-orange) {
    display: block;
  }
</style>
