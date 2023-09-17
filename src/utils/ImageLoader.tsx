/**
 * Read this reference https://nextjs.org/docs/api-reference/next/image#loader
 */

type imageLoaderProps = {
  src?: string,
  width?: number,
  quality?: number
}

export const ImageLoader = ({ src, width, quality }: imageLoaderProps) => {
  return `${src}q?=${quality || 75}w=${width || 50}`
}