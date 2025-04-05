"use client";
import useQuestionModal from "@/app/hooks/useQuesitionModal";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
interface DeleteProdcutProps {
  productId: string;
}
const DeleteProduct: React.FC<DeleteProdcutProps> = ({ productId }) => {
  // console.log(productId)
  const questionModal=useQuestionModal()
  const router = useRouter();
 
  const deletProduct =(id: string) => {
    axios
      .delete(`/api/product/${id}`)
      .then(() => {
        toast.success("با موفقیت حذف شد");
        setTimeout(() => {
          router.refresh();
          questionModal.onClose()
        }, 1000);
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <div
        onClick={() => deletProduct(productId)}
        className=" text-white cursor-pointer bg-red-600 inline-block p-2 rounded-[.5rem] "
      >
        <RiDeleteBin6Line />
      </div>
      {/* <QuestionModal cliecked={() => deletProduct(productId)} /> */}
    </>
  );
};
export default DeleteProduct;
