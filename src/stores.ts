import { derived, writable, type Writable, type Readable } from "svelte/store";

export interface Layer {
  d: string;
  stroke: string;
  x: number;
  y: number;
}

export const layers: Writable<Array<Layer>> = writable([]);

export const selectedLayer = writable(0);

/** Changing svgPathsURL will fetch, parse, and overwrite layers. */
export const svgPathsURL = writable("src/assets/base-cmyk-spirals.svg");
svgPathsURL.subscribe((url) => {
  fetch(url)
    .then((response) => response.text())
    .then((text) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "image/svg+xml");
      const paths = doc.getElementsByTagName("path");
      if (paths.length > 300) {
        throw new Error(
          "That's a lot of paths. This app would melt. Try again with 300 or fewer. 😅"
        );
      }
      const pathsArray = Array.from(paths).map((path) => {
        return {
          d: path.getAttribute("d"),
          stroke: path.getAttribute("stroke") || "#000000",
          x: 0,
          y: 0,
        };
      });

      layers.set(pathsArray);
    })
    .catch((err) => {
      window.alert(err);
    });
});

export const width = writable(720);
export const height = writable(720);
export const scale = writable(1.0);

export const imageSourceURL = writable("src/assets/fo-scan.jpg");
/** The selected image's pixels drawn to a canvas for easier access.  */
export const rasterCanvas: Readable<HTMLCanvasElement> = derived(
  [imageSourceURL, width, height],
  ([imageSourceURL, width, height], set) => {
    const img = document.createElement("img");
    img.addEventListener("load", () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;

      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = width / height;
      let resultHeight: number;
      let resultWidth: number;
      if (imgRatio > canvasRatio) {
        resultHeight = height;
        resultWidth = height * imgRatio;
      } else {
        resultWidth = width;
        resultHeight = width / imgRatio;
      }
      const x = (width - resultWidth) * 0.5;
      const y = (height - resultHeight) * 0.5;

      ctx.drawImage(img, x, y, resultWidth, resultHeight); //, 0, 0, width, height);
      set(canvas);
    });
    img.src = imageSourceURL;
  }
);
