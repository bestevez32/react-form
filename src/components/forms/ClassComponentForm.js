import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Form,
  Row,
  Col,
  Button,
  Card,
  ButtonToolbar,
  Table
} from "react-bootstrap";

class ClassComponentForm extends Component {
  render() {
    return (
      <>
        <Form>
          <Card>
            <Card.Header>Class Component w/ Redux</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        size="sm"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        size="sm"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Group>
                    <Form.Label>Hobbies</Form.Label>
                    <Form.Control as="textarea" rows="3" size="sm" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <ButtonToolbar className="float-right">
                <Button size="sm" className="mr-2">
                  Clear Form
                </Button>
                <Button type="submit" variant="success" size="sm">
                  Save User
                </Button>
              </ButtonToolbar>
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
              <tbody></tbody>
            </Table>
          </Card.Body>
          <input onChange={this.props.onUpdateUser} />
        </Card>
      </>
    );
  }
}

export default ClassComponentForm;
