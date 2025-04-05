"use client";

import { FaRegUser } from "react-icons/fa";
import { BsFillBagPlusFill } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";
import { BsFillFileTextFill } from "react-icons/bs";
import { SiBloglovin } from "react-icons/si";

const Aside = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="border-l border-l-[#EBEBEB] bg-white w-[20%] top-0 pt-34  h-full fixed shadow-lg">
      {/* <div className="w-full flex justify-center items-center">
        <Image src={img} alt="logo" />
      </div> */}
      <div className=" px-8">
        <ul className=" *:min-w-[180px] *:flex *:text-zinc-700 *:w-full *:p-4 child-hover:rounded-xl child-hover:bg-green-9500/10  child-hover:text-green-900 *:cursor-pointer child-hover:transition-[2s] *:gap-x-4 *:items-center child:text-md *:font-bold space-y-3">
          <li
            className={pathname === "/dashboroad/profile" ? "active" : ""}
            onClick={() => router.push("/dashboroad/profile")}
          >
            <span>
              <FaRegUser />
            </span>
            <span>مشاهده پروفایل</span>
          </li>
          <li
            className={pathname === "/dashboroad/addProduct" ? "active" : ""}
            onClick={() => router.push("/dashboroad/addProduct")}
          >
            <span>
              <BsFillBagPlusFill />
            </span>
            <span> افزودن محصول</span>
          </li>
          <li
            className={pathname === "/dashboroad/listProducts" ? "active" : ""}
            onClick={() => router.push("/dashboroad/listProducts")}
          >
            <span>
              <BsFillFileTextFill />
            </span>
            <span> لیست محصولات</span>
          </li>
          <li
            className={pathname === "/dashboroad/addBlog" ? "active" : ""}
            onClick={() => router.push("/dashboroad/addBlog")}
          >
            <span>
              <SiBloglovin />
            </span>
            <span> افزودن بلاگ</span>
          </li>
        </ul>
      </div>
      <div></div>
    </aside>
  );
};
export default Aside;
