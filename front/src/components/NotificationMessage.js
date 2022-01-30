import './Notifications.css';
import Twitter from './Icons/Twitter';

function NotificationMessage(props) {
  return (
    <div className="Notification-message-wrapper">
      <div className="Notification-message">
        <div className="Notificaton-message-img-wrapper">
          <Twitter class="Notification-message-img" />
        </div>
        <div className="Notificaton-message-text">
          {props.content}
        </div>
      </div>
    </div>
  );
}

export default NotificationMessage