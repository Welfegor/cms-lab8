import {
  Link
} from "react-router-dom";

function SideMenuTab(props) {
  return (
    <Link to={props.link} className="Side-menu-list-item">
        <div className="Side-menu-list-item-wrapper">
            {props.children}
            <span className="Side-menu-list-item-text">{props.text}</span>
        </div>
    </Link>
  );
}

export default SideMenuTab