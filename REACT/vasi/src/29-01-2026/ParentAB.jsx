import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function ParentAB() {
  const [message, setMessage] = useState("");

  return (
    <>
      <ChildA s={setMessage} />
      <ChildB m={message} />
    </>
  );
}

export default ParentAB;
