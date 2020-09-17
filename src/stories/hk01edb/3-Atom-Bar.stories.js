import React from 'react';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';

export default {
  title: 'hk01edb.3-Atom.Bar',
  // component: Button,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const barData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
  width: "33%",
};

export const BarHori = ({width, text}) => (
    <>
      <div style={{
        "width": `${width || "100%"}`,
        "height": "2em",
        "borderRadius": "8px",
        "textAlign": "center",
        "lineHeight": "2em",
        "backgroundColor": "#c0ffee",
        "color": "#666",
      }}
      >
      {
        text || "Bar"
      }
      </div>
    </>
);

export const BarThrid = () => (
  <BarHori {...barData} text={`33.3333%`} />
);
