import { useCallback, useMemo } from "react";
import { SafeUser } from "../types";
import useLoginModal from "./useLoginModal";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IUseFavorite {
  productId: string;
  currentUser?: SafeUser | null;
}
const useFavorite = ({ productId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(productId);
  }, [productId, currentUser]);
  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }
      try {
        let requset;
        if (hasFavorited) {
          requset = () => axios.delete(`/api/favorites/${productId}`);
        } else {
          requset = () => axios.post(`/api/favorites/${productId}`);
        }
        await requset();
        toast.success("به سبد خرید شما اضافه شد!");
        router.refresh()
      } catch (error:any) {
        toast.error("دقایقی دیگر امتحان کنید");
        throw new Error(error)
      }
    },
    [currentUser, hasFavorited, productId, loginModal, router]
  );
  return { hasFavorited, toggleFavorite };
};
export default useFavorite;
