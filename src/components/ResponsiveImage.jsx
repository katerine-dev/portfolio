import React from 'react';

export default function ResponsiveImage({ fileName, alt='', className='', width, height, priority=false }) {
  const sizes = '(max-width: 720px) 100vw, 720px';
  const base = '/portfolio/assets/images-src';
  const srcAvif720 = `${base}/${fileName}-720.avif`;

  const srcsetAvif = `${base}/${fileName}-320.avif 320w, ${base}/${fileName}-720.avif 720w, ${base}/${fileName}-1280.avif 1280w`;
  const srcsetWebp = `${base}/${fileName}-320.webp 320w, ${base}/${fileName}-720.webp 720w, ${base}/${fileName}-1280.webp 1280w`;
  const srcsetJpg = `${base}/${fileName}-320.jpg 320w, ${base}/${fileName}-720.jpg 720w, ${base}/${fileName}-1280.jpg 1280w`;

  return (
    <picture className={className} style={{display:'block'}}>
      <source type="image/avif" srcSet={srcsetAvif} sizes={sizes}/>
      <source type="image/webp" srcSet={srcsetWebp} sizes={sizes}/>
      <img
        src={`${base}/${fileName}-720.jpg`}
        srcSet={srcsetJpg}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{width: '100%', height: 'auto', display: 'block'}}
      />
    </picture>
  );
}
