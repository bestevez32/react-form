import React from "react";
import { Card, Button } from "react-bootstrap";

function UserCard() {
  return (
    <Card>
      <Card.Header>User Preview </Card.Header>
      <Card.Body>
        <div>User Name: Test Name 1</div>
        <div>User Hobbies: Boating, Archery, Lacross, Tennis</div>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
