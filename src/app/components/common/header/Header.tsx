"use client";
import { useState } from "react";
import img from "../../../../../public/images/logo/logo-05_135x.webp";
import { CiUser, CiShoppingCart } from "react-icons/ci";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { MdOutlineHome } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiBloggerLine } from "react-icons/ri";
import { TiShoppingBag } from "react-icons/ti";
import { FaFileContract } from "react-icons/fa6";
import Avatar from "../avatar/Avatar";
import Li from "../li/LI";
import Image from "next/image";

interface HeaderProps {
  currentUser: User | null;
}
const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  const loginModal = useLoginModal();
  const [showmenu, setShowmenu] = useState(false);
  const router = useRouter();
  

  return (
    <>
      <header
        className="fixed  w-full top-0 right-0 
       left-0 md: invisible md:visible flex    justify-between h-24
        backdrop-blur-lg border-b-gray-200  items-center
         px-12 py-3 bg-white shadow-sm z-50 font-Dana"
      >
        <div>
          <Image
            src={img}
            alt="logo"
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <nav className=" flex items-center text-ms font-bold text-gray-500">
          <ul className="flex  space-x-6 child:cursor-pointer child-hover:text-green-9500  ">
            <Li text="صفحه اصلی" clicked={() => router.push("/")} />
            <Li text=" فروشگاه" clicked={() => router.push("/products")} />
            <Li text=" بلاگ" clicked={() => router.push("/blog")} />
          </ul>

          <div className="flex items-center  space-x-6 mr-6  ">
            {currentUser?.name ? (
              <div className=" relative group   ">
                <span className="hover:text-green-9500 group-hover:text-green-9500 cursor-pointer shadow-xl border w-[50px]  h-[50px]  rounded-full flex justify-center items-center  ">
                  <div className="  rounded-full border-white">
                    <Avatar src={currentUser?.image} />
                  </div>
                </span>
                <ul className=" group-hover:visible child:cursor-pointer invisible group-hover:opacity-100 opacity-0 transition-[2s] child-hover:text-green-9500 absolute space-y-6 top-full w-40  left-0 bg-white rounded-sm  border-t-[4px]  border-t-green-9500   p-6 child:text-sm  child:inline-block delay-75">
                  <li onClick={() => signOut()}>
                    <a href="">خروج از حساب</a>
                  </li>
                  <li>
                    <a onClick={() => router.push("/dashboroad/profile")}>
                      {" "}
                      پروفایل{" "}
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <div
                className=" hover:text-green-9500 cursor-pointer"
                onClick={() => loginModal.onOpen()}
              >
                <CiUser size={24} color="text-gray-500" />
              </div>
            )}

            <div className=" hover:text-green-9500 cursor-pointer">
              <CiShoppingCart size={24} color="text-gray-500" className="" />
            </div>
          </div>
        </nav>
      </header>

      <div
        className=" z-50 fixed w-full top-0 left-0  visible md:invisible flex  justify-between 
      h-24 backdrop-blur-lg border-b-gray-200  items-center px-6 py-3 bg-white shadow-sm"
      >
        <div
          onClick={() => setShowmenu(!showmenu)}
          className="group cursor-pointer relative w-[30px] h-[30px] child:transition-all  child:h-[2px] child:bg-black child:rounded-full child:absolute  "
        >
          <span className="w-full  "></span>
          <span className="group-hover:w-full w-[50%]  top-3"></span>
          <span className="group-hover:w-full w-[70%]  top-6"></span>
        </div>
        <nav
          className={`${
            showmenu ? "active" : null
          } mobaile-neav px-5 pt-6 absolute top-0 -right-1/2 bg-white h-[100vh] w-1/2 flex items-start flex-col text-sm font-bold text-gray-500`}
        >
          <div className="*:text-zinc-900 flex items-center justify-between w-full pb-3 mb-6 border-b">
            <span className=" text-zinc-800">منو</span>
            <span
              className="p-1 cursor-pointer"
              onClick={() => setShowmenu(!showmenu)}
            >
              <IoMdClose size={30} />
            </span>
          </div>
          <ul className="flex *:flex *:items-center *:gap-x-2  text-[14px] flex-col  w-full  mt-3 space-y-6 child:cursor-pointer child-hover:text-green-9500  ">
            <li>
              <span>
                <MdOutlineHome className="w-5 h-5 " />
              </span>
              <span>صفحه اصلی</span>
            </li>
            <li>
              <span>
                <MdOutlineShoppingBag className="w-5 h-5 " />
              </span>
              <span>فروشگا</span>
            </li>
            <li>
              <span>
                <RiBloggerLine className="w-5 h-5 " />
              </span>
              <span>بلاگ</span>
            </li>
            <li>
              <span>
                <TiShoppingBag className="w-5 h-5 " />
              </span>
              <span>درباره ما</span>
            </li>
            <li>
              <span>
                <FaFileContract className="w-5 h-5 " />
              </span>
              <span>تماس با ما</span>
            </li>
          </ul>
        </nav>
        <div>
          <img src={img} alt="logo" />
        </div>
        <div className="flex  items-center gap-x-6">
          {currentUser?.name ? (
            <div className=" relative group   ">
              <span className="hover:text-green-9500 group-hover:text-green-9500 cursor-pointer shadow-xl border w-[50px]  h-[50px]  rounded-full flex justify-center items-center  ">
                <div className="  rounded-full border-white">
                  <Avatar src={currentUser?.image} />
                </div>
              </span>
              <ul className=" group-hover:visible child:cursor-pointer invisible group-hover:opacity-100 opacity-0 transition-[2s] child-hover:text-green-9500 absolute space-y-6 top-full w-40  left-0 bg-white rounded-sm  border-t-[4px]  border-t-green-9500   p-6 child:text-sm  child:inline-block delay-75">
                <li onClick={() => signOut()}>
                  <a href="">خروج از حساب</a>
                </li>
                <li>
                  <a onClick={() => router.push("/dashboroad")}> پروفایل </a>
                </li>
              </ul>
            </div>
          ) : (
            <div
              className=" hover:text-green-9500 cursor-pointer"
              onClick={() => loginModal.onOpen()}
            >
              <CiUser size={24} color="text-gray-500" />
            </div>
          )}
          <div className=" hover:text-green-9500 cursor-pointer">
            <CiShoppingCart size={24} color="text-gray-500" className="" />
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowmenu(!showmenu)}
        className={`${
          showmenu ? "visible" : "invisible"
        } modal h-[100vh] w-full fixed top-0 right-0 bg-black/70 z-10`}
      ></div>
    </>
  );
};
export default Header;
