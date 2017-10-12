import React from 'react';

import './notifications.css';

const Notification = props => (
  <li className={'notification ' + (props.type || 'primary')}>
    {props.text}
    <button className="close" onClick={() => props.removeFunc(props.id)}>
      &times;
    </button>
  </li>
);

const Notifications = props =>
  props.notifications.length > 0 ? (
    <ul id="notifications">
      {props.notifications.map(notification => {
        return (
          <Notification
            key={'notification-' + notification.id}
            removeFunc={props.removeFunc}
            {...notification}
          />
        );
      })}
    </ul>
  ) : null;

export default Notifications;
