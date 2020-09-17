import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import { injectIntl, IntlContextConsumer, Link } from "gatsby-plugin-intl"
import ContChart from '../../components/atoms/ContChart';
import FilterRow from '../../components/atoms/FilterRow';
import Header from '../../components/organisms/Header';
// import Footer from '../../components/organisms/Footer';

export default {
  title: 'hk01edb.6-Template.UpperAndBottom',
  // component: Button,
};

export const UpperAndBottom = () => (
    <div style={{
      "height": "100%",
      "display": "flex",
      "flexDirection": "column",
    }}>
      <div className="upper" style={{
        "height": "50%"
      }}>
        <ContChart>
          Chart
        </ContChart>
      </div>
      <div className="lower" style={{
        "height": "50%",
        "display": "flex",
        "flexDirection": "column-reverse",
        "justifyContent": "end",
      }}>
        <FilterRow>row1</FilterRow>
        <FilterRow>row2</FilterRow>
        <FilterRow>row3</FilterRow>
      </div>
    </div>
);


export const UseUpperAndBottom = () => (
  <div style={{
    "height": "100vh"
  }}
  >
    <UpperAndBottom />
  </div>
)


export const FullPage = () => (
  <div style={{
    "height": "100vh",
    "display": "flex",
    "flexDirection": "column",
  }}
  >
    {/* <IntlContextConsumer>
    {({ languages, language: currentLocale }) => ( */}
      <>
        <Header style={{
          "height": "65px"
        }} intl={{
          "formatMessage": () => {}
        }}/>

        <UpperAndBottom />

        {/* <Footer style={{
          "height": "45px"
        }} /> */}
      </>
    )}
    {/* </IntlContextConsumer> */}
  </div>
)
