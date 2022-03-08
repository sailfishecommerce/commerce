import { memo } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

import sliderContent from "@/json/topbar-slider.json";
import "@splidejs/splide/dist/css/splide.min.css";

const sliderArray: any = sliderContent;

function TopbarSliderComponent() {
  return (
    <div className="header-slider">
      <Splide
        options={{
          type: "loop",
          height: "3rem",
          direction: "ttb",
          autoplay: true,
        }}
      >
        {sliderArray.map((content: any, index: number) => (
          <SplideSlide key={index}>
            <div className="item slider-container flex items-center m-auto justify-center">
              <Image
                height={45}
                width={45}
                src={content.icon}
                alt={content.text}
                layout="fixed"
              />
              <p className="text-white text-center my-0 mx-1 md:mx-2 text-sm ">
                {content.text}
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

const TopbarSlider = memo(TopbarSliderComponent);
export default TopbarSlider;
