import React from 'react';
import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import { AccessAlarm, AddCircle } from '@material-ui/icons';

import ButtonNav from '../../components/atoms/ButtonNav';
import ButtonIcon from '../../components/atoms/ButtonIcon';

export default {
  title: 'hk01edb.3-Atom.ButtonNav',
  // component: Button,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const UseButtonNav = () => (
  <ButtonNav />
);

export const UseButtonIcon = () => (
  <>
    <ButtonIcon
      size={"24px"}
      onClick={action("clicked Button Icon")}
    >
      <AccessAlarm />
    </ButtonIcon>

    <ButtonIcon
      size={"24px"}
      onClick={action("Add")}
    >
      <AddCircle />
    </ButtonIcon>
  </>
);

