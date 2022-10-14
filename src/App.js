
import { useState } from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import FormComponent from './components/form/FormComponent';
import { AddUser, UpdateUser } from "./utils/functions";
// import FormComponent from './components/form/FormComponent';

const initialValues = {username:"",phoneNumber:"",gender:""}
function App() {
  const [info, setInfo] = useState(initialValues);
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(info.id){
     UpdateUser(info)
    }
    else{
      AddUser(info)
    }
    setInfo(initialValues)
  }
  const editUser = (id,username,phoneNumber,gender)=>{
      setInfo({id,username,phoneNumber,gender})
  }
  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleSubmit={handleSubmit}/>
      <Contacts editUser = {editUser}/>
    </div>
  );
}

export default App;
