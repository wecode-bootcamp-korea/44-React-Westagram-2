import './LikeInfo.scss';
import '../../../../styles/common.scss';

const LikeInfo = props => {
  return (
    <div className="articleLikeInfo">
      <img className="profilePic" src={props.profileImg} />
      <span className="textBold">{props.nickName}</span>
      <span>님 </span>
      <span className="textBold"> 외 10명</span>
      <span>이 좋아합니다.</span>
    </div>
  );
};

export default LikeInfo;
