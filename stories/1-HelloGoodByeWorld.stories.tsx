import React from 'react';
import { action } from '@storybook/addon-actions';
import HelloGoodByeWorld from '../src/components/HelloGoodByeWorld/HelloGoodByeWorld';

export default {
  title: '1-HelloGoodByeWorld',
};

export const jeff = () => <HelloGoodByeWorld name='jeff'></HelloGoodByeWorld>;

export const jeffsx2 = () => (<div><HelloGoodByeWorld name='jeff'/><HelloGoodByeWorld name='jeff'/></div>);

jeff.story = {
  name: "Hello Goodbye World Jeff"
};

jeffsx2.story = {
  name: "Hello Goodbye World two Jeffs"
};