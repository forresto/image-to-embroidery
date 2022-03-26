<script lang="ts">
  import { layers, scale } from "../stores";
  export let width = 640;
  export let height = 480;
</script>

<svg {width} {height} viewBox="0 0 {width} {height}">
  {#each $layers as { d, x, y, stroke }, i}
    <path
      {d}
      {stroke}
      fill="none"
      transform="scale({$scale}) translate({x} {y})"
      stroke-width={2 / $scale}
    />
  {/each}
</svg>

<style>
  svg {
    max-width: 100%;
    height: auto;
  }
</style>
