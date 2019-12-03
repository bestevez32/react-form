import React from "react";
import { Row, Col } from "react-bootstrap";

import FunctionalComponentForm from "../forms/FunctionalComponentForm";
import ClassComponentForm from "../forms/ClassComponentForm";

function PageView() {
  return (
    <Row>
      <Col className="p-2 m-2" style={{ backgroundColor: "black" }}>
        <FunctionalComponentForm />
      </Col>
      <Col className="p-2 m-2" style={{ backgroundColor: "green" }}>
        <ClassComponentForm />
      </Col>
    </Row>
  );
}

export default PageView;
