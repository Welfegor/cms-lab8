import Insertpic from './Icons/Insertpic';
import Insertgif from './Icons/Insertgif';
import Insertpull from './Icons/Insertpull';
import Insertemoji from './Icons/Insertemoji';
import Insertschedule from './Icons/Insertschedule';
import './CreatePost.css';

function CreatePost(props) {
  return (
    <div className="Create-post-wrapper">
      <div className="Create-post-avatar">
        <a href="#" className="Create-post-avatar-link">
          <img src={props.avatar} className="Create-post-avatar-link-img" />
        </a>
      </div>
      <div className="Create-post-editor">
        <div className="Create-post-editor-input">
          <div className="Create-post-editor-input-placeholder">
            <span className="Create-post-editor-input-placeholder-text">Что происходит?</span>
          </div>
        </div>
        <div className="Create-post-editor-manage">
          <div className="Create-post-editor-manage-features">
            <a href="#" className="Create-post-editor-manage-features-link"><Insertpic class="Create-post-editor-manage-features-link-img" /></a>
            <a href="#" className="Create-post-editor-manage-features-link"><Insertgif class="Create-post-editor-manage-features-link-img" /></a>
            <a href="#" className="Create-post-editor-manage-features-link"><Insertpull class="Create-post-editor-manage-features-link-img" /></a>
            <a href="#" className="Create-post-editor-manage-features-link"><Insertemoji class="Create-post-editor-manage-features-link-img" /></a>
            <a href="#" className="Create-post-editor-manage-features-link"><Insertschedule class="Create-post-editor-manage-features-link-img" /></a>
          </div>
          <div className="Create-post-editor-manage-button">
            <a href="#" className="Create-post-editor-manage-button-link">
              <div className="Create-post-editor-manage-button-text-wrapper">
                <span className="Create-post-editor-manage-button-text">Твитнуть</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost