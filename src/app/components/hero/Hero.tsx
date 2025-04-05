'use client'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import img from "../../../../public/images/hero/exotic-fruit-papaya-papaw-isolated-white-background-healthy-eating-dieting-food.jpg";
import img1 from "../../../../public/images/hero/view-tasty-tropical-dragon-fruit_232-2151566440.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className=" mt-24 heo h-[calc(100vh-6rem)] w-full   flex justify-center items-start flex-col  ">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper size-full"
      >
        <SwiperSlide className="w-full">
          <div className="flex relative justify-center w-full h-full pr-24   items-start flex-col">
            <Image
              src={img}
              alt="hero"
              className="absolute size-full top-0 left-0 object-cover"
            />
            <h4 className="text-green-9500 md:text-2xl z-20 font-Morabba-medium">
              سرزمین استوایی
            </h4>
            <h1 className="md:text-5xl font-bold text-zinc-800 my-3   z-20 font-Morabba-bold">
              میوه های استوایی در پاپایستان
            </h1>
            <h2 className="md:text-3xl font-bold text-zinc-800 my-3  z-20 font-Morabba-light ">
              {" "}
              تجربه های جدید{" "}
            </h2>

            <button className="z-20 md:p-3 p-2 border-b-2 border-green-9500 mt-4 font-Dana-demi-bold hover:border-zinc-950 transition-all ">
              <a href="" className=" block transition-[2s]">
                هیمن الان خرید کن
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex relative justify-center w-full h-full pr-24   items-start flex-col">
            <Image
              src={img1}
              alt="hero"
              className="absolute size-full top-0 left-0 object-cover"
            />
            <h4 className="text-green-9500 md:text-2xl z-20 font-Morabba-medium">
              سرزمین استوایی
            </h4>
            <h1 className="md:text-5xl font-bold text-zinc-800 my-3   z-20 font-Morabba-bold">
              میوه های  در پاپایستان
            </h1>
            <h2 className="md:text-3xl font-bold text-zinc-800 my-3  z-20 font-Morabba-light ">
              {" "}
              تجربه های جدید
            </h2>

            <button className="z-20 md:p-3 p-2 border-b-2 border-green-9500 mt-4 font-Dana-demi-bold hover:border-zinc-950 transition-all ">
              <a href="" className=" block transition-[2s]">
                هیمن الان خرید کن
              </a>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Hero;
