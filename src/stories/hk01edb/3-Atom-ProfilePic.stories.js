import React from 'react';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';

import ProfilePic from '../../components/atoms/ProfilePic';

export default {
  title: 'hk01edb.3-Atom.ProfilePic',
  // component: Button,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const useProfilePic = ({ children }) => (
  <ProfilePic
    imgPath={'./images/gatsby-astronaut.png'}
    contWidth={'100px'}
    contHeight={'100px'}
    width={'100px'}
    height={'100px'}
  />
);
