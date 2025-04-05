import prisma from "@/app/libs/prismadb";
interface IParams {
  productId?: string;
}
export default async function (params: IParams) {
  try {
    const { productId } = params;
     const product=await prisma.product.findUnique({
        where:{
            id:productId
        }
        ,
        include:{
            user:true
        } 
     }) 
     if(!product) {
        return null
     }
     return {
       ...product,
       createdAt: product.createdAt.toString(),
       user: {
         ...product.user,
         createdAt: product.user.createdAt.toString(),
         updatedAt: product.user.updatedAt.toString(),
       },
     };
}
   catch (error: any) {
    throw new Error(error);
  }
}
