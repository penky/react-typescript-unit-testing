import React, {useState} from "react";


interface SimpleFormProps {
    formTitle: string,
    defaultMessage: string
}

const SimpleForm: React.FC<SimpleFormProps> = (props) => {

    const [ message , setMessage] = useState(props.defaultMessage);
    const [ inputMessage , setInputMessage] = useState("");

    return (
        <div>
            <h1 id={"hello-world-"+props.formTitle}>{props.formTitle}</h1>
            <p>The text to be displayed is {message}</p>
            <input type="text" name="myTextBox" id="myTextBoxId" onChange={(element) => setInputMessage(element.target.value)} />
            <button onClick={() => setMessage(inputMessage)}>update</button>
        </div>);
};

export default SimpleForm;