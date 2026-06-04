"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getFounderImage } from "@/lib/image-utils";

interface FounderAvatarProps {
  src?: string;
  name: string;
  size?: number; // optional width & height in pixels
  sizes?: string; // sizes prop for next/image fill layout
  className?: string;
}

export default function FounderAvatar({
  src,
  name,
  size,
  sizes,
  className = ""
}: FounderAvatarProps) {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);

  const fallbackUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=d4af37&textColor=000000`;

  useEffect(() => {
    setHasError(false);
    if (!src) {
      setImgSrc(fallbackUrl);
    } else {
      setImgSrc(getFounderImage(src, name));
    }
  }, [src, name, fallbackUrl]);

  const dimensions = size ? { width: size, height: size } : {};

  return (
    <div 
      className={`relative rounded-full border border-white/10 bg-zinc-900 overflow-hidden flex items-center justify-center shrink-0 shadow-lg ${className}`}
      style={dimensions}
    >
      {imgSrc && (
        <Image
          src={hasError ? fallbackUrl : imgSrc}
          alt={`${name} Profile`}
          fill={!size}
          sizes={!size ? (sizes || "(max-width: 768px) 96px, 128px") : undefined}
          width={size}
          height={size}
          className="object-cover rounded-full"
          onError={() => setHasError(true)}
          unoptimized={hasError || imgSrc.startsWith("https://api.dicebear.com") || imgSrc.endsWith(".svg")}
        />
      )}
    </div>
  );
}
