import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

const UsersList = props => {
  return (
    <ListGroup>
      {props.users.map( (user,index) => {
        return (
          <ListGroup.Item key={user.id+index}>{user.username} ({user.age} years old)</ListGroup.Item>
        )
      })}
    </ListGroup>
  );
};

export default UsersList;