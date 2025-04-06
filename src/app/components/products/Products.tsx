import getProduct from "@/app/actions/getProduct";
import ButtonAni from "../common/button-ani/ButtonAni";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ProductCard from "./ProductCard";

const Products = async () => {
  const products = await getProduct();
  const currentUser = await getCurrentUser();
  if (!products) return null;
  return (
    <>
      <section className=" container my-24">
        <div className="text-center mb-12 ">
          <h2 className="font-Dana-demi-bold text-3xl ">محصولات ما</h2>
          <h3 className="font-Dana-medium text-zinc-700 mt-4">
            نمونه ای از محصولات خاص و جدید
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products?.map((product:any) => (
            <ProductCard data={product} currentUser={currentUser} key={product.id}/>
            // <div
            //   className="border-1 border-gray-700/20 p-2 rounded-[.5rem] group text-center w-full   overflow-hidden"
            //   key={product.id}
            // >
            //   <div className="size-60 cursor-pointer relative w-full ">
            //     <img
            //       src={product.imageSrc}
            //       className="  rounded-[.25rem] h-full w-full object-cover"
            //       alt="product"
            //     />
            //     <div
            //       className=" absolute *:transition-all
            //     bottom-10 opacity-0 group-hover:opacity-100
            //     group-hover:animate-wiggle w-fit left-0 right-0 m-auto flex gap-4
            //    *:shadow-2xl *:bg-white *:rounded-full *:hover:text-white *:hover:bg-zinc-900"
            //     >
            //       <HearButton productId={product.id} currentUser={currentUser} />
            //       {itmes.map((item) => (
            //         <div
            //           key={item.id}
            //           className="flex items-center justify-center  w-full "
            //         >
            //           <div className="peer   p-3">{item.icone}</div>

            //           <span
            //             className="absolute p-2
            //             peer-hover:animate-toTop
            //          peer-hover:opacity-100
            //         peerr-hover:delay-150
            //          transition-all
            //           opacity-0
            //           rounded-sm
            //           font-Dana-medium
            //         before:absolute  before:left-0  before:right-0
            //          before:m-auto before:size-4 before:bg-zinc-900
            //          before:-bottom-2 before:rotate-45

            //           whitespace-nowrap bg-zinc-900
            //           -top-13      w-auto
            //            text-white text-[14px]"
            //           >
            //             {item.dec}
            //           </span>
            //         </div>
            //       ))}
            //     </div>
            //   </div>
            //   <div className="my-6">
            //     <h2 className="font-Dana-medium text-[20px]">
            //       {product.title}
            //     </h2>
            //     <h3 className="text-zinc-700 font-Dana-medium mt-3">
            //       {product.price.toLocaleString()} تومان
            //     </h3>
            //   </div>
            // </div>
          ))}
        </div>
        <div className="text-center flex items-center justify-center mt-12">
          <ButtonAni text="مشاهده بیشتر" />
        </div>
      </section>
    </>
  );
};
export default Products;
