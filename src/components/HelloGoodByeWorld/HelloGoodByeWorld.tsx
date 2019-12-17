import React, {useState} from "react";

interface HelloWorldProps {
    name: string
}

const HelloGoodByeWorld: React.FC<HelloWorldProps> = (props) => {
    const [buttonPushed,pushButton] = useState(false);
    let h1 : JSX.Element;
    if (!buttonPushed) {
        h1 = <h1 id={"hello-world-"+props.name}>Hello world, from {props.name}</h1>
    } else {
        h1 = <h1 id={"hello-world-"+props.name}>Goodbye world, from {props.name}</h1>
    }
    return (
        <div>
            {h1}
            <button onClick={() => pushButton(true)}>goodbye</button>
        </div>);
};

export default HelloGoodByeWorld;
