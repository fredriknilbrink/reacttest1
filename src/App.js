import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import Homepage from './Components/Homepage'


const App = () => {

  const [buttonState, setbuttonState] = useState(true);
  
  const handleButtonPress = () => { setbuttonState(prev => !prev);

  }
  return (

    
    <main>
      <Homepage buttonstate={buttonState} callback={handleButtonPress} />
     
    </main>
    
    
  );
}

export default App;
