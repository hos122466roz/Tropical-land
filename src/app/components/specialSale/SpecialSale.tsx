'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SlidePrevButton from "./SlidePrevButton";
import SlideNextButton from "./SlideNextButton";
import { Pagination } from "swiper/modules";
import { CiSearch, CiHeart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { SefProduct } from "@/app/types";
import { useRouter } from "next/navigation";
interface SpecialSaleProps{
    products:any
}
const itmes = [
  {
    id: 1,
    icone: <CiHeart size={20} />,
    dec: "افزودن به علاقه مندی",
  },

  {
    id: 2,
    icone: <BsBag size={20} />,
    dec: "افزودن به سبد خرید  ",
  },
];

const SpecialSale:React.FC<SpecialSaleProps> =  ({ products }) => {
  console.log(products)
      const router=useRouter()
  
  if (!products) {
    return <h2>no product</h2>;
  }
  return (
    <section className="container my-24">
      <div className="text-center mb-12 ">
        <h2 className="font-Dana-demi-bold text-3xl "> خرید شگفت انگیز</h2>
        <h3 className="font-Dana-medium text-zinc-700 mt-4">
          یک تخفیف ویژه برای تجربه لذت های جدید
        </h3>
      </div>
      <div className="box ">
        <Swiper
          pagination={true}
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 20 },
            480: { slidesPerView: 2, spaceBetween: 80 },
            768: { slidesPerView: 3, spaceBetween: 50 },
            1024: { slidesPerView: 4, spaceBetween: 32 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className=" my-8 flex justify-end items-center gap-4">
            <SlidePrevButton />
            <SlideNextButton />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {products.map((product:any) => (
              <SwiperSlide
                className="border-1 border-gray-700/20 p-2 rounded-[.5rem] group text-center w-full   overflow-hidden"
                key={product.id}
              >
                <div className="size-60 cursor-pointer relative w-full ">
                  <img 
                    src={product.imageSrc}
                    className="  rounded-[.25rem] h-full w-full object-cover"
                    alt="product"
                  />
                  <span className="text-white bg-red-600 absolute top-4 left-4 py-1 px-2 rounded-[.25rem] text-[14px] font-Dana-medium">
                    ویژه
                  </span>
                  <div
                    className=" absolute *:transition-all  
                bottom-10 opacity-0 group-hover:opacity-100 
                group-hover:animate-wiggle w-fit left-0 right-0 m-auto flex gap-4 
               *:shadow-2xl *:bg-white *:rounded-full *:hover:text-white *:hover:bg-zinc-900"
                  >
                    {itmes.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-center  w-full "
                      >
                        <div className="peer   p-3">{item.icone}</div>

                        <span
                          className="absolute p-2 
                        peer-hover:animate-toTop
                     peer-hover:opacity-100
                    peerr-hover:delay-150
                     transition-all
                      opacity-0 
                      rounded-sm
                      font-Dana-medium
                    before:absolute  before:left-0  before:right-0 
                     before:m-auto before:size-4 before:bg-zinc-900
                     before:-bottom-2 before:rotate-45

                      whitespace-nowrap bg-zinc-900   
                      -top-13      w-auto 
                       text-white text-[14px]"
                        >
                          {item.dec}
                        </span>
                      </div>
                    ))}
                    <div
                      className="flex items-center justify-center  w-full "
                      onClick={() => router.push(`/products/${product.id}`)}
                    >
                      <div className="peer   p-3">
                        <CiSearch />
                      </div>

                      <span
                        className="absolute p-2 
                        peer-hover:animate-toTop
                     peer-hover:opacity-100
                    peerr-hover:delay-150
                     transition-all
                      opacity-0 
                      rounded-sm
                      font-Dana-medium
                    before:absolute  before:left-0  before:right-0 
                     before:m-auto before:size-4 before:bg-zinc-900
                     before:-bottom-2 before:rotate-45

                      whitespace-nowrap bg-zinc-900   
                      -top-13      w-auto 
                       text-white text-[14px]"
                      >
                        مشاهده بیشتر
                      </span>
                    </div>
                  </div>
                </div>
                <div className="my-6">
                  <h2 className="font-Dana-medium text-[20px]">
                    {product.title}
                  </h2>
                  <h3 className=" font-Dana-medium mt-3 flex gap-6 items-center justify-center">
                    <del className="text-zinc-700/50">
                      {product.price.toLocaleString()} تومان
                    </del>
                    <span className="text-green-700"> 200,000 تومان </span>
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};
export default SpecialSale;
