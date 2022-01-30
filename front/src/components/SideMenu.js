import Twitter from './Icons/Twitter';
import House from './Icons/House';
import Lattice from './Icons/Lattice';
import Bell from './Icons/Bell';
import Message from './Icons/Message';
import Bookmark from './Icons/Bookmark';
import Listnote from './Icons/Listnote';
import Profilepic from './Icons/Profilepic';
import More from './Icons/More';
import SideMenuTab from './SideMenuTab';
import './SideMenu.css';

const tabData = [
  {
    text: "Главная",
    link: "/",
    icon: <House class="Side-menu-list-item-img" />
  },
  {
    text: "Обзор",
    link: "/explore",
    icon: <Lattice class="Side-menu-list-item-img" />
  },
  {
    text: "Уведомления",
    link: "/notifications/",
    icon: <Bell class="Side-menu-list-item-img" />
  },
  {
    text: "Сообщения",
    link: "/",
    icon: <Message class="Side-menu-list-item-img" />
  },
  {
    text: "Закладки",
    link: "/",
    icon: <Bookmark class="Side-menu-list-item-img" />
  },
  {
    text: "Списки",
    link: "/",
    icon: <Listnote class="Side-menu-list-item-img" />
  },
  {
    text: "Профиль",
    link: "/profile",
    icon: <Profilepic class="Side-menu-list-item-img" />
  },
  {
    text: "Еще",
    link: "/",
    icon: <More class="Side-menu-list-item-img" />
  }
]

function SideMenu() {
  const tabComponents = tabData.map(sideMenuTab => <SideMenuTab text={sideMenuTab.text} link={sideMenuTab.link}>{sideMenuTab.icon}</SideMenuTab>)
  return (
    <div className="Side-menu-list">
      <div className="Side-menu-list-item">
        <a href="#" className="Side-menu-list-item-logo-wrapper">
          <Twitter class="Side-menu-list-item-img" />
        </a>
      </div>
      {tabComponents}
      <div className="Side-menu-list-item">
        <div className="Side-menu-list-item-button">
          <a href="#" className="Side-menu-list-item-button-link">
            <div className="Side-menu-list-item-button-text-wrapper">
              <span className="Side-menu-list-item-button-text">Твитнуть</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideMenu