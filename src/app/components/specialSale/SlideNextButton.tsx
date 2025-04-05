"use client";

import { useSwiper } from "swiper/react";
import { FaArrowLeft } from "react-icons/fa";
import ButtonAni from "../common/button-ani/ButtonAni";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return <ButtonAni icone={FaArrowLeft} clicked={() => swiper.slideNext()} />;
}
