<script lang="ts">
  import { onMount } from 'svelte';
  import { Explosion } from './Elements';
  import { frame } from 'motion';

  let canvas: HTMLCanvasElement;

  const animate = (explosion: Explosion) => {
    if (explosion) {
      Promise.all([explosion.boomAnimation(), ...explosion.particleAnimations()]).then(() => {
        console.log('boom');
      });
    }
  };

  onMount(() => {
    canvas.width = canvas.parentElement?.clientWidth || 300;
    canvas.height = canvas.parentElement?.clientHeight || 300;

    let context = canvas.getContext('2d');
    if (context) {
      const firstExplosion = new Explosion(
        {
          canvasWidth: canvas.width,
          x: canvas.width / 2,
          y: canvas.height / 2,
        },
        context
      );
      frame.update(() => animate(firstExplosion as Explosion));
    }
  });

  const createExplosion = async (e: Event) => {
    let explosion: Explosion | null = null;
    let context = canvas.getContext('2d');
    if (context) {
      if (e instanceof PointerEvent) {
        explosion = new Explosion(
          { canvasWidth: canvas.width, x: e.offsetX, y: e.offsetY },
          context
        );
      } else if (e instanceof TouchEvent) {
        explosion = new Explosion(
          {
            canvasWidth: canvas.width,
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
          },
          context
        );
      } else {
        console.log('Unhandled event type');
        console.log(e);
      }

      if (explosion instanceof Explosion) {
        frame.update(() => animate(explosion as Explosion), false);
      }
    }
  };
</script>

<canvas
  bind:this={canvas}
  class="rounded-md border cursor-pointer"
  onclick={createExplosion}
  ontouchstart={createExplosion}
>
</canvas>
