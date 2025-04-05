'use client'
import { useSwiper } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";
import ButtonAni from "../common/button-ani/ButtonAni";

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
        <ButtonAni icone={FaArrowRight } clicked={() => swiper.slidePrev()}/>

  
  );
}
