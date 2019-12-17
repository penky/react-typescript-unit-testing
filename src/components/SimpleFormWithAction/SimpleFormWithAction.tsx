import React, {useState} from "react";


interface SimpleFormWithActionProps {
    defaultMessage: string,
    invokeAction(msg : string) : void
}

const SimpleFormWithAction: React.FC<SimpleFormWithActionProps> = (props) => {

    const [ message , setMessage] = useState(props.defaultMessage);

    return (
        <div>
            <h1 id="simple form">SimpleFormWithAction</h1>
            <p>The text in the action will be {message}</p>
            <input type="text" name="myTextBox" id="myTextBoxId" onChange={(element) => setMessage(element.target.value)} />
            <button onClick={() => {console.log('invoked action'+message);props.invokeAction(message)}}>update</button>
        </div>);
};

export default SimpleFormWithAction;