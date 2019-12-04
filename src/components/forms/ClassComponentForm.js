import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUsers } from "../../actions/usersActions";

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

class ClassComponentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: false };
    this.onUpdateUsers = this.onUpdateUsers.bind(this);
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  onUpdateUsers(event) {
    event.preventDefault();
    const first = this.refs.first.value;
    const last = this.refs.last.value;
    const hobby = this.refs.hobby.value;
    this.setState({ mode: true });
    setTimeout(
      function() {
        this.props.onUpdateUsers(first, last, hobby);
        this.resetForm();
        this.setState({ mode: false });
      }.bind(this),
      3000
    );
  }

  resetForm = () => {
    this.refs.first.value = "";
    this.refs.last.value = "";
    this.refs.hobby.value = "";
  };

  render() {
    console.log(this.props);
    return (
      <>
        <Form onSubmit={this.onUpdateUsers}>
          <Card>
            <Card.Header>Class Component w/ Redux</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        ref="first"
                        type="text"
                        placeholder="First Name"
                        size="sm"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        ref="last"
                        type="text"
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
                      size="sm"
                      ref="hobby"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              {!this.state.mode ? (
                <ButtonToolbar className="float-right">
                  <Button size="sm" className="mr-2" onClick={this.resetForm}>
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
                {this.props.users
                  ? this.props.users.map(user => (
                      <tr key={user.last}>
                        <td>{`${user.firstName} ${user.lastName}`}</td>
                        <td>{user.hobbies}</td>
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
}

const mapStateToProps = state => ({
  users: state.users
});

const mapActionsToProps = {
  onUpdateUsers: updateUsers
};

export default connect(mapStateToProps, mapActionsToProps)(ClassComponentForm);
