import React from 'react';
import { connect } from 'react-redux';
import Page from '../../components/page';

const Dashboard = ({ currentUser }) => (
  <Page id="dashboard" title="Dashboard">
    We have a secret dashboard that only cool kids can access.
    <p>
      <b>Name:</b> {currentUser.name}
    </p>
    <p>
      <b>Email:</b> {currentUser.email}
    </p>
    <p>
      <b>Password:</b> {currentUser.password}
    </p>
  </Page>
);

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(
  mapStateToProps,
  null
)(Dashboard);
