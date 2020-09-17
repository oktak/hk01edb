import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import ButtonNav from '../../components/atoms/ButtonNav';
import ContTrack from '../../components/atoms/ContTrack';


export default {
  title: 'hk01edb.4-Molecule.ContTrack',
  // component: Button,
};

export const useContTrack = () => (
  <div style={{
    "width": "400px",
  }}>
    <ContTrack>
      <ButtonNav text={"a"} />
      <ButtonNav text={"b"} level="LC" />
      <ButtonNav text={"c"} />
      <ButtonNav text={"d"} />
      <ButtonNav text={"e"} />

      <ButtonNav text={"a"} />
      <ButtonNav text={"b"} />
      <ButtonNav text={"c"} />
      <ButtonNav text={"d"} />
      <ButtonNav text={"e"} />

    </ContTrack>
  </div>
);
