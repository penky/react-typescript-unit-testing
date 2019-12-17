import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from 'react-dom/test-utils';
import HelloGoodByeWorld from "./HelloGoodByeWorld";

describe('test hello world', () => {
    let container: Element;

    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = (component: JSX.Element) => ReactDOM.render(component, container);

    it('render hello world jeff', () => {
        const component = <HelloGoodByeWorld name='Jeff'/>;

        // render the component into the "container" using the ReactDOM.render method
        render(component);

        // check the values of the component created in the container
        expect(container.textContent).toMatch('Hello world, from Jeff');
        expect(container.querySelector<any>('h1').textContent).toMatch('Hello world, from Jeff');
        expect(container.querySelector<any>('h1').id).toMatch('hello-world-Jeff');

        // get the button and click it
        const button : any = container.querySelector<HTMLButtonElement>('button');
        ReactTestUtils.Simulate.click(button);

        // now check the values of the component after button clicked.
        expect(container.textContent).toMatch('Goodbye world, from Jeff');
        expect(container.querySelector<any>('h1').textContent).toMatch('Goodbye world, from Jeff');
        // id has not changed.
        expect(container.querySelector<any>('h1').id).toMatch('hello-world-Jeff');
    });
});