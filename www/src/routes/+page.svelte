<script lang="ts">
  import { headTitle } from '$lib/utils';
  import BubbleGame from '$lib/components/Bubble/Game.svelte';
</script>

<svelte:head>
  <title>{headTitle('Welcome')}</title>
  <meta name="description" content="Learning, Building, Growing, Breaking" />
</svelte:head>

<main class="col-span-full p-1 md:p-2 lg:p-4">
  <div class="lg:mx-auto h-[500px] md:h-[500px] lg:max-w-3/4 lg:h-[800px]">
    <BubbleGame />
  </div>
</main>
