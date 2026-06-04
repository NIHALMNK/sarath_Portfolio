"use client";

import React, { useState } from "react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  hideOnError?: boolean;
}

export default function SafeImage({ src, fallbackSrc, hideOnError, alt, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error && hideOnError) {
    return null;
  }

  return (
    <img
      src={error && fallbackSrc ? fallbackSrc : src}
      alt={alt}
      onError={() => setError(true)}
      {...props}
    />
  );
}
