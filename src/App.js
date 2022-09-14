import React, {useState} from 'react';
import AddUser from "./Components/Users/AddUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersList from './Components/Users/UsersList';


function App() {
  const [usersData, setUsersData] = useState([]);

  const onAddUserHandler = (uName, uAge) => {
    setUsersData((previousUsersList) => {
      return [...previousUsersList, {id: Math.random().toString(), username: uName, age: uAge}];
    });
  };



  return (
    <div className='container bg-secondary w-50 mt-5 p-2'>
      <AddUser onAddUser={onAddUserHandler}/>
      <UsersList users={usersData}/>
    </div>

  );
}

export default App;
