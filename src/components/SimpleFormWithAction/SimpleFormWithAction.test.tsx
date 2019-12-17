import ReactDOM from "react-dom";
import SimpleFormWithAction from "../SimpleFormWithAction/SimpleFormWithAction";
import ReactTestUtils from "react-dom/test-utils";
import React from "react";

describe('test hello world', () => {
    let container: Element;

    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = (component: JSX.Element) => ReactDOM.render(component, container);

    it('render simple form, set textbox to goodbye and click button', async() => {
        var message = '';
        const component = (<SimpleFormWithAction defaultMessage='Hello' invokeAction={ (msg) => message = msg}/>);

        render(component);

        const textBox = container.querySelector<any>('input');
        const button = container.querySelector<any>('button');
        await ReactTestUtils.Simulate.change(textBox, {target: { value:  'blah blah blah'} as any});
        await ReactTestUtils.Simulate.click(button);

        expect(message).toMatch('blah blah blah');

    });
});