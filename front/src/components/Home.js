import PopularTweets from './Icons/Populartweets';
import './Layout.css';
import Layout from './Layout';
import CreatePost from './CreatePost';
import {useState} from "react";
import getRequest from '../requests/getRequest'
import Post from './Post';
 
 

const defaultPosts = [
  {
    avatar: "https://pbs.twimg.com/profile_images/1246467745975156738/hicJQmq0_400x400.jpg",
    comments: "2",
    reposts: "3",
    likes: "4",
    username: "Marat",
    usertag: "welfegor",
    posttime: "23 окт.",
    content: "Climate Scientist Peter Kalmus speaking at GAI 2021, explains what everyday people like you and me can do to decrease our carbon footprint.",
    contentPhoto: "https://pbs.twimg.com/media/FFqGGh_X0AQ9nIL?format=jpg&name=small"
  },
]

function Home() {
  const [posts, setPosts] = useState(defaultPosts)
  const API_URL_posts = 'http://localhost:3000/post'

  useState(() => {
    getRequest(defaultPosts, setPosts, API_URL_posts)
  })

  return (
    <Layout>
        <div className="Layout-right-feed-title">
            <span className="Layout-right-feed-title-text">Главная</span>
            <PopularTweets class="Layout-right-feed-title-img" />
        </div>
        <div className="Layout-right-feed-createpost">
            <CreatePost avatar="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" />
        </div>
        {posts.map((val)=> <Post avatar={val.avatar} comments={val.comments}
        reposts={val.reposts} likes={val.likes} username={val.username}
        usertag={val.usertag} posttime={val.posttime}
        content={val.content} contentPhoto={val.contentPhoto}/>)}
    </Layout>
  );
}

export default Home