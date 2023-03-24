import './LikeInfo.scss';
import '../../../../styles/common.scss';

const LikeInfo = () => {
  return (
    <div className="articleLikeInfo">
      <img
        className="profilePic"
        src="images/KakaoTalk_Photo_2023-03-13-20-33-24.jpeg"
      />
      <span className="textBold">minjun</span>
      <span>님 </span>
      <span className="textBold"> 외 10명</span>
      <span>이 좋아합니다.</span>
    </div>
  );
};

export default LikeInfo;
