import './ProfileCard.scss';
import '../../../../styles/common.scss';

const ProfileCard = () => {
  return (
    <div className="profileCard">
      <img className="myProfile" src="images/good6.jpg" />
      <div className="peopleName">
        <span className="textBold">Hyomins-013</span>
        <span className="subGray">효민입니다.</span>
      </div>
    </div>
  );
};

export default ProfileCard;
