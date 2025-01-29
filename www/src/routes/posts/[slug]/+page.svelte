<script lang="ts">
  import type { PageProps } from './$types';
  import { marked } from 'marked';

  const { data }: PageProps = $props();
  const htmlContent = marked.parse(data.content);
</script>

<svelte:head>
  <title>{data.metadata.title}</title>
  <meta name="description" content={data.metadata.description} />
</svelte:head>

<h1>{data.metadata.title}</h1>
<article>
  {@html htmlContent}
</article>
