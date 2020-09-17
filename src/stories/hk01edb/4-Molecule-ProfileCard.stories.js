import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';


import ProfileCard from '../../components/molecules/ProfileCard';


export default {
  title: 'hk01edb.4-Molecule.ProfileCard',
  // component: Button,
};

export const useProfileCard = () => (
  <div style={{
    "width": "400px",
  }}>
    <ProfileCard
      imgPath={'./images/gatsby-astronaut.png'}
      altText={'1'}
      title={'2'}
      contWidth={'200px'}
      contHeight={'400px'}
      imgContWidth={'100px'}
      imgContHeight={'100px'}
      width={'100px'}
      height={'100px'}
      TtitleChildren={<p>hi</p>}
    >
      <p>lolololol</p>
    </ProfileCard>
  </div>
);
