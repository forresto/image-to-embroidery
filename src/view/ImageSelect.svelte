<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let label = "Choose";
  export let accept = "image/*";
  export let url: string;
  let file: File;

  const choose = (e: Event) => {
    const input = e.target as HTMLInputElement;
    file = input.files[0];
    url = URL.createObjectURL(file);
    dispatch("input", { file, url });
  };
</script>

<section>
  <label>
    {label}<br />
    <input type="file" {accept} on:input={choose} />
  </label>
  {#if url}
    <img src={url} alt="your selection to be transformed" />
  {/if}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5em;
  }
  img {
    max-width: 240px;
  }
</style>
