import './App.css'
import {InputBox} from "./InputBox.jsx";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        fetch('http://localhost:8080/dad-jokes')
            .then(response => response.json())
            .then(data => {
                // Handle the response data
                console.log(data);
            })
            .catch(error => {
                // Handle any errors
                console.error('Error: ', error);
            });
    }, []);

  return (
    <>
      <div>
          <p> Hello World</p>
          <InputBox></InputBox>
      </div>
    </>
  )
}

export default App
