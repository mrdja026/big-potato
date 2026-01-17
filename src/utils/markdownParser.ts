// Parse custom picture-content blocks
export function parsePictureBlocks(content: string): string {
  const pictureRegex = /##picture-content([\s\S]*?)##end-picture-content/g;
  return content.replace(pictureRegex, (_match, innerContent) => {
    const props = parseProps(innerContent);
    // Ensure src has proper path (public folder is root)
    const src = props.src.startsWith("/") ? props.src : `/${props.src}`;
    const loading = props.priority ? "eager" : props.loading || "lazy";
    return `
<div class="my-8">
  <img
    src="${src}"
    alt="${props.title || "Blog image"}"
    id="${props.id}"
    class="${props.className || "w-full rounded-lg"}"
    width="${props.width || "100%"}"
    height="${props.height || "auto"}"
    loading="${loading}"
    ${props.priority ? 'fetchpriority="high"' : ""}
  />
  ${props.title ? `<p class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">${props.title}</p>` : ""}
</div>
    `.trim();
  });
}

// Parse custom video-content blocks
export function parseVideoBlocks(content: string): string {
  const videoRegex = /##video-content([\s\S]*?)##end-video-content/g;
  return content.replace(videoRegex, (_match, innerContent) => {
    const props = parseProps(innerContent);
    // Ensure src has proper path (public folder is root)
    const src = props.src.startsWith("/") ? props.src : `/${props.src}`;
    const poster = props.poster
      ? props.poster.startsWith("/")
        ? props.poster
        : `/${props.poster}`
      : "";
    return `
 <div class="my-8">
   <video
     src="${src}"
     ${poster ? `poster="${poster}"` : ""}
     title="${props.title || "Blog video"}"
     id="${props.id}"
     class="${props.className || "w-full rounded-lg"}"
     controls
     playsinline
     ${props.priority ? 'preload="auto"' : 'preload="metadata"'}
     ${props.loop ? "loop" : ""}
     ${props.muted ? "muted" : ""}
   ></video>
   ${props.title ? `<p class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">${props.title}</p>` : ""}
 </div>

    `.trim();
  });
}

// Helper function to parse key-value props from block content
function parseProps(content: string): Record<string, string> {
  const props: Record<string, string> = {};
  const lines = content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line);
  for (const line of lines) {
    const [key, value] = line.split(":").map((s) => s.trim());
    if (key && value) {
      props[key] = value;
    }
  }
  return props;
}

// Parse all custom blocks
export function parseCustomBlocks(content: string): string {
  return parseVideoBlocks(parsePictureBlocks(content));
}
