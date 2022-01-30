function ReadRecommendationsItem(props) {
  return (
    <div className="ReadRecommendations-content-item">
        <div className="ReadRecommendations-content-item-wrapper">
            <div className="ReadRecommendations-content-avatar">
            <img src={props.avatar} className="ReadRecommendations-content-avatar-img" />
            </div>
            <div className="ReadRecommendations-content-userinfo">
                <div className="ReadRecommendations-content-userinfo-username">{props.username}</div>
                <div className="ReadRecommendations-content-userinfo-usertag">@{props.usertag}</div>
            </div>
            <div className="ReadRecommendations-content-readbutton">
                <span className="ReadRecommendations-content-readbutton-button">Читать</span>
            </div>
        </div>
    </div>
  );
}

export default ReadRecommendationsItem