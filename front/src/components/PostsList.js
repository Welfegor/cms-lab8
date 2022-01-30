import Post from "./Post";
// import Data from '../data/posts.json'
import React from "react";
import { useState } from "react";
import getRequest from "../requests/getRequest";

const defaultPosts = [
    {
        avatar: "https://pbs.twimg.com/profile_images/1246467745975156738/hicJQmq0_400x400.jpg",
        comments: "2",
        reposts: "3",
        likes: "4",
        username: "Marat",
        usertag: "welfegor",
        posttime: "23 окт.",
        mylike: "like2",
        content: "Climate Scientist Peter Kalmus speaking at GAI 2021, explains what everyday people like you and me can do to decrease our carbon footprint.",
        contentPhoto: "https://pbs.twimg.com/media/FFqGGh_X0AQ9nIL?format=jpg&name=small",
        like: "true"
    },
    {
        avatar: "https://pbs.twimg.com/profile_images/1246467745975156738/hicJQmq0_400x400.jpg",
        comments: "20",
        reposts: "34",
        likes: "443",
        username: "arat",
        usertag: "w",
        posttime: "29 окт.",
        mylike: "like1",
        content: "ople like you and me can do to decrease our carbon footprint.",
        contentPhoto: "",
        like: "false"
    },
    {
        avatar: "https://pbs.twimg.com/profile_images/1246467745975156738/hicJQmq0_400x400.jpg",
        comments: "2",
        reposts: "3",
        likes: "4",
        username: "Marat",
        usertag: "welfegor",
        posttime: "23 окт.",
        mylike: "like1",
        content: "Climate Scientist Peter Kalmus speaking at GAI 2021, explains what everyday people like you and me can do to decrease our carbon footprint.",
        contentPhoto: "https://pbs.twimg.com/media/FFqGGh_X0AQ9nIL?format=jpg&name=small",
        like: "false"
    },
    {
        avatar: "https://pbs.twimg.com/profile_images/1246467745975156738/hicJQmq0_400x400.jpg",
        comments: "20",
        reposts: "34",
        likes: "443",
        username: "arat",
        usertag: "w",
        posttime: "29 окт.",
        mylike: "like2",
        content: "ople like you and me can do to decrease our carbon footprint.",
        contentPhoto: "",
        like: "true"
    }

]


function PostsList(props) {
    const [posts, setPosts] = useState(defaultPosts)
    const API_URL_posts = 'http://localhost:3000/post'

    useState(() => {
        getRequest(defaultPosts, setPosts, API_URL_posts)
    })

    return (
        <div>
            {posts.map((post) => {
                if (props.liked == "true" && post.like == "true")
                    return (<Post avatar={post.avatar} comments={post.comments} reposts={post.reposts} likes={post.likes} username={post.username}
                        usertag={post.usertag} posttime={post.posttime} content={post.content} contentPhoto={post.contentPhoto} mylike={post.mylike} />)
                if (props.media == "true" && post.contentPhoto != "")
                    return (<Post avatar={post.avatar} comments={post.comments} reposts={post.reposts} likes={post.likes} username={post.username}
                        usertag={post.usertag} posttime={post.posttime} content={post.content} contentPhoto={post.contentPhoto} mylike={post.mylike} />)
                if (props.replies == "true")
                    return (<Post avatar={post.avatar} comments={post.comments} reposts={post.reposts} likes={post.likes} username={post.username}
                        usertag={post.usertag} posttime={post.posttime} content={post.content} contentPhoto={post.contentPhoto} mylike={post.mylike} />)
                if (props.media == "false" && props.liked == "false" && props.replies == "false")
                    return (<Post avatar={post.avatar} comments={post.comments} reposts={post.reposts} likes={post.likes} username={post.username}
                        usertag={post.usertag} posttime={post.posttime} content={post.content} contentPhoto={post.contentPhoto} mylike={post.mylike} />)
            })}
        </div>
    );
}

export default PostsList