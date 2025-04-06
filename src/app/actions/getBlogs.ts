import prisma from '@/app/libs/prismadb'
export default async function getBlogs(){
try{
const blog=await prisma.blog.findMany()
const safeBlogs = blog.map((blogitems:any) => ({
  ...blogitems,
  createdAt: blogitems.createdAt.toISOString(),
}));
return safeBlogs
}catch (error:any){
    throw new Error(error)
}
}