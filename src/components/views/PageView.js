import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import UserCard from "../users/UserCard";
import UserList from "../users/UserList";
import SimpleForm from "../forms/SimpleForm";

function PageView() {
  return (
    <Row>
      <Col>
        <SimpleForm />
      </Col>
      <Col>
        <UserCard />
        <UserList />
      </Col>
    </Row>
  );
}

export default PageView;
