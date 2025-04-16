<script lang="ts">
  import { headTitle } from '$lib/utils';
  import BubbleGame from '$lib/components/Bubble/Game.svelte';
</script>

<svelte:head>
  <title>{headTitle('Welcome')}</title>
  <meta name="description" content="Learning, Building, Growing, Breaking" />
</svelte:head>

<section class="flex flex-col justify-center items-center p-1 mx-auto lg:w-3/4">
  <div class="w-full md:p-2 lg:p-5 h-[500px] md:h-[500px] lg:h-[800px]">
    <BubbleGame />
  </div>
</section>
