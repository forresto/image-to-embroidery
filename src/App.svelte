<script lang="ts">
  import debounce from "lodash/debounce";

  import ImageSelect from "./view/ImageSelect.svelte";
  import DragCanvas from "./view/DragCanvas.svelte";
  import PathLayers from "./view/PathLayers.svelte";
  import LayersControl from "./view/LayersControl.svelte";

  import { zigzag } from "./lib/paper";

  import {
    imageSourceURL,
    width,
    height,
    scale,
    svgPathsURL,
    layers,
    rasterCanvas,
  } from "./stores";

  let showImage = true;

  let bgColor = "#FFFFFF";
  let advance = 4;
  let zig = 8;
  let auto = true;

  let previewImage: HTMLImageElement;
  function fitToImage() {
    if (previewImage) {
      $width = previewImage.naturalWidth;
      $height = previewImage.naturalHeight;
    }
  }

  let paperCanvas: HTMLCanvasElement;

  let paperProject;
  function draw() {
    paperProject = zigzag(
      paperCanvas,
      $rasterCanvas,
      $layers,
      $scale,
      advance,
      zig
    );
  }

  function download() {
    if (!paperProject) return;
    const svgString = paperProject.exportSVG({
      asString: true,
      embedImages: false,
    });
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `zigzag_${Date.now()}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  let autodraw = debounce(draw, 100);
  $: {
    if (
      auto &&
      paperCanvas &&
      $rasterCanvas &&
      $layers.length &&
      $scale &&
      advance &&
      zig
    ) {
      autodraw();
    }
  }
</script>

<h1>image-to-embroidery 🖼→🪡</h1>
<p>collab between some folks...</p>
<main>
  <div class="v-box">
    <h2>Select image</h2>
    <ImageSelect label="Image to stitch" bind:url={$imageSourceURL} />
    <div>
      <label>
        <input type="number" bind:value={$width} />
        Width
      </label>
      <label>
        <input type="number" bind:value={$height} />
        Height
      </label>
      <button on:click={fitToImage}>Fit to image</button>
    </div>
    <label>
      <input type="checkbox" bind:checked={showImage} />
      Show image
    </label>
    <label>
      <input type="color" bind:value={bgColor} />
      Background color
    </label>
    <label>
      <input type="number" bind:value={advance} />
      Advance length
    </label>
    <label>
      <input type="number" bind:value={zig} />
      Zigzag width
    </label>
    <label>
      <input type="checkbox" bind:checked={auto} />
      Auto draw
    </label>
  </div>
  <div class="v-box">
    <h2>Path layers</h2>
    <ImageSelect
      label="SVG for base paths and colors"
      accept="image/svg+xml"
      bind:url={$svgPathsURL}
    />
    <div>Layer count: {$layers.length}</div>
    <div>
      <label>
        <input type="number" bind:value={$scale} step="0.01" />
        Scale
      </label>
    </div>
    <LayersControl />
  </div>
  <div class="v-box">
    <h2>Base paths</h2>
    <div class="stack" style="background-color: {bgColor};">
      <img
        width={$width}
        height={$height}
        class={showImage && $imageSourceURL ? "" : "transparent"}
        src={$imageSourceURL}
        alt=""
        bind:this={previewImage}
      />
      <div class="stack-layer">
        <PathLayers width={$width} height={$height} />
      </div>
      <div class="stack-layer">
        <DragCanvas width={$width} height={$height} />
      </div>
    </div>
  </div>
  <div class="v-box">
    <h2>Output</h2>
    <canvas bind:this={paperCanvas} width={$width} height={$height} />
    <button on:click={draw}>Draw</button>
    <button on:click={download}>Download SVG</button>
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .transparent {
    opacity: 0;
  }

  .stack {
    position: relative;
  }
  .stack-layer {
    position: absolute;
    top: 0;
    left: 0;
  }
  img {
    object-fit: cover;
  }
  label {
    display: block;
  }
  .v-box {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  h2 {
    margin: 0;
  }
</style>
