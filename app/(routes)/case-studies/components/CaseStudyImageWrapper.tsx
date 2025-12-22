"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

interface CaseStudyImageWrapperProps {
  src: string;
  alt: string;
  className?: string;
}

export default function CaseStudyImageWrapper({
  src,
  alt,
  className = "",
}: CaseStudyImageWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const watermarkImageRef = useRef<HTMLImageElement | null>(null);
  const [watermarkCount, setWatermarkCount] = useState(0);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [watermarkSize, setWatermarkSize] = useState({
    width: 200,
    height: 200,
  });

  useEffect(() => {
    // Load watermark image to get actual dimensions
    const img = new window.Image();
    img.onload = () => {
      setWatermarkSize({ width: img.width, height: img.height });
    };
    img.src = "/images/case-studies/watermark.png";
    watermarkImageRef.current = img;
  }, []);

  useEffect(() => {
    const updateWatermarkCount = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      setContainerSize({ width, height });

      // Calculate diagonal length
      const diagonal = Math.sqrt(width * width + height * height);

      // Calculate how many watermarks fit along the diagonal
      // Use watermark width + 20px gap between items
      const spacing = watermarkSize.width + 20;
      const count = Math.ceil(diagonal / spacing);

      setWatermarkCount(count);
    };

    updateWatermarkCount();

    const resizeObserver = new ResizeObserver(updateWatermarkCount);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [watermarkSize]);

  return (
    <div
      ref={containerRef}
      className={`relative rounded-[1.875rem] overflow-hidden bg-white ${className}`}
    >
      <img src={src} alt={alt} className="object-contain h-full w-full" />

      {/* Watermark Overlay - Diagonal strip from bottom-left to top-right */}
      {containerSize.width > 0 && containerSize.height > 0 && (
        <div
          className="absolute pointer-events-none overflow-visible"
          style={{
            // Calculate diagonal length
            width: `${Math.sqrt(
              containerSize.width * containerSize.width +
                containerSize.height * containerSize.height
            )}px`,
            height: `${watermarkSize.height}px`,
            // Calculate angle dynamically based on container aspect ratio
            // For bottom-left to top-right: angle = atan2(height, width) in degrees
            // CSS rotation is clockwise, so we use negative
            transform: `rotate(${
              -Math.atan2(containerSize.height, containerSize.width) *
              (180 / Math.PI)
            }deg)`,
            transformOrigin: "bottom left",
            // Position at bottom-left corner
            left: "0",
            bottom: "0",
            // Use flexbox to arrange watermarks horizontally
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {Array.from({ length: watermarkCount }).map((_, index) => {
            return (
              <img
                key={index}
                src="/images/case-studies/watermark.png"
                className="opacity-40"
                alt=""
                style={{
                  width: `${watermarkSize.width}px`,
                  height: `${watermarkSize.height}px`,
                  flexShrink: 0,
                  marginRight: index < watermarkCount - 1 ? "20px" : "0",
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
