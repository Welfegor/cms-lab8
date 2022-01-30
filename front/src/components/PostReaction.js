function PostReaction(props) {
  return (
    <>
        <div className="Post-interact-features">
            {props.children}
            <span className="Post-interact-features-text">{props.text}</span>
        </div>
    </>
  );
}

export default PostReaction