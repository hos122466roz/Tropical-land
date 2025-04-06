import getBlogById from "@/app/actions/getBlogById";
import img1 from "../../../../public/images/blog/pitahaya-dragon-fruit-still-life-cinematic-dark-style.jpg";
import img2 from "../../../../public/images/profile/DSC_1745.jpg";
import img3 from "../../../../public/images/profile/DSC_17452.jpg";
import img4 from "../../../../public/images/profile/DSC_16883.jpg";
import BlogClient from "./BlogClient";
import getBlogs from "@/app/actions/getBlogs";
import BlogCard from "../BlogCard";
import ButtonAni from "@/app/components/common/button-ani/ButtonAni";
import Image from "next/image";

interface IParams {
  blogId: string;
}
const BlogPage = async ({ params }: { params: Promise<IParams> }) => {
  const blog = await getBlogById( await params);
  const blogs = await getBlogs();
  if (!blog) {
    return <h1>بلاگ مورد نظر پیدا نشد!</h1>;
  }
  return (
    <section className="mt-24">
      <div className="h-[35vh]  overflow-hidden relative flex justify-start pr-10 md:pr-24 items-center ">
        <div className="w-full absolute h-full top-0 right-0 z-30 bg-black/30"></div>
        <Image
          src={img1}
          alt=""
          className="h-full w-full  right-0 absolute top-0 object-cover  "
        />
        <h1 className=" block z-40 text-6xl font-Morabba-bold text-white">
          بلاگ
        </h1>
      </div>

      <div className="container  my-24 md:px-40 ">
        <div>
          <BlogClient blog={blog} />
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 my-12">
          {blogs?.splice(0, 2).map((blog:any) => (
            <BlogCard data={blog} key={blog.id} />
          ))}
        </div>
        <div className="my-14 pb-14 border-b border-gray-500/20">
          <h1 className="my-6  font-Dana-demi-bold text-3xl text-zinc-900">
            نظرات اخیر
          </h1>
          <div className=" font-Dana">
            <div className=" w-full flex items-start flex-col md:flex-row ">
              <div className="size-26">
                <Image
                  src={img2}
                  alt="profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="md:mr-6 w-full  mt-4 md:mt-0">
                <h2 className="font-Dana-demi-bold">حسین روزدار</h2>
                <data value="" className="block pt-2 pb-4 font-Morabba-light">
                  1404 فروردین 2
                </data>
                <p className="mb-6">
                  دراگون فوق العادهس من تاثیرات ان را دیدم . ممنونم از تیم حرفه
                  ای شما
                </p>
                <ButtonAni text="پاسخ" />

                <div className="flex items-start flex-col md:flex-row  mt-8 border-1 border-gray-400/10 p-4">
                  <div className="size-24">
                    <Image
                      src={img3}
                      alt="profile"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="md:mr-6  mt-4 md:mt-0">
                    <h2 className="font-Dana-demi-bold">حسین روزدار</h2>
                    <data
                      value=""
                      className="block pt-2 pb-4 font-Morabba-light"
                    >
                      1404 فروردین 2
                    </data>
                    <p className="mb-6">
                      دراگون فوق العادهس من تاثیرات ان را دیدم . ممنونم از تیم
                      حرفه ای شما
                    </p>
                    <ButtonAni text="پاسخ" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start flex-col md:flex-row  mt-14">
              <div className="size-26">
                <Image
                  src={img4}
                  alt="profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="md:mr-6  mt-4 md:mt-0">
                <h2 className="font-Dana-demi-bold">حسین روزدار</h2>
                <data value="" className="block pt-2 pb-4 font-Morabba-light">
                  1404 فروردین 2
                </data>
                <p className="mb-6">
                  دراگون فوق العادهس من تاثیرات ان را دیدم . ممنونم از تیم حرفه
                  ای شما
                </p>
                <ButtonAni text="پاسخ" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="my-6  font-Dana-demi-bold text-3xl text-zinc-900">
            نظرات بدهید
          </h1>
          <form action="">
            <div className="flex gap-4">
              <input
                type="name"
                placeholder="نام"
                className={`
        
          w-full
          p-4
          
          font-light 
          bg-white 
          border-1
          border-gray-600/30
          outline-none
          transition
          focus:border-black
          disabled:opacity-70
          disabled:cursor-not-allowed
          `}
              />
              <input
                type="email"
                placeholder="ایمیل"
                className={`
        
          w-full
          p-4
          
          font-light 
          bg-white 
          border-1
          border-gray-600/50
          outline-none
          transition
          focus:border-black
          disabled:opacity-70
          disabled:cursor-not-allowed
          `}
              />
            </div>
            <textarea
              rows={5}
              placeholder="پیام مورد نظر..."
              className={`
         mt-4
          w-full
          p-4
          focus:border-black
          
          font-light 
          bg-white 
          border-1
          border-gray-600/30
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          `}
            />
            <div className="mt-8">
              <ButtonAni text="ثبت نظر" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default BlogPage;
