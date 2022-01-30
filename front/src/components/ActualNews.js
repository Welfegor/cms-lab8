function ActualNews(props) {
  return (
    <div className="Actual-content-topic">
        <div className="Actual-content-topic-theme">
            <span className="Actual-content-topic-theme-text">{props.theme}</span>
            {props.children}
        </div>
        <span className="Actual-content-topic-name">{props.themeName}</span>
        <span className="Actual-content-topic-tweets">{props.themeTweets}</span>
    </div>
  );
}

export default ActualNews