"use client";
import ButtonAni from "@/app/components/common/button-ani/ButtonAni";
import Input from "@/app/components/common/input/Input";
import { UploadButton } from "@/app/utils/uploadthing";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css"; // Add css for snow theme
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddBlog = () => {
  const [loading, setLoading] = useState(false);
  const router=useRouter()
  const placeholder = "توضیحات...";
  const { quill, quillRef } = useQuill({ placeholder });
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",

      cover: "",
    },
  });
  const cover = watch("cover");
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    axios.post("/api/blog", data).then(() => {
      setLoading(false);
      toast.success('بلاگ شما با موفقیت ایجاد شد!');
      reset()
      setTimeout(()=>{

        router.refresh()
      },2000)
    }).finally(()=>{
      setLoading(false)
    })
  };
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  if (quill) {
    quill.on("text-change", () => {
      setCustomValue("description", quillRef.current.firstChild.innerHTML);
    });
  }
  return (
    <>
      <div className="rounded-[1.5rem] w-full bg-white boxStyle">
        <h4 className="p-6 text-[24px] border-b border-b-[#ebebeb] font-Dana-medium">
          افزودن محصول
        </h4>
        <div className=" p-6">
          <h4 className="font-Dana-medium  pb-6 text-zinc-700">مشخصات محصول</h4>
          <form>
            <div className="flex flex-col gap-3">
              <Input
                label="عنوان محصول"
                id="title"
                register={register}
                errors={errors}
                required
                type="text"
              />
              <div
                style={{
                  height: 300,
                  marginBottom: "24px",
                  textAlign: "right",
                  fontFamily: "Dana-medium",
                }}
                className="font-Dana"
              >
                <div ref={quillRef} />
              </div>

            </div>

            <span className="p-6 block border-b border-b-[#ebebeb]"></span>
            <h4 className="font-Dana-medium py-6 text-zinc-700">کاور محصول</h4>
            <div className="w-full flex items-start justify-between ">
              <UploadButton
                appearance={{
                  button:
                    "bg-green-800 cursor-pointer p-4 &:[lable]:bg-red-800 ",
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
                  setCustomValue("cover", res[0]?.appUrl);
                }}
              />
              <div className=" w-[30%]">
                {cover ? (
                  <img alt="cover" src={cover} className="h-full w-full object-cover" />
                ) : null}
              </div>
            </div>

            <span className="p-6 block border-b border-b-[#ebebeb]"></span>
            <div className="mt-10 ">
              {loading ? (
                <span> Loading...</span>
              ) : (
                <ButtonAni clicked={handleSubmit(onSubmit)} text="افزودن" />
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddBlog;
