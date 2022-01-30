import './ReadRecommendations.css';
import ReadRecommendationsItem from './ReadRecommendationsItem';

function ReadRecommendations(props) {
  return (
    <div className="ReadRecommendations-wrapper">
      <div className="ReadRecommendations-header">
        <span className="ReadRecommendations-header-title">Кого читать</span>
      </div>
      <div className="ReadRecommendations-content">
          <ReadRecommendationsItem avatar="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" username="Welfegor" usertag="welfegoroff" />
          <ReadRecommendationsItem avatar="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" username="Welfegor" usertag="welfegoroff" />
          <ReadRecommendationsItem avatar="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" username="Welfegor" usertag="welfegoroff" />
      </div>
      <div className="ReadRecommendations-more">
        <a href="#" className="ReadRecommendations-more-text">Показать еще</a>
      </div>
    </div>
  );
}

export default ReadRecommendations