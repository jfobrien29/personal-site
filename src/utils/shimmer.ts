// Stand blur URL for when we're using a NextJS image.
// from NextJS https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/shimmer.js
// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#fedeb9" offset="20%" />
      <stop stop-color="#f80" offset="50%" />
      <stop stop-color="#fedeb9" offset="80%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#fedeb9" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="2s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export const blurDataUrlShimmer = (w: number, h: number) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
