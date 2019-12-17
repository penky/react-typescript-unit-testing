import React from 'react';
import { action } from '@storybook/addon-actions';
import SimpleFormWithAction from '../src/components/SimpleFormWithAction/SimpleFormWithAction';
export default {
    title: '3-SimpleFormWithActions',
};
export const simpleFormWithAction = () => <SimpleFormWithAction defaultMessage='hello' invokeAction={action('clicked')}/>;


