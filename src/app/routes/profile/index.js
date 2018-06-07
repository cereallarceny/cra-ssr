import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import Page from '../../components/page';

import {
  getCurrentProfile,
  removeCurrentProfile
} from '../../../modules/profile';

const frontload = async props =>
  await props.getCurrentProfile(+props.match.params.id);

class Profile extends Component {
  componentWillUnmount() {
    this.props.removeCurrentProfile();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.getCurrentProfile(+nextProps.match.params.id);
    }

    return true;
  }

  render() {
    const { name, id, image } = this.props.currentProfile;

    return (
      <Page
        id="profile"
        title={name}
        description={`This is user profile number ${id}`}
        image={image}
      >
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>ID:</b> {id}
        </p>
        <img src={image} alt={name} style={{ width: '400px' }} />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  currentProfile: state.profile.currentProfile
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCurrentProfile, removeCurrentProfile }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(Profile)
);
