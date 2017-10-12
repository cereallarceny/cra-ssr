import React from 'react';
import Page from '../../components/page';
import { Link } from 'react-router-dom';

export default () => (
  <Page title="Page Not Found" noCrawl id="not-found">
    <h1>Page can't be found...</h1>
    <Link to="/">Go home?</Link>
  </Page>
);
