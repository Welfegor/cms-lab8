import './ExploreFeed.css';
import SearchForm from './SearchForm';
import Settings from './Icons/Settings';
import Actual from './Actual';

function ExploreFeed(props) {
  return (
    <div className="Explore-wrapper">
        <div className="explore-search-wrapper">
            <div className="explore-searchform-wrapper">
                <SearchForm />
            </div>
            <Settings class="setbutton-show" />
        </div>
        <div className="explore-actual-wrapper">
            <Actual actualTheme="Актуальные темы: Россия" actualThemeName="Спутник" actualThemeTweets="Твитов: 3 183"  setbutton="setbutton-hidden" />
        </div>
    </div>
  );
}

export default ExploreFeed