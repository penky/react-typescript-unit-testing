import React from 'react';
import { linkTo } from '@storybook/addon-links';
import SimpleForm from '../src/components/SimpleForm/SimpleForm';

export default {
    title: '2-SimpleForm',
};

export const simpleForm = () => <SimpleForm defaultMessage='hello' formTitle="enter name"/>;
