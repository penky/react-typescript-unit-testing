import React, {SyntheticEvent} from "react";
import ReactDOM from "react-dom";
import ReactTestUtils, {SyntheticEventData} from 'react-dom/test-utils';
import SimpleForm from "./SimpleForm";

describe('test hello world', () => {
    let container: Element;

    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = (component: JSX.Element) => ReactDOM.render(component, container);

    test('render simple form, set textbox to goodbye and click button', async() => {
        const component = (<SimpleForm formTitle='The Title' defaultMessage='Hello'/>);

        render(component);

        expect(container.querySelector<any>('h1').textContent).toMatch('The Title');
        expect(container.querySelector<any>('p').textContent).toMatch('The text to be displayed is Hello');
        const textBox = container.querySelector<any>('input');
        const button = container.querySelector<any>('button');

        await ReactTestUtils.Simulate.change(textBox, {target: { value:  'Goodbye'} as any});
        await ReactTestUtils.Simulate.click(button);

        expect(container.querySelector<any>('p').textContent).toMatch('The text to be displayed is Goodbye');

    });
});