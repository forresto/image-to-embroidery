import paper, {
  Color,
  Point,
  Size,
  Path,
  Raster,
  Rectangle,
} from "paper/dist/paper-core";
import { colorCloseness } from "./color";
import type { Layer } from "../stores";

let animationFrame: number;

export function zigzag(
  paperCanvas: HTMLCanvasElement,
  rasterCanvas: HTMLCanvasElement,
  layers: Array<Layer>,
  scale: number,
  advance: number,
  zig: number
) {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
  const width = paperCanvas.width;
  const height = paperCanvas.height;
  const size = new Size(width, height);
  const advanceHalf = advance * 0.5;

  const rasterProject = new paper.Project(size);
  rasterProject.activate();
  const raster = new Raster(rasterCanvas);
  raster.position = rasterProject.view.center;
  raster.visible = false;
  // Blur?
  // raster.canvas.getContext("2d").filter = "blur(2px)";
  // raster.drawImage(raster.canvas, new Point(0, 0));

  const paperProject = new paper.Project(paperCanvas);
  paperProject.activate();

  // Our paths to paper paths
  const pathsIn = layers.map((layer) => {
    const path = new Path(layer.d);
    path.strokeColor = new Color(layer.stroke);
    path.strokeWidth = 1;
    path.translate(new Point(layer.x, layer.y));
    path.scale(scale, new Point(0, 0));
    path.visible = false;
    return path;
  });

  const pathsOut = layers.map((layer) => {
    const path = new Path("");
    path.strokeColor = new Color(layer.stroke);
    path.strokeWidth = 1;
    path.strokeJoin = "round";
    path.strokeCap = "round";
    return path;
  });

  let layerIndex = 0;
  let pathDistance = 0;
  function draw() {
    const frameStartTime = Date.now();
    let keepGoing = true;
    while (keepGoing && Date.now() - frameStartTime < 1000 / 60) {
      // const layer = layers[layerIndex];
      const pathIn = pathsIn[layerIndex];
      const pathOut = pathsOut[layerIndex];

      const point1 = pathIn.getPointAt(pathDistance);
      if (point1) {
        const color1 = raster.getAverageColor(point1);
        if (color1) {
          const value1 = colorCloseness(pathIn.strokeColor, color1);
          const zz = pathIn
            .getTangentAt(pathDistance)
            .multiply(value1 * zig)
            .rotate(90);
          pathOut.add(point1.add(zz));
        } else {
          pathOut.add(point1);
          // TODO? jump stitch
        }
      }

      const point2 = pathIn.getPointAt(pathDistance + advanceHalf);
      if (point2) {
        const color2 = raster.getAverageColor(point2);
        if (color2) {
          const value2 = colorCloseness(pathIn.strokeColor, color2);
          const zz = pathIn
            .getTangentAt(pathDistance + advanceHalf)
            .multiply(value2 * zig)
            .rotate(-90);
          pathOut.add(point2.add(zz));
        } else {
          pathOut.add(point2);
          // jump stitch?
        }
      }

      pathDistance += advance;
      if (pathDistance >= pathIn.length) {
        pathDistance = 0;
        layerIndex++;
      }
      if (layerIndex >= layers.length) {
        keepGoing = false;
      }
    }
    if (keepGoing) {
      animationFrame = requestAnimationFrame(draw);
    }
  }
  animationFrame = requestAnimationFrame(draw);

  return paperProject;
}
