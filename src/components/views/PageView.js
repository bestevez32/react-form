import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import UserCard from "../users/UserCard";
import UserList from "../users/UserList";
import FunctionalComponentForm from "../forms/FunctionalComponentForm";

function PageView() {
  return (
    <Row>
      <Col>
        <FunctionalComponentForm />
      </Col>
      <Col>
        <UserCard />
        <UserList />
      </Col>
    </Row>
  );
}

export default PageView;
