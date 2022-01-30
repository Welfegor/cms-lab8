import PostReaction from './PostReaction';
import Comment from './Icons/Comment';
import Repost from './Icons/Repost';
import Like from './Icons/Like';
import Share from './Icons/Share';
import Dotsettings from './Icons/Dotsettings';
import './Post.css';
import React from 'react';

class Post extends React.Component {
  render() {
    const likeclass = "Post-interact-features-img " + this.props.mylike
    return (
      <div className="Post-wrapper">
        <div className="Post-avatar">
          <a href="#" className="Post-avatar-link">
            <img src={this.props.avatar} className="Post-avatar-link-img" />
          </a>
        </div>
        <div className="Post-body">
          <div className="Post-body-header">
            <div className="Post-body-header-user">
              <div className="Post-body-header-user-info">
                <span className="Post-body-header-user-info-username">{this.props.username}</span>
                <span className="Post-body-header-user-info-usertag"> @{this.props.usertag}</span>
                <span className="Post-body-header-user-info-posttime"> · {this.props.posttime}</span>
              </div>
              <div className="Post-body-header-user-settings">
                <Dotsettings class="Post-body-header-user-settings-img" />
              </div>
            </div>
          </div>
          <div className="Post-body-main">
            {this.props.content}
            <img src={this.props.contentPhoto} className="Post-body-main-img" />
          </div>
          <div className="Post-interact">
            <PostReaction text={this.props.comments}>
              <Comment class="Post-interact-features-img" />
            </PostReaction>
            <PostReaction text={this.props.reposts}>
              <Repost class="Post-interact-features-img" />
            </PostReaction>
            <PostReaction text={this.props.likes}>
              <Like class={likeclass} />
            </PostReaction>
            <PostReaction>
              <Share class="Post-interact-features-img" />
            </PostReaction>
          </div>
        </div>
      </div>
    );
  }
}

export default Post