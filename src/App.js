import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [team, setTeam] = useState();

  const onChange = () => {

  }

  const onSumbit = () => {

  }

  return (
    <div className="App">
      <Form team={team} onChange={onchange} onSumbit={onSumbit} />
    </div>
  );
}

export default App;
