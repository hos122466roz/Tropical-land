"use client";
import useFavorite from "@/app/hooks/useFavorite";
import { SafeUser } from "@/app/types";
import { FaHeart, FaRegHeart } from "react-icons/fa";
interface HearButtonProps {
  productId: string;
  currentUser?: SafeUser | null;
}

const HearButton: React.FC<HearButtonProps> = ({ productId, currentUser }) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    productId,
    currentUser,
  });
  return (
    <div
      className="flex items-center justify-center  w-full "
      onClick={toggleFavorite}
    >
      <div className="peer   p-3 ">
        {hasFavorited ? (
          <FaHeart size={20} className="fill-red-600" />
        ) : (
          <FaRegHeart size={20} className="" />
        )}
      </div>

      <span
        className="absolute p-2 
                        peer-hover:animate-toTop
                     peer-hover:opacity-100
                    peerr-hover:delay-150
                     transition-all
                      opacity-0 
                      rounded-sm
                      font-Dana-medium
                    before:absolute  before:left-0  before:right-0 
                     before:m-auto before:size-4 before:bg-zinc-900
                     before:-bottom-2 before:rotate-45

                      whitespace-nowrap bg-zinc-900   
                      -top-13      w-auto 
                       text-white text-[14px]"
      >
        {hasFavorited ? "حذف کردن " : " افزودن به علاقه مندی"}
      </span>
    </div>
  );
};
export default HearButton;
