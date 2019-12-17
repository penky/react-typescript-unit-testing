import React from 'react';
import { linkTo } from '@storybook/addon-links';
import HelloWorld from '../src/components/HelloWorld/HelloWorld';

export default {
  title: '0-HelloWorld',
};

export const helloWorld = () => <HelloWorld name='jeff'/>;

helloWorld.story = {
  name: 'Hello world Storybook',
};
