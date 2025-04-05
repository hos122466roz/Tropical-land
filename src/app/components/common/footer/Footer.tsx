import Logo from "../../../../../public/images/logo/logo-05_135x.webp";
import { FaInstagram, FaWhatsapp, FaBusinessTime } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-12  bg-gray-100/30 ">
      <div
        className="font-Dana grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-12 [&_h2]:text-2xl [&_h2]:font-bold
     [&_h2]:mb-6"
      >
        <div>
          <Image src={Logo} alt="" />
          <p className="mt-6">
            ما درحال تولید و توسعه نهال های گرمسیری هستیم . تا بتوان نیاز کشور
            را در ایت زمینه تامین کرده و از ورود این محصولات به صورت قاچاق به
            کشور جلوگیری کینم
          </p>
          <div className="mt-6 flex justify-center gap-8 items-center *:hover:text-green-700 ">
            <a href="">
              <FaInstagram size={24} />
            </a>
            <a href="">
              <FaWhatsapp size={24} />
            </a>
            <a href="">
              <IoCallOutline size={24} />
            </a>
          </div>
        </div>
        <div>
          <h2>لینک های مهم</h2>
          <ul className="space-y-4 *:text-gray-600 *:hover:text-black">
            <li>
              <a href="">بلاگ</a>
            </li>
            <li>
              <a href="">فروشگاه</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>تماس بگیرید</h2>
          <div className="space-y-4 *:flex *:items-center *:gap-5 *:text-gray-600">
            <div>
              <span>
                <FaLocationDot />
              </span>
              <span>سیستان و بلوچستان - چابهار </span>
            </div>
            <div>
              <span>
                <IoCallOutline />
              </span>
              <span dir="ltr">0913 958 7385</span>
            </div>
            <div>
              <span>
                <MdOutlineAttachEmail />
              </span>
              <span>hoesin122466@gmail.com </span>
            </div>
            <div>
              <span>
                <FaBusinessTime />
              </span>
              <span>هفت روز هفنه - از ساعت 8:00 تا 22:00 </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full text-center mt-12">
        <h1 className=" flex items-center justify-center">
          کلیه حقوق این سایت محفوظ است - ساخته شده توسط
          <span className="black mx-3 text-red-600 animate-ping">
            <FaHeart />
          </span>
          حسین روزدار
        </h1>
      </div>
    </footer>
  );
};
export default Footer;

