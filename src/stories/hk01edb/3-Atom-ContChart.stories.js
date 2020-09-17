import React from 'react';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';

import ContChart from '../../components/atoms/ContChart';

export default {
  title: 'hk01edb.3-Atom.ContChart',
  // component: Button,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const useContChart = ({ children }) => (
  <ContChart />
);
