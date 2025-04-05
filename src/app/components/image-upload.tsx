"use client";
import { UploadButton } from "../utils/uploadthing";

import toast from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
// import "@uploadthing/react/styles.css";
import { useRouter } from "next/navigation";
import Avatar from "./common/avatar/Avatar";
import ButtonAni from "./common/button-ani/ButtonAni";
interface ImageUploadProps{
src:any
}
const ImageUpload:React.FC<ImageUploadProps> = ({src}) => {
  const router = useRouter();
  const { handleSubmit, watch, setValue } = useForm<FieldValues>({
    defaultValues: {
      image: "",
    },
  });
  const image = watch("image");
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios.post("/api/image-upload", data).then(() => {
      toast.success("پروفایل شما با موفقیت تغییر یافت");
      setTimeout(() => {
        router.refresh();
      },1000);
    });
  };
  return (
    <div
      className="flex justify-center items-center flex-col gap-y-3
      mb-10"
    >
      <div className="w-28 h-28 flex justify-center items-center">
        {image ? (
          <img alt="cover" src={image} className="w-full h-full object-cover flex " />
        ) : (
          <Avatar src={src} />
        )}
      </div>
      <UploadButton
        appearance={{
          button: "bg-green-800 cursor-pointer p-4 &:[lable]:bg-red-800 ",
          container:
            "w-max text-zinc-700 flex items-center flex-col rounded-md  border-cyan-300 ",
          allowedContent:
            "flex text-zinc-700 h-8 flex-row items-center justify-center px-2",
        }}
        endpoint="imageUploader"
        // onClientUploadComplete={(res) => {
        //   setUser(res);
        //   toast.success("با موفقیت بارگزاری شد");
        // }}
        onClientUploadComplete={(res) => {
          setValue("image", res[0]?.appUrl);
        }}
      />
      <ButtonAni text="تایید ویرایش" clicked={handleSubmit(onSubmit)} />
      
    </div>
  );
};

export default ImageUpload;
