import React from "react";
import Container from "react-bootstrap/Container";

import ExampleToast from "./components/ExampleToast";

export default function App() {
  return (
    <Container className="p-3 text-center">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header mb-5">Ugatto 家教網</h1>
        <ExampleToast>
          Fuseita 浮砂塔 精緻出品
          <span role="img" aria-label="tada">
            🎉
          </span>
        </ExampleToast>
      </Container>
    </Container>
  );
}
