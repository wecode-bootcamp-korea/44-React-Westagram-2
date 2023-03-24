import './MiniProfileCard.scss';
import '../../../../styles/common.scss';

const MiniProfileCard = () => {
  return (
    <li>
      <div className="miniProfileCard">
        <div className="storyRedCircle">
          <img className="myProfile" src="images/good6.jpg" />
        </div>
        <div className="PeopleName">
          <span className="miniTextBold">Hyomins-013</span>
          <span className="miniSubGray">효민입니다.</span>
        </div>
      </div>
    </li>
  );
};

export default MiniProfileCard;
