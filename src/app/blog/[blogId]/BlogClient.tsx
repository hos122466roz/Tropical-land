import { SafeBlog, SafeUser } from "@/app/types";
import { format } from "date-fns-jalali";
import { CiUser } from "react-icons/ci";

import { LiaCommentsSolid } from "react-icons/lia";

interface BlogClientProps {
  blog?: SafeBlog & {
    user: SafeUser;
  };
}

const BlogClient: React.FC<BlogClientProps> = ({ blog }) => {
  if(!blog) return <h1>بلاگ مورد نظر پیدا نشد</h1>
  return (
    <div className="w-full   ">
      <div className="relative">
        <img src={blog?.cover} className="w-full  object-cover" />
        <div className="bg-white block absolute p-1 right-6  -bottom-4  shadow-md ">
          <h3 className="font-Dana px-2 py-1 text-black text-[12px] ">
            {format(blog.createdAt, "yyyy MMMM d")}
          </h3>
        </div>
      </div>
      <div className=" my-12">
        <h2 className="font-Dana-medium line-clamp-1  text-zinc-900 text-[20px]">
          {blog.title}
        </h2>
        <div className="mt-7 flex items-center  py-2 border-t border-b border-gray-700/10  ">
          <div className="flex items-center justify-center font-Dana gap-2  text-gray-700">
            <span>
              <CiUser size={18} />
            </span>
            <span>ادمین</span>
          </div>
          <div className="flex items-center justify-center font-Dana gap-2 mr-6  text-gray-700">
            <span>
              <LiaCommentsSolid size={18} />
            </span>
            <span>20</span>
          </div>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: blog?.description }}
        className=" [&_h2]:text-2xl [&>span]:bg-red-500 *:font-Dana"
      ></div>
    </div>
  );
};
export default BlogClient;
