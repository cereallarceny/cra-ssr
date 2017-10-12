import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../../components/page';
import { addNotification } from '../../../../modules/notification';

class Homepage extends Component {
  render() {
    return (
      <Page title="Homepage" id="homepage">
        <h1>Welcome to our beautiful homepage</h1>
        <button
          onClick={() => this.props.addNotification({ text: 'this is great' })}
        >
          Add notification
        </button>
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addNotification }, dispatch);

export default connect(null, mapDispatchToProps)(Homepage);
