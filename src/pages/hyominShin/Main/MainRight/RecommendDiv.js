import './RecommendDiv.scss';
import '../../../../styles/common.scss';

const RecommendDiv = () => {
  return (
    <div className="recommendDiv">
      <div className="allView">
        <span className="subGray">회원님을 위한 추천</span>
        <span className="find-more">모두보기</span>
      </div>
      <div className="miniProfileCard">
        <img className="myProfile" src="images/good6.jpg" />
        <div className="PeopleName">
          <span className="miniTextBold">Hyomins-013</span>
          <span className="miniSubGray">효민입니다.</span>
        </div>
        <button type="submit">팔로우</button>
      </div>
      <div className="miniProfileCard">
        <img className="myProfile" src="images/good6.jpg" />
        <div className="PeopleName">
          <span className="miniTextBold">Hyomins-013</span>
          <span className="miniSubGray">효민입니다.</span>
        </div>
        <button type="submit">팔로우</button>
      </div>
    </div>
  );
};

export default RecommendDiv;
