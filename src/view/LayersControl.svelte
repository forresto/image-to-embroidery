<script lang="ts">
  import { layers, selectedLayer } from "../stores";

  function addLayer(e: Event) {
    $layers.push({ x: 0, y: 0, stroke: "#000", d: "" });
    $layers = $layers;
    $selectedLayer = $layers.length - 1;
  }

  function selectLayer(index: number) {
    $selectedLayer = index;
  }
  function deleteLayer(index: number) {
    $layers.splice(index, 1);
    $layers = $layers;
    $selectedLayer = index - 1;
  }
  function duplicateLayer(index: number) {
    const layer = $layers[index];
    const layerCopy = { ...layer };
    $layers.splice(index, 0, layerCopy);
    $layers = $layers;
    $selectedLayer = index + 1;
  }
</script>

<section>
  <ul>
    {#each $layers as { x, y, stroke }, i}
      <li>
        <input class="swatch" type="color" bind:value={stroke} />
        <label class="select-position">
          <input
            type="radio"
            checked={$selectedLayer === i}
            on:input={() => selectLayer(i)}
          />
          {x}, {y}
        </label>
        <button title="Duplicate" on:click={() => duplicateLayer(i)}>➕</button>
        <button title="Delete" on:click={() => deleteLayer(i)}>🗑</button>
      </li>
    {/each}
  </ul>
</section>

<style>
  .swatch {
    width: 3em;
    height: 2em;
    display: inline-block;
    margin-right: 0.5em;
  }
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: flex;
    gap: 4px;
    align-items: center;
  }
  .select-position {
    width: 8em;
  }
</style>
