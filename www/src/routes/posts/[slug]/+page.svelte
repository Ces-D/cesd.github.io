<script lang="ts">
  import { ROUTE } from '$lib/constants';
  import type { PageProps } from './$types';

  const { data }: PageProps = $props();
</script>

<svelte:head>
  <title>{data.metadata.title}</title>
  <meta name="description" content={data.metadata.description} />
</svelte:head>

<aside class="relative col-start-1 w-72">
  <nav class="absolute inset-0">
    <ul
      class="sticky top-14 bottom-0 left-0 h-full max-h-[calc(100dvh-(var(--spacing)*14.25))] overflow-y-auto shadow-sm"
    >
      {#each data.otherArticles as otherArticle, _ (otherArticle.slug)}
        <li>
          <a href={ROUTE.posts.post(otherArticle.slug)}>
            <p
              class="p-2 my-2 rounded-sm cursor-pointer hover:text-primary-900 hover:bg-primary-100"
            >
              {otherArticle.title}
            </p>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</aside>

<main class="p-1 mx-auto w-full md:p-2 lg:p-4 max-w-[1000px]">
  <h1 class="underline text-primary-900">{data.metadata.title}</h1>
  <div class="grid gap-x-3 justify-start items-center my-5 w-full grid-cols-[auto_1fr]">
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
</main>
