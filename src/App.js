import React from 'react';
import './App.css';
import Weather from './components/Weather'
import Form from './components/Form'
import Title from './components/Title'


function App() {
  return (
    <div>
      <Title/>
       <Weather/>
       <Form/>
    </div>
  );
}

export default App
