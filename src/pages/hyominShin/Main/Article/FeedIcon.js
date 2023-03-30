import './FeedIcon.scss';
import '../../../../styles/common.scss';

const FeedIcon = () => {
  return (
    <div className="articleFeedIcon">
      <div>
        <img className="iconStyle" src="images/heart.png" />
        <img
          className="iconStyle"
          src="images/free-icon-speech-bubble-151789.png"
        />
        <img className="iconStyle" src="images/ribbon.png" />
      </div>
      <img className="iconStyle" src="images/upload.png" />
    </div>
  );
};

export default FeedIcon;
