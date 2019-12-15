import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld";

describe('test hello world', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = component => ReactDOM.render(component, container);

    it('render hello world jeff', () => {
        const component = <HelloWorld name='Jeff'/>;

        render(component);

        expect(container.textContent).toMatch('Hello world, from Jeff');
        expect(container.querySelector('h1').textContent).toMatch('Hello world, from Jeff')
        expect(container.querySelector('h1').id).toMatch('hello-world-Jeff');
        //expect(container.querySelector('h1'));
    })
});