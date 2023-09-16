import React from "react";
import { useParams } from "react-router-dom";

const UserProfileDetails = ({ toggleAccountSettings, profileData }) => {
  const { id } = useParams();
  const memberId = localStorage.getItem("memberId");

  return (
    <div className="flex flex-row justify-center items-center md:flex-col md:mb-6 ">
      {profileData && (
        <>
          <img
            className="flex items-center rounded-full object-cover w-[75px] h-[75px] m-2.5 md:mt-10 md:mb-6 md:w-[140px] md:h-[140px] xl:w-[160px] xl:h-[160px]"
            src={
              profileData.profileImg
                ? profileData.profileImg
                : "https://homepagepictures.s3.ap-northeast-2.amazonaws.com/client/public/images/userImg.png"
            }
            alt="profile"
          />
          <div className="flex flex-col justify-center items-start md:items-center">
            <div className="text-md pb-1 md:text-2xl font-bold">
              {profileData.nickname}
            </div>
            <div className="text-sm pb-4 md:mx-16 md:my-4 break-all">
              {profileData.myIntro}
            </div>
            {memberId === id && (
              <button
                className="bg-[#00647B] text-white font-semibold hover:bg-[#00647B]/50 rounded-full p-1 md:p-2 text-xs md:text-md"
                onClick={() => toggleAccountSettings(true)}
              >
                계정설정
              </button>
            )}
            
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfileDetails;
