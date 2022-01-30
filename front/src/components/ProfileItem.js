function ProfileItem(props) {
  return (
    <div className="Profile-main-stats-item">
        {props.children}
        <div className="Profile-main-stats-item-text">{props.text}</div>
    </div>
  );
}

export default ProfileItem