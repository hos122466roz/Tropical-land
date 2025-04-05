"use clinet";

import getCurrentUser from "@/app/actions/getCurrentUser";
import ImageUpload from "@/app/components/image-upload";

const Profile = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div className="rounded-[1.5rem] w-full bg-white boxStyle">
      <h4 className="p-6 text-[24px] border-b border-b-[#ebebeb] font-Dana-medium">
        اطلاعات کاربری
      </h4>
      <div className=" p-6">
        <div>
          <ImageUpload src={currentUser?.image} />
        </div>
        <div className="flex justify-center gap-x-28">
          <div>
            نام : <strong>{currentUser?.name}</strong>
          </div>
          <span className="text-[#ebebeb]">|</span>
          <div>
            ایمیل : <strong>{currentUser?.email}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
