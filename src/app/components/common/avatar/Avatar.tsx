"use client";
import { CiUser } from "react-icons/ci";

import Image from "next/image";
interface AvatarProps{
    src?:any 
}
const Avatar:React.FC<AvatarProps> = ({src}) => {
  return (
    <>
      {src ? (
        <Image
          className="w-full h-full object-cover rounded-full border-white"
          src={src}
          alt={"profile"}
          width={100}
          height={100}
        />
      ) : (
        <CiUser size={24} color="text-gray-500 bg-red" />
      )}
    </>
  );
};
export default Avatar;
