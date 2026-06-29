const WIDTH = 1080;
const HEIGHT = 1920;

function roundedRectPath(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.arcTo(x + width, y, x + width, y + radius, radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
  ctx.lineTo(x + radius, y + height);
  ctx.arcTo(x, y + height, x, y + height - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.closePath();
}

// Renders a plain gradient background with the envelope logo mark for an
// Instagram Story draft. No caption text is baked in — Instagram doesn't let
// shared images carry an editable text layer, so the user adds their own
// caption inside Instagram after the share sheet opens.
export function generateStoryImage(): Promise<Blob> {
  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return Promise.reject(new Error("Canvas not supported"));
  }

  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, "#DCE8D5");
  gradient.addColorStop(1, "#B3CAA8");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Envelope mark, scaled up from the logo's 32x32 viewBox (Logo.tsx),
  // centered near the top third of the Story.
  const scale = 10;
  const centerX = WIDTH / 2;
  const centerY = HEIGHT * 0.28;
  const offsetX = centerX - 16 * scale;
  const offsetY = centerY - 16 * scale;

  ctx.strokeStyle = "#38402F";
  ctx.lineWidth = 1.5 * scale;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  roundedRectPath(
    ctx,
    offsetX + 3 * scale,
    offsetY + 7 * scale,
    26 * scale,
    18 * scale,
    3 * scale
  );
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(offsetX + 4 * scale, offsetY + 9 * scale);
  ctx.lineTo(offsetX + 16 * scale, offsetY + 17 * scale);
  ctx.lineTo(offsetX + 28 * scale, offsetY + 9 * scale);
  ctx.stroke();

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("Could not generate Story image"));
      }
    }, "image/png");
  });
}
