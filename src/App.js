import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Member from './components/Member';

const initialMemberValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [team, setTeam] = useState([]);
  const [member, setMember] = useState(initialMemberValues);

  const changeForm = (inputName, inputValue) => {
    setMember({ ...member, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newMember = {
      name: member.name.trim(),
      email: member.email.trim(),
      role: member.role
    }

    setTeam([newMember, ...team]);
    setMember(initialMemberValues);
  }

  return (
    <div className="App">
      <Form member={member} changeForm={changeForm} submitForm={submitForm} />
      {team.map((member, index) => (
        <Member key={index} member={member}/>
      ))}
    </div>
  );
}

export default App;
