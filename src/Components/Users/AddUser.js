import React, {useState} from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorMessage from "../Modal/ErrorMessage";



const AddUser = (props) => {
  const [username, setUsername ] = useState(``);
  const [age, setAge ] = useState(``);
  const [modalShow, setModalShow] = useState(false);
  const [isError, setIsError] = useState(true);
  const [errorText, setErrorText] = useState(``);

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(age);
    if(username.trim().length === 0 || age.trim().length === 0) {
      setIsError(true);
      setErrorText(`Username and age are required fields`);
      return;
    }
    if(+age < 1) {
      setIsError(true);
      console.log(`age is invalid`);
      setErrorText(`Age must be greater than 1`);
      return;
    }
    setIsError(false);
    props.onAddUser(username,age);
    setUsername(``);
    setAge(``);
    
  }

  const addUsernameHandler = (event) => {
    const {value} = event.target;
    setUsername(value);
  }

  const addAgeHandler = (event) => {
    const {value} = event.target;
    setAge(value);
  }

  return (
    <Form className="d-flex-column p-4" onSubmit={addUserHandler}>
    <Form.Group className="mb-3" controlId="formUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Enter Username" onChange={addUsernameHandler} value={username}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formAge">
      <Form.Label>Age</Form.Label>
      <Form.Control type="number" placeholder="Enter Age" onChange={addAgeHandler} value={age} />
    </Form.Group>
    {(isError) &&
    <>
      <Button variant="primary" type="submit" onClick={() => setModalShow(true)}>
        Add User
      </Button>
      <ErrorMessage
      show={modalShow}
      onHide={() => setModalShow(false)}
      text = {errorText}
      />
    </>
    }
    {!isError && 
    <Button variant="primary" type="submit" onClick={addUserHandler}>
      Add User
    </Button>}

  </Form>
  )
};

export default AddUser;