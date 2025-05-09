<script lang="ts">
  import { ROUTE } from '$lib/constants';
  import type { LayoutProps } from './$types';

  let { children, data }: LayoutProps = $props();
</script>

<aside class="relative col-start-1 w-72">
  <nav class="absolute inset-0">
    <ul
      class="sticky top-14 bottom-0 left-0 h-full max-h-[calc(100dvh-(var(--spacing)*14.25))] overflow-y-auto shadow-sm"
    >
      {#each data.articles as otherArticle, _ (otherArticle.slug)}
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
  {@render children()}
</main>
