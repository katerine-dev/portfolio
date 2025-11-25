import React from "react";

export default function ResponsiveImage({ alt, fileName, className }) {
  const base = `/assets/images/${fileName}`;
  return (
    <img
      className={className}
      src={`${base}-720.webp`}
      srcSet={`
        ${base}-320.avif 320w,
        ${base}-720.avif 720w,
        ${base}-1280.avif 1280w
      `}
      sizes="(max-width: 768px) 90vw, 700px"
      alt={alt}
      loading="lazy"
      decoding="async"
      width="700" 
      height="480"
      style={{ display: "block", maxWidth: "100%", height: "auto" }}
    />
  );
}
