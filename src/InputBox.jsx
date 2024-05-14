import React,{useState} from 'react';

export const InputBox = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleButtonClick = () => {
        setResponse(`You entered: ${input}`);
    };
    return (
        <>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter some text"
            />
            <button onClick={handleButtonClick}>
                Submit
            </button>
            <p>{response}</p>
        </>
    )
}
