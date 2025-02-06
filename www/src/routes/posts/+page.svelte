<script lang="ts">
  import Card from 'flowbite-svelte/Card.svelte';
  import type { PageProps } from './$types';
  import { ROUTE } from '$lib/constants';
  import { headTitle } from '$lib/utils';

  const { data }: PageProps = $props();
</script>

<svelte:head>
  <title>{headTitle('Posts')}</title>
</svelte:head>

<section class="grid grid-cols-1 gap-4">
  {#each data.metadata as metadata}
    <Card
      size="none"
      href={metadata.status === 'fulfilled' ? ROUTE.posts.post(metadata.value.slug) : undefined}
    >
      {#if metadata.status === 'fulfilled'}
        <h2>{metadata.value.title}</h2>
        <p class="mt-3">{metadata.value.description}</p>
      {:else}
        <h2>Error</h2>
        <p>Failed to load post</p>
        <p>{metadata.reason}</p>
      {/if}
    </Card>
  {/each}
</section>
