import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import User from "./User";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    { email: "foulen@gmail.com", phone: "54900777" },
    { email: "allem@gmail.com", phone: "549880777" },
  ]);
  const [user, setUser] = useState({ email: "", phone: "" });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([...users, user]);
    setUser({ email: "", phone: "" });
  };

  /*   const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    count > 0 && setCount(count - 1);
  }; */
  /*  useEffect(() => {
    console.log("welcome foulen");
  }, [count]); */
  return (
    <div style={{ textAlign: "center" }}>
      <Form style={{ marginLeft: "auto" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={user.email}
            onChange={handleChange}
            name="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="phoneNumber"
            value={user.phone}
            onChange={handleChange}
            name="phone"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div
        style={{
          marginLeft: "200px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {users.map((elt, index) => (
          <User key={index} user={elt} />
        ))}
      </div>
    </div>
  );
}

export default App;
