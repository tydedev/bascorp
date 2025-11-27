import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata
export const alt = "Bascorp";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font loading, process.cwd() is Next.js project directory
  const interSemiBold = await readFile(
    join(process.cwd(), "assets/fonts/Inter-Bold.ttf")
  );
  const imageData = await readFile(
    join(process.cwd(), "assets/images/logo.svg")
  );

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw="flex items-center justify-center w-full h-full text-white bg-primary">
        <img src="/logo.svg" alt="Bascorp" width={150} height={150} />
        <h1 tw="text-5xl">Bascorp</h1>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
