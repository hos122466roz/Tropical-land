
import getBlogs from "@/app/actions/getBlogs";
import ButtonAni from "../components/common/button-ani/ButtonAni"; 
import BlogCard from "./BlogCard";

const Blogs = async () => {
  const blogs = await getBlogs();
//   const router = useRouter();
  if (!blogs)
    return (
      <div>
        {" "}
        <h1>هنوز بلاگی اضافه نشده است!</h1>
      </div>
    );
  return (
    <section className=" container my-24">
      <div className="text-center mb-12 ">
        <h2 className="font-Dana-demi-bold text-3xl "> بلاگ</h2>
        <h3 className="font-Dana-medium text-zinc-700 mt-4">
          بخش اطلاعات و اموزش ها در حوزه میوه های استوایی
        </h3>
      </div>
      <div className="grid grid-cols-1  content-center md:grid-cols-2 lg:grid-cols-3  gap-8">
        {blogs?.map((blog) => (
            <BlogCard key={blog.id} data={blog}/>
 
        ))}
      </div>
      <div className="text-center flex items-center justify-center mt-12">
        <ButtonAni text="مشاهده بیشتر" />
      </div>
    </section>
  );
};
export default Blogs;
