<!--@component
DarkMode
custom dark mode switch
 -->

<script lang="ts">
  import IconButton from './IconButton.svelte';
  import { theme } from '../types';
  import { getCurrentTheme } from '$lib/utils';
  import Sun from './Icons/Sun.svelte';
  import Moon from './Icons/Moon.svelte';
  import Sunset from './Icons/Sunset.svelte';

  const toggleTheme = (_: MouseEvent) => {
    let { currentTheme, target } = getCurrentTheme();
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

<IconButton onclick={toggleTheme}>
  <span class="theme-icon-light">
    <Sun />
  </span>
  <span class="theme-icon-dark">
    <Moon />
  </span>
  <span class="theme-icon-orange">
    <Sunset />
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
