import Image from "next/image";
import img1 from "../../../public/images/hero/20230805135628_[fpdl.in]_dragon-fruit-pitahaya-hylocereus-undatus-blurred-nature-background-cbranch-tree_454892-913_full.jpg";
import img2 from "../../../public/images/hero/dragon-fruit-dragon-fruit-tree-waiting-harvest-agriculture-farm-asian-pitahaya-plantation-dragon-fruit-thailand-summer_73523-7410.webp";
import Products from "../components/products/Products";


const ProductsPage = () => {
  return (
    <>
      <section className=" productPage mt-24 h-[30vh] relative  ">
        <div className="absolute w-full h-full bg-black/60 z-10"></div>
        <div>
          <div className="flex items-center w-full justify-center py-10 text-4xl font-Dana-demi-bold text-white">
            <h2 className=" z-30">فروشگاه</h2>
          </div>
          <div className="flex *:cursor-pointer justify-center items-center gap-20 *:z-30 container *:text-center">
            <div>
              <Image src={img1} alt="" className="size-35 rounded-full object-cover" />
              <h2 className="z-30 text-white mt-4 text-xl">قلمه</h2>
            </div>
            <div>
              <Image src={img2} alt="" className="size-35 rounded-full object-cover" />
              <h2 className="z-30 text-white mt-4 text-xl">میوه</h2>
            </div>
            <div>
              <Image src={img1} alt="" className="size-35 rounded-full object-cover" />
              <h2 className="z-30 text-white mt-4 text-xl">قلمه</h2>
            </div>
            <div>
              <Image src={img1} alt="" className="size-35 rounded-full object-cover" />
              <h2 className="z-30 text-white mt-4 text-xl">قلمه</h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Products/>
      </section>
    </>
  );
};
export default ProductsPage;
