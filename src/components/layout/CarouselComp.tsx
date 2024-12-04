"use client";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import Swiper from "swiper/bundle";
import { slide } from "@/utils/slides";

type Props = {
  onSlideChange: (sw: Swiper) => void;
  photos?: Array<string>;
  slides: Array<slide>;
  className: string;
};

const CarouselComp = ({ onSlideChange, slides, className }: Props) => {
  const defineSwiper = () => {
    try {
      new Swiper(".swiper", {
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.message);
    }
  };

  defineSwiper();

  return (
    <SwiperComponent
      slidesPerView={1}
      navigation
      onSlideChange={(sw) => onSlideChange(sw)}
      effect="coverflow"
    >
      {slides.map((item) => (
        <SwiperSlide key={item.id}>
          <Image
            src={item.src}
            alt=""
            width={700}
            height={700}
            className={className}
          />
        </SwiperSlide>
      ))}
    </SwiperComponent>
  );
};

export default CarouselComp;
