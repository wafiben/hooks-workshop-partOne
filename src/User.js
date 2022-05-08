import React from "react";
import { Card ,Button} from "react-bootstrap";
function User({user}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{user.email}</Card.Title>
        <Card.Text>
         {user.phone}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default User;
