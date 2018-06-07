import React from 'react';
import Page from '../../components/page';

import logo from '../../assets/logo.jpg';

export default () => (
  <Page id="homepage">
    <p>Here's our homepage. All are welcome.</p>
    <img src={logo} alt="Homepage" style={{ width: '400px' }} />
  </Page>
);
