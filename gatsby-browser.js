import './src/styles/global.css';
import '@fontsource/victor-mono';

import React from 'react';
import Layout from './src/components/layout';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
