"use client";
import ButtonAni from "@/app/components/common/button-ani/ButtonAni";
import Input from "@/app/components/common/input/Input";
import Textarea from "@/app/components/common/textarea/Texrarea";
import { UploadButton } from "@/app/utils/uploadthing";
import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import "@uploadthing/react/styles.css";

import {
  GiPlantSeed,
  GiTreeBranch,
  GiFruitTree,
  GiFruitBowl,
} from "react-icons/gi";

const categorys = [
  {
    icon: <GiFruitTree size={22} />,
    title: "نهال",
    category: "Seedling",
  },
  {
    icon: <GiPlantSeed size={22} />,
    title: "بذر",
    category: "Seed ",
  },
  {
    icon: <GiTreeBranch size={22} />,
    title: "قلمه",
    category: "Cutting ",
  },
  {
    icon: <GiFruitBowl size={22} />,
    title: "میوه",
    category: "Frui ",
  },
];
const AddProduct = () => {
  const [loading,setLoading]=useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      imageSrc: "",
      category: "",
      price: "",
    },
  });

  const imageSrc = watch("imageSrc");
  const category = watch("category");
  const price = watch("price");
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true)
    axios.post("/api/product", data).then(() => {
  
      toast.success("محصول شما با موفقیت ثبت شد!");
      reset();
    }).finally(()=>{
    setLoading(false);
    })
  };
  return (
    <>
      <div className="rounded-[1.5rem] w-full bg-white boxStyle">
        <h4 className="p-6 text-[24px] border-b border-b-[#ebebeb] font-Dana-medium">
          افزودن محصول
        </h4>
        <div className=" p-6">
          <h4 className="font-Dana-medium pb-6 text-zinc-700">مشخصات محصول</h4>
          <form>
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="عنوان محصول"
                id="title"
                register={register}
                errors={errors}
                required
                type="text"
              />
              <Textarea
                label="توضحیات "
                id="description"
                register={register}
                errors={errors}
                required
              />
              <Input
                label="قیمت "
                id="price"
                register={register}
                errors={errors}
                required
                type="number"
              />
            </div>
            {price ? (
              <span className="text-zinc-700 mt-4 block font-Dana-medium ">
                {parseInt(price, 10).toLocaleString()} تومان
              </span>
            ) : null}
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
                  setCustomValue("imageSrc", res[0]?.appUrl);
                }}
              />
              <div className=" w-[30%]">
                {imageSrc ? (
                  <img alt="profile" src={imageSrc} className="h-full w-full object-cover" />
                ) : null}
              </div>
            </div>
            <span className="p-6 block border-b border-b-[#ebebeb]"></span>
            <h4 className="font-Dana-medium py-6 text-zinc-700">دسته بندی </h4>
            <div className=" flex gap-6">
              {categorys.map((item) => (
                <div
                  onClick={() => setCustomValue("category", item.category)}
                  className={`flex ${
                    category === item.category
                      ? "text-green-800 border-green-900 border-2 bg-green-300/10"
                      : "text-zinc-600 border-zinc-600"
                  } items-center gap-3 p-4 border rounded-[1rem] cursor-pointer  hover:text-green-800 hover:border-green-900`}
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span className="text-md font-Dana-medium">{item.title}</span>
                </div>
              ))}
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
export default AddProduct;
