import React from "react";
import Background from "../components/common/Background";
import SignupLayout from "../components/signup/SignupLayout";

const Signup = () => {
  return (
    <Background
      mainclassName=""
      divclassName="justify-center items-center"
      style={{
        background: "url('/images/SignupBackground.png')",
        backgroundPosition: "center", // 이미지 위치
        backgroundSize: "cover", // 이미지 꽉차게
        backgroundRepeat: "no-repeat", // 이미지 반복 지정
        height: "100vh",
      }}
    >
      <SignupLayout />
    </Background>
  );
};

export default Signup;