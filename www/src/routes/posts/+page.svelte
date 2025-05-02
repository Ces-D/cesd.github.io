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
  {#each data.metadata as metadata, i (i)}
    <Card
      size="none"
      href={ROUTE.posts.post(metadata.slug)}
      class="p-1 md:p-2 lg:py-2 lg:px-3 hover:bg-background-inverted hover:text-text-inverted"
    >
      <h2 style="color: inherit;">{metadata.title}</h2>
      <p style="color: inherit;" class="mt-3">{metadata.description}</p>
    </Card>
  {/each}
</section>
