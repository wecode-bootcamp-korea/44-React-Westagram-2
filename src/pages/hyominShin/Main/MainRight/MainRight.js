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
        {INSTA_INFOMATION.map(a => (
          <p key={a.id}>{a.info}</p>
        ))}
        <br />
        <br />
        <p>© 2020 INSTAGRAM FROM FACEBOOK</p>
      </div>
    </div>
  );
};

const INSTA_INFOMATION = [
  { id: 1, info: 'Instagram 정보 ∙', path: '~' },
  { id: 2, info: '지원 ∙', path: '~' },
  { id: 3, info: '홍보 센터 ∙', path: '~' },
  { id: 4, info: 'API ∙', path: '~' },
  { id: 5, info: '채용정보 ∙', path: '~' },
  { id: 6, info: '개인정보처리방침 ∙', path: '~' },
  { id: 7, info: '약관 ∙', path: '~' },
  { id: 8, info: '디렉터리 ∙', path: '~' },
  { id: 9, info: '프로필 ∙', path: '~' },
  { id: 10, info: '해시태그 ∙', path: '~' },
  { id: 11, info: '언어', path: '~' },
];

export default MainRight;
