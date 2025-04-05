import getProduct from "./actions/getProduct";
import Blogs from "./blog/Blogs";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Services from "./components/services/Services";
import SpecialSale from "./components/specialSale/SpecialSale";

export default async function Home() {
    const products = await getProduct();
  
  return (
    <div className="">
      <Hero />
      <SpecialSale products={products}/>

   <Products/>
   <Services/> 
   <Blogs/>
    </div>
  );
}
