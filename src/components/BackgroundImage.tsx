"use client";
import Image from "next/image";

export default function BackgroundImage({
  src,
  alt,
  classes,
}: {
  src: string;
  alt: string;
  classes: string;
}) {
  return (
    <div className="pointer-events-none">
      <Image
        src={src}
        alt={alt}
        fill={true}
        className={`-z-50 bg-no-repeat object-cover ${classes}`}
      />
    </div>
  );
}
