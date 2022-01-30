import './Layout.css';
import SideMenu from './SideMenu';
import SearchForm from './SearchForm'
import Actual from './Actual'
import ReadRecommendations from './ReadRecommendations';
import Policy from './Policy';
import {useState} from "react";
import getRequest from '../requests/getRequest';

const defaultActuals = [
    {
        actualTheme: "Актуальные темы: Россия",
        actualThemeName: "Спутник",
        actualThemeTweets: "Твитов: 3 183",
        setbutton: "setbutton-show",
        Actualbg: "Actualbg"
    },
]

function Layout(props) {
  const [actuals, setActuals] = useState(defaultActuals)
  const API_URL_actuals = 'http://localhost:3000/actual'

  useState(() => {
    getRequest(defaultActuals, setActuals, API_URL_actuals)
  })

  return (
    <div className="Layout-wrapper">
        <div className="Layout-left">
            <SideMenu />
        </div>
        <div className="Layout-right">
            <div className="Layout-right-feed">
                {props.children}
            </div>
            <div className="Layout-right-sidebar">
                <div className="Layout-right-sidebar-searchform">
                    <SearchForm/>
                </div>
                <div className="Layout-right-sidebar-actual">
                    {actuals.map((val)=> <Actual actualTheme={val.actualTheme} actualThemeName={val.actualThemeName}
                    actualThemeTweets={val.actualThemeTweets} setbutton={val.setbutton}
                    Actualbg={val.Actualbg} />)}
                </div>
                <div className="Layout-right-sidebar-readRecommendations">
                    <ReadRecommendations />
                </div>
                <div className="Layout-right-sidebar-policy">
                    <Policy />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Layout