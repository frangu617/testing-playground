import './App.css'
import {useState} from 'react';

function App() {
  const [btnColor, setBtnColor] = useState('blue')
  const newBtnColor = btnColor === 'green' ? 'blue' : 'green'
  const [inputDisabled, setInputDisabled] = useState(false)
  const [inputValue, setInputValue] = useState('Enabled')
  const newInputValue =inputValue === 'Enabled' ? 'Disabled' : 'Enabled'


  //added this per chatGPT suggestion
  const handleCheckboxChange = (event) => {
    const isDisabled = event.target.checked;
    setInputDisabled(isDisabled);
    setInputValue(isDisabled ? 'Disabled' : 'Enabled');
  }

  return (
    <div className="App">
      <h1>Testing Playground</h1>
      <p>Button is {inputValue}</p>
      <button
      style={{backgroundColor: btnColor}}
      onClick= {() => setBtnColor(newBtnColor)}
      disabled={inputDisabled}
      >
        Change to {newBtnColor}
        </button>
        <input
        type="checkbox"
        defaultChecked={inputDisabled}
        onChange = {handleCheckboxChange}    //this is where the change happens    
        />
    </div>
  );
}

export default App;
