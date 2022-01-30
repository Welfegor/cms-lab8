import './Layout.css';
import Layout from './Layout';
import ProfileHeader from './ProfileHeader';
import {
  useParams
} from "react-router-dom";


function User(props) {
  let { login } = useParams();
  return (
    <Layout>
        <div className="Layout-right-feed-profile">
            <ProfileHeader profileBg="https://pbs.twimg.com/profile_banners/1115874631/1586016045/600x200" profileImg="https://pbs.twimg.com/profile_images/1246467745975156738/hicJQmq0_400x400.jpg" username={login} usertag={login} userdesc="Какие-то новости" location="Russia" regdate="февраль 2009 г." link="vedomosti.ru" follows="31" subs="32432" crossfriends="Нет в читаемых у пользователей, которых читаете вы" />
        </div>
        {props.children}
    </Layout>
  );
}

export default User