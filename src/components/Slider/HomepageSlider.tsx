import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { memo, useState } from "react";

import useMediaQuery from "@/hooks/useMediaQuery";
import "@splidejs/splide/dist/css/splide.min.css";

import sliderContent from "@/json/homepage-slider.json";
import styles from "@/styles/HomepageSlider.module.css";

function SliderItem({ item }): JSX.Element {
  const mobileView = useMediaQuery("(max-width:768px)");
  const [inHover, setHover] = useState(false);

  const productImage = inHover ? item.sliderImg2 : item.sliderImg;

  const imgSize = mobileView
    ? {
        height: 240,
        width: 300,
      }
    : {
        height: 500,
        width: 600,
      };

  return (
    <>
      <SplideSlide>
        <div className="sliderItem w-full h-full">
          <div className="container m-auto flex flex-col justify-center lg:flex-row items-center h-full">
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className={`${styles.imageContainer} w-full md:w-1/2 h-1/4 lg:h-4/5 lg:order-2 lg:mx-4 flex flex-col md:flex-row justify-between items-center lg:ps-4`}
            >
              <Image
                src={productImage}
                alt={item.sliderTitle}
                height={imgSize.height}
                width={imgSize.width}
                priority={item.priority}
                className="rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 items-center lg:items-start text-white flex flex-col py-5 md:px-1 lg:px-4 lg:mb-5 lg:order-1">
              <h3 className="text-lg md:text-2xl pb-1 from-start">
                {item.sliderCaption}
              </h3>
              <h2 className="font-semibold md:my-2 text-xl md:text-3xl lg:text-4xl from-start delay-1">
                {item.sliderTitle}
              </h2>
              <p className="font-medium text-md md:text-lg lg:text-xl md:py-2 from-start text-center delay-2">
                {item.sliderDescription}
              </p>
              <Link href="/shop" passHref>
                <a className="scale-up mt-2 w-3/7 md:w-2/5 lg:w-1/4 flex items-center justify-center delay-4 p-3 border-2 border-red-500 text-white font-bold rounded-lg hover:text-white hover:bg-red-500">
                  Shop Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </SplideSlide>
      <style jsx>{`
        .sliderItem {
          background-color: ${item.bgColor};
        }
      `}</style>
    </>
  );
}

function HomepageSliderComponent() {
  return (
    <>
      <section className={`${styles.carousel} carousel mb-4 lg:mb-5 w-100`}>
        <Splide
          options={{
            autoplay: false,
            type: "loop",
          }}
          className={styles.slider}
        >
          {sliderContent.map((item, index) => (
            <SliderItem item={item} key={index} />
          ))}
        </Splide>
      </section>
      <style jsx>{`
        .carousel {
          background-color: #d2ac99;
        }
      `}</style>
    </>
  );
}

const HomepageSlider = memo(HomepageSliderComponent);

export default HomepageSlider;
