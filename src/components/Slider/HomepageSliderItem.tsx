import React from "react";
import Image from "@/components/Image";

function SliderImage({ content }) {
  return (
    <div className="flex">
      <Image src={content.src} alt={content.name} />
      <button>{content.name}</button>
    </div>
  );
}

export default function HomepageSliderItem() {
  return <div>HomepageSliderItem</div>;
}
