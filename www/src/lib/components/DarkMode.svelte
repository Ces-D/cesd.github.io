<!--@component
DarkMode
custom dark mode switch
 -->

<script lang="ts">
  import IconButton from './IconButton.svelte';
  import Icon from '@iconify/svelte';
  import { theme } from '../types';
  import { setDocumentClass } from '../utils';

  const toggleTheme = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    const currentVariant = theme.safeParse(target.ownerDocument.documentElement.classList.item(0));
    const currentVariantIndex = theme.options.indexOf(
      currentVariant.success ? currentVariant.data : theme.enum.light
    );
    const nextVariant =
      theme.options.at(
        currentVariantIndex === theme.options.length - 1 ? 0 : currentVariantIndex + 1
      ) ?? theme.enum.light;

    if (target.ownerDocument === document) {
      setDocumentClass(nextVariant);
      window.localStorage.setItem('color-theme', nextVariant);
    }
  };

  // we are NOT in the iFrame
</script>

<svelte:head>
  <script>
    // Had to copy else import error :(
    const setDocumentClass = (newTheme) => {
      const currentTheme = window.document.documentElement.classList.item(0);
      if (currentTheme) {
        window.document.documentElement.classList.replace(currentTheme, newTheme);
      } else {
        window.document.documentElement.classList.add(newTheme);
      }
    };
    // not the safest but oh well
    const storedTheme = window.localStorage.getItem('color-theme');
    if (storedTheme) {
      // user preference - overrides
      setDocumentClass(storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // browser preference - does not overrides
      setDocumentClass('dark');
    } else {
      setDocumentClass('light');
    }
  </script>
</svelte:head>

<IconButton onclick={toggleTheme} outline>
  <Icon icon="tabler:moon" id={theme.enum.dark} class="hidden dark:block" width="24" height="24" />
  <Icon
    icon="tabler:sun"
    id={theme.enum.light}
    class="block dark:hidden prime:hidden second:hidden"
    width="24"
    height="24"
  />
  <Icon
    icon="tabler:sun-electricity"
    id={theme.enum.primary}
    class="hidden prime:block"
    width="24"
    height="24"
  />
  <Icon
    icon="tabler:moon-2"
    id={theme.enum.secondary}
    class="hidden second:block"
    width="24"
    height="24"
  />
</IconButton>
