<script lang="ts">
  import { layers, selectedLayer, scale } from "../stores";
  export let width = 640;
  export let height = 480;

  let clientStartX: number;
  let clientStartY: number;
  let layerStartX: number;
  let layerStartY: number;

  function startDrag(event: PointerEvent) {
    // Only left click
    if (event.button !== 0) return;
    clientStartX = event.clientX;
    clientStartY = event.clientY;
    const layer = $layers[$selectedLayer];
    layerStartX = layer.x;
    layerStartY = layer.y;
    window.addEventListener("mousemove", drag);
    window.addEventListener("mouseup", stopDrag);
  }
  function drag(event: PointerEvent) {
    const rescale = 1 / $scale;
    const deltaX = (event.clientX - clientStartX) * rescale;
    const deltaY = (event.clientY - clientStartY) * rescale;
    const layer = $layers[$selectedLayer];
    layer.x = Math.round(layerStartX + deltaX);
    layer.y = Math.round(layerStartY + deltaY);

    $layers = $layers;
  }
  function stopDrag() {
    window.removeEventListener("mousemove", drag);
    window.removeEventListener("mouseup", stopDrag);
    clientStartX = undefined;
    clientStartY = undefined;
  }
</script>

<svg {width} {height} on:pointerdown={startDrag}>
  {#if $layers[$selectedLayer]}
    <path
      d="M 0 -20 L 0 20 M -20 0 L 20 0"
      stroke="white"
      opacity="0.75"
      fill="none"
      stroke-width="1.5"
      transform="
      translate(
        {$layers[$selectedLayer].x * $scale} {$layers[$selectedLayer].y *
        $scale}
        )
      "
    />
  {/if}
</svg>

<style>
  svg {
    user-select: none;
  }
</style>
