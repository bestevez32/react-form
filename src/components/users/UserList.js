import React from "react";
import {
  Card,
  Table,
  Button,
  ButtonGroup,
  ButtonToolbar
} from "react-bootstrap";

function UserList() {
  return (
    <Card className="mt-3">
      <Card.Header>Users List</Card.Header>
      <Card.Body>
        <Table size="sm">
          <thead style={{ fontWeight: "normal" }}>
            <tr>
              <th>User Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Brandon Estevez
                <ButtonToolbar className="float-right">
                  <Button variant="secondary" size="sm" className="mr-2">
                    View User
                  </Button>
                  <Button variant="danger" size="sm">
                    Remove User
                  </Button>
                </ButtonToolbar>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default UserList;
