import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld";

describe('test hello world', () => {
    let container: Element;

    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = (component: JSX.Element) => ReactDOM.render(component, container);

    it('render hello world jeff', () => {
        const component = <HelloWorld name='Jeff'/>;

        render(component);

        expect(container.textContent).toMatch('Hello world, from Jeff');
        // @ts-ignore
        expect(container.querySelector('h1').textContent).toMatch('Hello world, from Jeff')
        // @ts-ignore
        expect(container.querySelector('h1').id).toMatch('hello-world-Jeff');
        //expect(container.querySelector('h1'));
    });

    it('render hello worlds jeff, peter', () => {
        const component = <ol><HelloWorld name='Jeff'/><HelloWorld name='Peter'/></ol>;

        render(component);

        // @ts-ignore
        expect(container.querySelector('ol').children).toHaveLength(2);
        // @ts-ignore
        expect(container.querySelectorAll('ol > div > h1')[0].textContent).toMatch('Hello world, from Jeff');
        // @ts-ignore
        expect(container.querySelectorAll('ol > div > h1')[0].id).toMatch('hello-world-Jeff');
        // @ts-ignore
        expect(container.querySelectorAll('ol > div > h1')[1].textContent).toMatch('Hello world, from Peter');
        // @ts-ignore
        expect(container.querySelectorAll('ol > div > h1')[1].id).toMatch('hello-world-Peter');

    })
});