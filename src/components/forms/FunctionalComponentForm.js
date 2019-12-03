import React from "react";
import { Form, Row, Col, Button, Card, ButtonToolbar } from "react-bootstrap";

function FunctionalComponentForm() {
  return (
    <Card>
      <Card.Header>User Inputs</Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Form>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="First Name"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Last Name"
                    size="sm"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Label>Hobbies</Form.Label>
                <Form.Control as="textarea" rows="3" size="sm" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <ButtonToolbar className="float-right">
          <Button size="sm" className="mr-2">
            Clear Form
          </Button>
          <Button variant="success" size="sm">
            Save User
          </Button>
        </ButtonToolbar>
      </Card.Footer>
    </Card>
  );
}

export default FunctionalComponentForm;
