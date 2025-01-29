<script lang="ts">
  import Card from 'flowbite-svelte/Card.svelte';
  import type { PageProps } from './$types';
  import { ROUTE } from '$lib/constants';

  const { data }: PageProps = $props();
</script>

<section class="grid grid-cols-2 gap-4 md:grid-cols-4">
  {#each data as metadata}
    <Card href={ROUTE.posts.post(metadata.slug)}>
      <h2>{metadata.title}</h2>
      <p>{metadata.description}</p>
    </Card>
  {/each}
</section>
