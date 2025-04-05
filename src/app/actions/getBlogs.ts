import prisma from '@/app/libs/prismadb'
export default async function getBlogs(){
try{
const blog=await prisma.blog.findMany()
const safeBlogs=blog.map(blog=>({
    ...blog,
    createdAt:blog.createdAt.toISOString()
}))
return safeBlogs
}catch (error:any){
    throw new Error(error)
}
}