import React from "react";

interface HelloWorldProps {
    name: string
}

const HelloWorld: React.FC<HelloWorldProps> = (props) => {
    return (
        <div>
            <h1 id={"hello-world-"+props.name}>Hello world, from {props.name}</h1>
        </div>);
};

export default HelloWorld;
