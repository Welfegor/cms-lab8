import SideMenu from './SideMenu';
import ExploreFeed from './ExploreFeed';
import ReadRecommendations from './ReadRecommendations';
import Policy from './Policy';

function Explore(props) {
  return (
    <div className="Layout-wrapper">
        <div className="Layout-left">
            <SideMenu />
        </div>
        <div className="Layout-right">
            <div className="Layout-right-feed">
                <ExploreFeed />
                {props.children}
            </div>
            <div className="Layout-right-sidebar">
              <ReadRecommendations />
              <Policy />
            </div>
        </div>
    </div>

  );
}

export default Explore