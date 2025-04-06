import getProductById from "@/app/actions/getProductById";
import ButtonAni from "@/app/components/common/button-ani/ButtonAni";
interface IParams {
  productId?: string;
}
const ProductPage = async ({ params }: { params: Promise<IParams> }) => {
  const product = await getProductById( await params);
  if(!product){
    return <h1>محصول مورد نظر وجود ندارد</h1>
  }

  return <section className="mt-24 container py-12">



   <div className="flex ">
    <div className="w-[60%]">
        <img src={product.imageSrc} alt="cover"/>
    </div>
    <div className="mr-10 pt-6 font-Dana w-[40%]">
        <h3 className="text-2xl font-Dana-demi-bold">{product.title}</h3>
        <h4 className="py-6 border-b border-gray-500/50">{product.price}  تومان</h4>
        <p className="py-6">{product.description}</p>
        <div className="flex gap-x-4 ">
            <div className="px-5 border-gray-500/30 flex justify-between items-center border gap-x-5 ">
                <div className="cursor-pointer text-xl">-</div>
                <div>1</div>
                <div className="cursor-pointer text-xl">+</div>
            </div>
            <div><ButtonAni text="فزودن به سبد "/></div>
        </div>
    </div>
   </div>

  </section>;
};
export default ProductPage