import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.get("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Bascorp";

    const fontData = await fetch(
      new URL("../../../assets/fonts/Inter-Regular.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());
    const fontData2 = await fetch(
      new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    const imageData = await fetch(
      new URL("../../../assets/images/logo_dark.svg", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          tw="flex flex-col items-center justify-center h-full w-full bg-red-600 gap-y-3"
          style={{ fontFamily: "Inter-Regular" }}
        >
          <img
            src={`data:image/svg+xml;base64,${Buffer.from(imageData).toString(
              "base64"
            )}`}
            alt="logo"
            height={150}
            width={150}
          />
          <h1
            tw="text-5xl font-bold text-white"
            style={{ fontFamily: "Inter-Bold" }}
          >
            {title}
          </h1>
          <p tw="text-3xl text-white">
            Costruzione, ristrutturazione e impianti elettrici
          </p>
        </div>
      ),
      {
        fonts: [
          {
            name: "Inter-Regular",
            data: fontData,
            style: "normal",
          },
          {
            name: "Inter-Bold",
            data: fontData2,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`Failed to generate OG image`, e.message);
    return new Response(`Failed to generate OG image`, { status: 500 });
  }
}
