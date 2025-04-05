import Image from "next/image";
import img1 from "../../../public/images/blog/pitahaya-dragon-fruit-still-life-cinematic-dark-style.jpg";
import Blogs from "./Blogs";

const BlogsPage = () => {
  return (
    <section>
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
      <Blogs/>
    </section>
  );
};
export default BlogsPage;
