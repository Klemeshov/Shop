import React from "react";
import classes from "./NotificationButton.module.css"

//children onClick notification className notificationClassName time(default 1000)
class NotificationButton extends React.Component {

    state = {
        isNotification: false
    };

    timer = null;
    Click = () => {
        this.props.onClick();
        this.setState({isNotification: true});
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.setState({isNotification: false})
        }, this.props.time || 1000);
    };

    componentWillUnmount() {
        clearTimeout(this.timer);
    }


    render() {
        return (
            <>
                <button onClick={this.Click} className={this.props.className}>
                    {this.props.children}
                </button>
                {this.state.isNotification
                && <div className={this.props.notificationClassName+' '+classes.Notification}>
                    {this.props.notification}
                </div>
                }
            </>
        )
    }
}

export default NotificationButton;