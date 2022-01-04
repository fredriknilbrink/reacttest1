import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Homepage from './Homepage'

const App = () => {

  const [buttonState, setbuttonState] = useState(true);
  
  const handleButtonPress = () => { setbuttonState(prev => !prev);

  }
  return (
    <Homepage buttonstate={buttonState} callback={handleButtonPress} />
  );
}

export default App;
