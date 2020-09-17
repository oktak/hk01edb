import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import ProfileCard from '../../components/molecules/ProfileCard';
import ContTrack from '../../components/atoms/ContTrack';

export default {
  title: 'hk01edb.5-Organism.CandidatesList',
  // component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const CandidatesList = () => (
  <div
    style={{
      "width": "360px",
      "height": "80vh",
      "overflow": "auto",
    }}
  >
    <ContTrack
      flexType={"inline-flex"}
    >
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
        <p>2222</p>
      </ProfileCard>

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
        <p>333</p>
      </ProfileCard>
    </ContTrack>
  </div>
);
