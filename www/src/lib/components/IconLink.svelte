<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  let { href, children }: Pick<HTMLAnchorAttributes, 'children' | 'href'> = $props();
</script>

<a
  {href}
  class="p-2 rounded-2xl border hover:cursor-pointer h-fit w-fit bg-background-inverted-50 text-text-inverted hover:bg-background-inverted"
>
  {@render children?.()}
</a>
