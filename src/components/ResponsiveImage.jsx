import React from 'react'

export default function ResponsiveImage({ fileName, alt = '', className = '', width, height, priority = false }) {
  const base = `${import.meta.env.BASE_URL || '/'}assets/images`
  const sizes = '(max-width: 720px) 100vw, 720px'

  const srcSetFor = (ext) =>
    `${base}/${fileName}-320.${ext} 320w, ${base}/${fileName}-720.${ext} 720w, ${base}/${fileName}-1280.${ext} 1280w`

  const loading = priority ? 'eager' : 'lazy'

  return (
    <picture className={className} style={{ display: 'block' }}>
      <source type="image/avif" srcSet={srcSetFor('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcSetFor('webp')} sizes={sizes} />
      <img
        src={`${base}/${fileName}-720.jpg`}
        srcSet={srcSetFor('jpg')}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </picture>
  )
}
