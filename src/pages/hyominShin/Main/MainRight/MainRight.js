import './MainRight.scss';
import '../../../../styles/common.scss';
import ProfileCard from './ProfileCard';
import MiniProfileCard from './MiniProfileCard';
import RecommendDiv from './RecommendDiv';

const MainRight = () => {
  return (
    <div className="mainRight">
      <ProfileCard />

      <div className="storyDiv">
        <div className="allView">
          <span className="subGray">스토리</span>
          <span className="find-more">모두보기</span>
        </div>
        <ul>
          <MiniProfileCard />
          <MiniProfileCard />
          <MiniProfileCard />
          <MiniProfileCard />
        </ul>
      </div>

      <RecommendDiv />

      <div className="instaInfo">
        <p>Instagram 정보 ∙ 지원 ∙ 홍보 센터 ∙ API ∙ </p>
        <p>채용정보 ∙ 개인정보처리방침 ∙ 약관 ∙ </p>
        <p>디렉터리 ∙ 프로필 ∙ 해시태그 ∙ 언어</p>
        <br />
        <br />
        <p>© 2020 INSTAGRAM FROM FACEBOOK</p>
      </div>
    </div>
  );
};

export default MainRight;
