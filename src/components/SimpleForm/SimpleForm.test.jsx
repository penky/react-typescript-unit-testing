import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from 'react-dom/test-utils';
import SimpleForm from "./SimpleForm";

describe('test hello world', () => {
    let container: Element;

    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = (component: JSX.Element) => ReactDOM.render(component, container);

    it('render simple form, set textbox to goodbye and click button', async() => {
        const component = (<SimpleForm formTitle='The Title' defaultMessage='Hello'/>);

        render(component);

        expect(container.querySelector('h1').textContent).toMatch('The Title');
        expect(container.querySelector('p').textContent).toMatch('The text to be displayed is Hello');
        const textBox = container.querySelector('input');
        const button = container.querySelector('button');

        await ReactTestUtils.Simulate.change(textBox, {target: { value: 'Goodbye'}});
        await ReactTestUtils.Simulate.click(button);

        expect(container.querySelector('p').textContent).toMatch('The text to be displayed is Goodbye');

    });
});