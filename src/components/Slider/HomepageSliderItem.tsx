import React from "react";
import Image from "@/components/Image";

function SliderImage({ content }) {
  return (
    <div className="flex">
      <Image src={content.src} alt={content.name} />
      <button aria-label={content.name}>{content.name}</button>
    </div>
  );
}