import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// Action Creators
import { removeNotification } from '../../modules/notification';

// UI Components
import Notifications from './components/notifications';

// Routes
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div id="app">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/something">A broken page link</Link>
          </li>
        </ul>
        <Notifications
          notifications={this.props.notifications}
          removeFunc={this.props.removeNotification}
        />
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notifications: state.notification.notifications
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeNotification }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
