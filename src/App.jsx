import React from "react";
import Container from "react-bootstrap/Container";

import ExampleToast from "./components/ExampleToast";

export default function App() {
  return (
    <Container className="p-3 text-center">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header mb-5">Fuseita 浮砂塔</h1>
        <ExampleToast>
          我們絕不坑殺拐賣顧客的 應該
          <span role="img" aria-label="tada">
            🎉
          </span>
        </ExampleToast>
      </Container>
    </Container>
  );
}
