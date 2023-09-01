import React from 'react';
import MainWrap from './MainWrap';

const MainSecond = () => {
    return (
      <MainWrap
        style={{
          background: "url('/images/main-bg2.png')",
          backgroundPosition: "center", // 이미지 위치
          backgroundSize: "cover", // 이미지 꽉차게
          backgroundRepeat: "no-repeat", // 이미지 반복 지정
        }}
        mainTitle="유용한 꿀팁 모아보기"
        subTitle="Tips"
        intro1="살림에 유용한 정보들이 가득합니다."
        intro2="태그를 클릭하면 원하는 정보만 모아볼 수 있습니다."
        intro3="또 보고 싶은 글은 북마크 할 수 있습니다."
        page="Tips 구경가기"
        px="px-[140px]"
        linkTo="/tips"
      />
    );
};

export default MainSecond;