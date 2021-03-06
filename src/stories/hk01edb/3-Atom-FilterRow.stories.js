import React from 'react';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';

import FilterRow from '../../components/atoms/FilterRow';

export default {
  title: 'hk01edb.3-Atom.FilterRow',
  // component: Button,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const useFilterRow = ({ children }) => (
  <FilterRow />
);
