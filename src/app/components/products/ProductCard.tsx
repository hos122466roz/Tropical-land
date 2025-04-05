"use client";

import { SafeUser, SefProduct } from "@/app/types";
import HearButton from "./heartButton/HeartButton";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { useRouter } from "next/navigation";
interface ProductCardProps {
  data: SefProduct;
  currentUser: SafeUser;
}
const ProductCard: React.FC<ProductCardProps> = ({ data, currentUser }) => {
    const router=useRouter()
  return (
    <>
      <div className="border-1 border-gray-700/20 p-2 rounded-[.5rem] group text-center w-full   overflow-hidden">
        <div className="size-60 cursor-pointer relative w-full ">
          <img
            src={data.imageSrc}
            className="  rounded-[.25rem] h-full w-full object-cover"
            alt="product"
          />
          <div
            className=" absolute *:transition-all  
                bottom-10 opacity-0 group-hover:opacity-100 
                group-hover:animate-wiggle w-fit left-0 right-0 m-auto flex gap-4 
               *:shadow-2xl *:bg-white *:rounded-full *:hover:text-white *:hover:bg-zinc-900"
          >
            <HearButton productId={data.id} currentUser={currentUser} />
            <div className="flex items-center justify-center  w-full " onClick={()=>router.push(`/products/${data.id}`)}>
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
            <div className="flex items-center justify-center  w-full ">
              <div className="peer   p-3">
                <BsBag />
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
                افزودن به سبد خرید
              </span>
            </div>
          </div>
        </div>
        <div className="my-6">
          <h2 className="font-Dana-medium text-[20px]">{data.title}</h2>
          <h3 className="text-zinc-700 font-Dana-medium mt-3">
            {data.price.toLocaleString()} تومان
          </h3>
        </div>
      </div>
      {
        // <ProductModal data={product}/>
      }
    </>
  );
};
export default ProductCard;
