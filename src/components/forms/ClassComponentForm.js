import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Card,
  ButtonToolbar,
  Table,
  Alert
} from "react-bootstrap";

export default function ClassComponentForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [users, setUser] = useState([]);
  const [userSubmit, setUserSubmit] = useState(false);

  console.log(users);

  const handleSubmit = event => {
    event.preventDefault();
    setUserSubmit(true);
    setTimeout(function() {
      setUser([...users, { first: firstName, last: lastName, hobby: hobbies }]);
      resetForm();
      setUserSubmit(false);
    }, 3000);
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setHobbies("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Card>
          <Card.Header>Class Component w/ Redux User Inputs</Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={firstName}
                      onChange={first => setFirstName(first.target.value)}
                      placeholder="First Name"
                      size="sm"
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={lastName}
                      onChange={last => setLastName(last.target.value)}
                      placeholder="Last Name"
                      size="sm"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Group>
                  <Form.Label>Hobbies</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    value={hobbies}
                    onChange={hobby => setHobbies(hobby.target.value)}
                    size="sm"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            {!userSubmit ? (
              <ButtonToolbar className="float-right">
                <Button size="sm" className="mr-2" onClick={resetForm}>
                  Clear Form
                </Button>
                <Button type="submit" variant="success" size="sm">
                  Save User
                </Button>
              </ButtonToolbar>
            ) : (
              <Alert variant="primary" size="sm">
                The user is being submitted
              </Alert>
            )}
          </Card.Footer>
        </Card>
      </Form>
      <Card className="mt-3">
        <Card.Header>Users List</Card.Header>
        <Card.Body>
          <Table size="sm">
            <thead style={{ fontWeight: "normal" }}>
              <tr>
                <th>User Name</th>
                <th>Hobbies Include</th>
              </tr>
            </thead>
            <tbody>
              {users
                ? users.map(user => (
                    <tr key={user.last}>
                      <td>{`${user.first} ${user.last}`}</td>
                      <td>{user.hobby}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}
