import React from 'react';
import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import { AddCircle, Cancel } from '@material-ui/icons';

import Button from '@material-ui/core/Button';
import ContAction from '../../components/atoms/ContAction';
import ButtonIcon from '../../components/atoms/ButtonIcon';
import ButtonNav from '../../components/atoms/ButtonNav';
import ContTrack from '../../components/atoms/ContTrack';

export default {
  title: 'hk01edb.4-Molecule.ContAction',
  // component: Button,
};

export const useProfileSelect = () => (
  <div style={{
    "width": "400px",
  }}>
    <ContAction
      height={"50vh"}
      direction={"column"}
      justifyContent={"center"}
    >
      <p>select:</p>

      <ButtonIcon
        size={"24px"}
        onClick={action("Close Popup")}
      >
        <AddCircle />
      </ButtonIcon>
    </ContAction>
  </div>
);

export const useMultiTract = () => (
  <div style={{
    "width": "360px",
    "position": "relative",
  }}>
    <div style={{
      "position": "absolute",
      "top": "0",
      "right": "0",
    }}>
      <ButtonIcon
        size={"24px"}
        onClick={action("Add")}
      >
        <Cancel />
      </ButtonIcon>
    </div>

    <ContAction
      height={"80vh"}
      direction={"column"}
      justifyContent={"end"}
    >
      <p>Descrptions: xxx</p>

      <div style={{
        "width": "100%",
        "overflow": "hidden",
        "display": "flex",
        "flexDirection": "column-reverse",
      }}>
        <ContTrack>
          <ButtonNav text={"lv1a"} />
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

        <ContTrack>
          <ButtonNav text={"lv2a"} />
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

        <ContTrack>
          <ButtonNav text={"lv3a"} />
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

      <Button
        variant="contained" color="primary"
        onClick={action("Submit")}
      >
        Select
      </Button>
    </ContAction>
  </div>
);
