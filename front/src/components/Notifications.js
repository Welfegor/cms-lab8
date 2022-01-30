import React from 'react';
import Layout from './Layout';
import Settings from './Icons/Settings';
import './Notifications.css';
import TabNav from './TabNav';
import Tab from './Tab';
import NotificationMessage from './NotificationMessage';


class Notifications extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: 'Все'
        }
    }

    setSelected = (tab) => {
        this.setState({ selected: tab })
    }
    render() {
        return (
            <Layout>
                <div className="Notifications-right-feed-title">
                    <span className="Notifications-right-feed-title-text">Уведомления</span>
                    <Settings class="Notifications-right-feed-title-img" />
                </div>
                <TabNav tabs={['Все', 'Упоминания']} selected={this.state.selected} setSelected={this.setSelected}>
                    <Tab isSelected={this.state.selected === 'Все'}>
                        <NotificationMessage content="Nov 04, 2021 в вашу учетную запись @Welfegor2 был выполнен вход с нового устройства. Ознакомьтесь с подробной информацией." />
                        <NotificationMessage content="Nov 04, 2021 в вашу учетную запись @Welfegor2 был выполнен вход с нового устройства. Ознакомьтесь с подробной информацией." />
                    </Tab>
                    <Tab isSelected={this.state.selected === 'Упоминания'}>
                        <NotificationMessage content="Nov 04, 2021 в вашу учетную запись @Welfegor2 был выполнен вход с нового устройства. Ознакомьтесь с подробной информацией." />
                    </Tab>
                </TabNav>
                {this.props.children}
            </Layout>
        );
    }
}

export default Notifications