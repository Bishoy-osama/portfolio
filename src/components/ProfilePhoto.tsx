"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProfilePhotoProps {
  size?: number; // size in px, e.g. 200 or 56
  className?: string;
  variant?: "square" | "circle";
  alt?: string;
}

export default function ProfilePhoto({
  size = 200,
  className = "",
  variant = "square",
  alt = "Bishoy Osama Fawzy",
}: ProfilePhotoProps) {
  const [hasError, setHasError] = useState(false);

  const shapeClass =
    variant === "circle"
      ? "rounded-full"
      : "rounded-2xl";

  return (
    <div
      className={`relative overflow-hidden border border-[#2DD4BF] bg-[#111720] shrink-0 select-none aspect-square ${shapeClass} ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {!hasError ? (
        <Image
          src="/photo.png"
          alt={alt}
          width={size}
          height={size}
          priority
          onError={() => setHasError(true)}
          className="w-full h-full object-cover object-center pointer-events-none"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-[#0B0F14] text-[#2DD4BF] font-mono font-bold text-lg tracking-wider">
          BO
        </div>
      )}
    </div>
  );
}
