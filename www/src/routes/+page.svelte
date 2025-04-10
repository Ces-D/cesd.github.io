<script lang="ts">
  import { ROUTE } from '$lib/constants';
  import IconButton from '$lib/components/IconButton.svelte';
  import Icon from '@iconify/svelte';
  import type { PageData } from './$types';
  import { headTitle } from '$lib/utils';

  const { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{headTitle('Welcome')}</title>
  <meta name="description" content="Learning, Building, Growing, Breaking" />
</svelte:head>

<section class="flex flex-col justify-center items-center p-1 mx-auto md:w-3/4 lg:w-1/2"></section>
