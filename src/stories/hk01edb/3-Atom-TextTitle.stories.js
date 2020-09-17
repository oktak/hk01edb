import React from 'react';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';

import TextTitle from '../../components/atoms/TextTitle';

export default {
  title: 'hk01edb.3-Atom.TextTitle',
  // component: Button,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const useTextTitle = ({ children }) => (
  <TextTitle>
    <p>測試中文hihii</p>
  </TextTitle>
);
