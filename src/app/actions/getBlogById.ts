import prisma from '@/app/libs/prismadb'

interface IParams{
    blogId?: string
}
export default async function getBlogById(params:IParams){
    try{
    const {blogId}=params
    const blog=await prisma.blog.findUnique({
        where:{
            id:blogId
        },
        include:{
            user:true
        }
    })
    if(!blog){
        return null
    }
    return {
      ...blog,
      createdAt: blog.createdAt.toString(),
      user: {
        ...blog.user,
        createdAt: blog.user.createdAt.toString(),
        updatedAt: blog.user.updatedAt.toString(),
      },
    };

    }catch(error:any){
        throw new Error(error)
    }

}