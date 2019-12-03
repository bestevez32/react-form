import React from "react";
import { Row, Col } from "react-bootstrap";

import FunctionalComponentForm from "../forms/FunctionalComponentForm";
import ClassComponentForm from "../forms/ClassComponentForm";

function PageView() {
  return (
    <Row>
      <Col>
        <FunctionalComponentForm />
      </Col>
      <Col>
        <ClassComponentForm />
      </Col>
    </Row>
  );
}

export default PageView;
