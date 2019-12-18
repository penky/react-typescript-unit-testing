import React from "react";

interface HelloWorldProps {
    name: string
}


const AxoisInvokingButton: React.FC<HelloWorldProps> = (props) => {
    return (
        <div>
            <h1>Hello world, from {props.name}</h1>
            <button onClick={() => {}}>push me</button>
        </div>);
};

export default AxoisInvokingButton;