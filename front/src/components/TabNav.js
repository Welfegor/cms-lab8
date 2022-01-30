import React from "react";
import './Notifications.css';

class TabNav extends React.Component {
    render() {
        return (
            <div>
                <div className="Notifications-right-feed-tabs">
                    {
                        this.props.tabs.map(tab => {
                            const active = (tab == this.props.selected? 'active' : '')
                            return (
                                <div className="Notifications-right-feed-lefttab" key={tab}>
                                    <a href="#" className={active} onClick={ () => this.props.setSelected(tab)}>
                                        { tab }
                                    </a>
                                </div>
                            );

                        })
                    }
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default TabNav;