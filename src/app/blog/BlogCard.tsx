'use client'

import { SafeBlog } from "@/app/types";
import { format } from "date-fns-jalali";
import ButtonAni from "../components/common/button-ani/ButtonAni";
import { CiUser } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";

import { LiaCommentsSolid } from "react-icons/lia";
import { useRouter } from "next/navigation";
interface BlogCardProps {
  data: SafeBlog;
}
const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
    const router=useRouter()
  return (
    <div
      className=" shadow-md border-gray-700/20  rounded-t-[.25rem]  text-right w-full   overflow-hidden"
      key={data.id}
    >
      <div className="size-60 cursor-pointer relative w-full ">
        <img
          onClick={() => router.push(`/blog/${data.id}`)}
          src={data.cover}
          className="  h-full w-full object-cover"
          alt="blog"
        />
        <div className="bg-white block absolute p-1 right-6  -bottom-4  shadow-md ">
          <h3 className="font-Dana px-2 py-1 text-black text-[12px] ">
            {format(data.createdAt, "yyyy MMMM d")}
          </h3>
        </div>
      </div>
      <div className="my-7 px-4">
        <h2 className="font-Dana-medium line-clamp-1  text-zinc-900 text-[20px]">
          {data.title}
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
        <div className="pt-7 block">
          <ButtonAni
            icone={FaArrowLeft}
            clicked={() => router.push(`/blog/${data.id}`)}
          />
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
