import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'hk01edb.6-Template.Text',
  // component: Button,
};

export const ProfilePic = () => (
    <>
    <h4>hi</h4>
    <img src="https://example.com/" alt="ship" />
    </>
);

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
