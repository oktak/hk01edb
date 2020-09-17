import React from 'react';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';

import ContAction from '../../components/atoms/ContAction';

export default {
  title: 'hk01edb.3-Atom.ContAction',
  // component: Button,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const useContAction = ({ children }) => (
  <ContAction
    height={"4rem"}
  >
    <span>測試中文hihii</span>
    <span>測試中文hihii</span>
    <span>測試中文hihii</span>
    
  </ContAction>
);
