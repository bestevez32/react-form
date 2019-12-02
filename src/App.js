import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import PageView from "./components/views/PageView";

function App() {
  return (
    <Container className="mt-5">
      <PageView />
    </Container>
  );
}

export default App;
