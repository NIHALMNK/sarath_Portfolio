"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getFounderCover } from "@/lib/image-utils";

interface FounderCoverProps {
  src?: string;
  name: string;
  className?: string;
}

export default function FounderCover({
  src,
  name,
  className = ""
}: FounderCoverProps) {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setHasError(false);
    if (!src) {
      setImgSrc("");
    } else {
      setImgSrc(getFounderCover(src, name));
    }
  }, [src, name]);

  const showGradient = !imgSrc || hasError;

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {showGradient ? (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-zinc-950 via-gold/10 to-zinc-950 flex items-center justify-center">
          <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest bg-zinc-900/60 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-xs">
            LinkedIn Authority Node
          </div>
        </div>
      ) : (
        <Image
          src={imgSrc}
          alt={`${name} LinkedIn Cover`}
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 absolute inset-0"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
