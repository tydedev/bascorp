export const size = { width: 1200, height: 630 };

export default function Image() {
  return (
    <img
      src="/og.png"
      alt="Open Graph Image"
      width={size.width}
      height={size.height}
    />
  );
}
