import Profilemore from './Icons/Profilemore';
import Profilebell from './Icons/Profilebell';
import Profilelocation from './Icons/Profilelocation';
import Profilelink from './Icons/Profilelink';
import Profiledate from './Icons/Profiledate';
import ProfileItem from './ProfileItem';
import './Profile.css';

function Profile(props) {
  return (
    <>
      <div className="Profile-wrapper">
        <div className="Profile-bg">
          <img src={props.profileBg} className="Profile-bg-img"></img>
        </div>
        <div className="Profile-main">
          <div className="Profile-main-info">
            <div className="Profile-main-info-img-wrapper">
              <div className="Profile-main-info-img-bg">
                <img src={props.profileImg} className="Profile-main-info-img"></img>
              </div>
            </div>
            <div className="Profile-main-info-features">
              <div className="Profile-main-info-features-more">
                <Profilemore class="Profile-main-info-features-more-img" />
              </div>
              <div className="Profile-main-info-features-bell">
                <Profilebell class="Profile-main-info-features-bell-img" />
              </div>
              <div className="Profile-main-info-features-reads">
                <span className="Profile-main-info-features-reads-text">Читаемые</span>
              </div>
            </div>
          </div>
          <div className="Profile-main-name">
            <span className="Profile-main-name-text">{props.username}</span>
          </div>
          <div className="Profile-main-tag">
            <span className="Profile-main-tag-text">@{props.usertag}</span>
          </div>
          <div className="Profile-main-desc">
            <span className="Profile-main-desc-text">{props.userdesc}</span>
          </div>
          <div className="Profile-main-stats">
            <ProfileItem text={props.location}>
              <Profilelocation class="Profile-main-stats-item-img"/>
            </ProfileItem>
            <ProfileItem text={props.link}>
              <Profilelink class="Profile-main-stats-item-img"/>
            </ProfileItem>
            <ProfileItem text={props.regdate}>
              <Profiledate class="Profile-main-stats-item-img"/>
            </ProfileItem>
          </div>
          <div className="Profile-main-reads">
            <span className="Profile-main-reads-follows"><span className="bold-numbers">{props.follows}</span> в читаемых</span>
            <span className="Profile-main-reads-subs"><span className="bold-numbers">{props.subs}</span> читателей</span>
          </div>
          <span className="Profile-main-crossfriends">{props.crossfriends}</span>
        </div>
      </div>
    </>
  );
}

export default Profile