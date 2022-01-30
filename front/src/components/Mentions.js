import CreatePost from './CreatePost';
import Notifications from './Notifications';

function Mentions(props) {
  return (
      <Notifications mentionactive="active">
          <CreatePost />
      </Notifications>
  );
}

export default Mentions