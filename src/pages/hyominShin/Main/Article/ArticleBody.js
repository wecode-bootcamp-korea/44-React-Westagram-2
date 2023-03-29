import React from 'react';
import Feeds from './Feeds';
import './ArticleBody.scss';
import '../../../../styles/common.scss';

const ArticleBody = ({ user }) => {
  // const [likes, setLikes] = useState([]);
  // const [inputComment, setInputComment] = useState('');
  // const [comments, setComments] = useState([]);
  // // const [userObj, setUserObj] = useState(user);

  return (
    <div className="articleBody">
      {user &&
        user.map(function (userList) {
          return <Feeds user={userList} key={userList.id} />;
        })}
    </div>
  );
};

export default ArticleBody;
