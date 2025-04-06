import prisma from '@/app/libs/prismadb'
export default async function getProduct(){
    try{
        const products=await prisma.product.findMany()
         const safeProducts = products.map((product:any) => ({
           ...product,
           createAt: product.createdAt.toISOString(),
         }));
         return safeProducts
    }catch(error:any){
        throw new Error(error)
    }

}