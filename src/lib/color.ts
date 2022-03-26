// import { type Color } from "paper/dist/paper-core";

export function colorCloseness(color1, color2) {
  const [l1, a1, b1] = rgbToLab(color1.red, color1.green, color1.blue);
  const [l2, a2, b2] = rgbToLab(color2.red, color2.green, color2.blue);
  return Math.max(100 - dE76(l1, a1, b1, l2, a2, b2), 0) / 100;
}

// From http://zschuessler.github.io/DeltaE/demos/de76-chroma-key/
function dE76(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
) {
  const ld = d - a;
  const ad = e - b;
  const bd = f - c;
  return Math.sqrt(ld * ld + ad * ad + bd * bd);
}

function rgbToLab(r: number, g: number, b: number) {
  var xyz = rgbToXyz(r, g, b);
  return xyzToLab(xyz[0], xyz[1], xyz[2]);
}
function rgbToXyz(r: number, g: number, b: number) {
  let _r = r; // / 255;
  let _g = g; // / 255;
  let _b = b; // / 255;

  if (_r > 0.04045) {
    _r = Math.pow((_r + 0.055) / 1.055, 2.4);
  } else {
    _r = _r / 12.92;
  }

  if (_g > 0.04045) {
    _g = Math.pow((_g + 0.055) / 1.055, 2.4);
  } else {
    _g = _g / 12.92;
  }

  if (_b > 0.04045) {
    _b = Math.pow((_b + 0.055) / 1.055, 2.4);
  } else {
    _b = _b / 12.92;
  }

  _r = _r * 100;
  _g = _g * 100;
  _b = _b * 100;

  const X = _r * 0.4124 + _g * 0.3576 + _b * 0.1805;
  const Y = _r * 0.2126 + _g * 0.7152 + _b * 0.0722;
  const Z = _r * 0.0193 + _g * 0.1192 + _b * 0.9505;

  return [X, Y, Z];
}
function xyzToLab(x, y, z) {
  var ref_X = 95.047;
  var ref_Y = 100.0;
  var ref_Z = 108.883;

  var _X = x / ref_X;
  var _Y = y / ref_Y;
  var _Z = z / ref_Z;

  if (_X > 0.008856) {
    _X = Math.pow(_X, 1 / 3);
  } else {
    _X = 7.787 * _X + 16 / 116;
  }

  if (_Y > 0.008856) {
    _Y = Math.pow(_Y, 1 / 3);
  } else {
    _Y = 7.787 * _Y + 16 / 116;
  }

  if (_Z > 0.008856) {
    _Z = Math.pow(_Z, 1 / 3);
  } else {
    _Z = 7.787 * _Z + 16 / 116;
  }

  var CIE_L = 116 * _Y - 16;
  var CIE_a = 500 * (_X - _Y);
  var CIE_b = 200 * (_Y - _Z);

  return [CIE_L, CIE_a, CIE_b];
}
