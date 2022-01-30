import './Layout.css';
import Layout from './Layout';
import ProfileHeader from './ProfileHeader';
import TabNav from './TabNav';
import React from 'react';
import Tab from './Tab';
import PostsList from './PostsList';

// <Post avatar="https://pbs.twimg.com/profile_images/1246467745975156738/hicJQmq0_400x400.jpg" comments="2" reposts="3" likes="4" username="Marat" usertag="welfegor" posttime="23 окт." content="Climate Scientist Peter Kalmus speaking at GAI 2021, explains what everyday people like you and me can do to decrease our carbon footprint." contentPhoto="https://pbs.twimg.com/media/FFqGGh_X0AQ9nIL?format=jpg&name=small" />  
class Profile extends React.Component {
  constructor(props) {
        super(props)

        this.state = {
            selected: 'Твиты'
        }
    }

    setSelected = (tab) => {
        this.setState({ selected: tab })
    }
  render() {
    return (
      <Layout>
          <div className="Layout-right-feed-profile">
              <ProfileHeader profileBg="https://pbs.twimg.com/profile_banners/1115874631/1586016045/600x200" profileImg="https://pbs.twimg.com/profile_images/1246467745975156738/hicJQmq0_400x400.jpg" username="Ведомости" usertag="Vedomosti" userdesc="Какие-то новости" location="Russia" regdate="февраль 2009 г." link="vedomosti.ru" follows="31" subs="32432" crossfriends="Нет в читаемых у пользователей, которых читаете вы" />
          </div>
          <TabNav tabs={['Твиты', 'Твиты и ответы', 'Медиа', 'Нравится']} selected={this.state.selected} setSelected={this.setSelected}>
            <Tab isSelected={this.state.selected === 'Твиты'}>
              <PostsList media="false" liked="false" replies="false" />
            </Tab>
            <Tab isSelected={this.state.selected === 'Твиты и ответы'}>
              <PostsList meida="false" liked="false" replies="true" />
            </Tab>
            <Tab isSelected={this.state.selected === 'Медиа'}>
              <PostsList media="true" liked="false" replies="false" />
            </Tab>
            <Tab isSelected={this.state.selected === 'Нравится'}>
              <PostsList media="false" liked="true" replies="false" />
            </Tab>
          </TabNav>
          {this.props.children}
      </Layout>
    );
  }
}

export default Profile