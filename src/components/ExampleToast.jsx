import React, { useState } from "react";

import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export default function ExampleToast({ children }) {
  const [show, toggleShow] = useState(false);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>維護中</Button>}
      <Toast show={show} onClose={() => toggleShow(false)} className="mx-auto">
        <Toast.Header>
          <strong className="mr-auto">系統提醒</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
}

ExampleToast.propTypes = {
  children: PropTypes.object,
};
