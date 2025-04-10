<script lang="ts">
  import type { PageProps } from './$types';

  const { data }: PageProps = $props();
</script>

<svelte:head>
  <title>{data.metadata.title}</title>
  <meta name="description" content={data.metadata.description} />
</svelte:head>

<section class="flex flex-col gap-2 justify-center items-center p-1 m-auto w-full max-w-[1000px]">
  <h1 class="underline text-primary-900">{data.metadata.title}</h1>
  <div class="grid gap-x-3 justify-start items-center w-full grid-cols-[auto_1fr]">
    <p>Authored:</p>
    <p>{new Date(data.metadata.analytics.created_at).toLocaleDateString()}</p>
    <p>Reading Time:</p>
    <p>{data.metadata.analytics.reading_time_in_minutes} min</p>
  </div>

  <article>
    {@html data.content}
  </article>

  <hr class="my-1 mx-auto w-48 h-1 rounded-sm border-0 md:my-2 bg-primary-900" />

  <div class="w-full">
    <p>Genre:</p>
    <p>{data.metadata.interest.genre}</p>
  </div>
  <div class="w-full">
    <p>Keywords:</p>
    <p>{data.metadata.interest.keywords.join(', ')}</p>
  </div>
</section>
