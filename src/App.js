import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import Homepage from './Components/Homepage'
import MyMap from './Components/MyMap'
import Output from './Components/Output'


const App = () => {


  
  const [buttonState, setbuttonState] = useState(true);
  
  const handleButtonPress = () => { setbuttonState(prev => !prev);

  }
  return (

    
    <main>
      <Output></Output>
      <MyMap />
      //<Homepage buttonstate={buttonState} callback={handleButtonPress}></Homepage>
    </main>
    
    
  );
}

export default App;
