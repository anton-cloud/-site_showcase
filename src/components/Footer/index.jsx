import React from "react";
import * as C from "./style";

export const Footer = () => {
  return (
    <C.Footer>
      <C.Container>
        <p>
          by{" "}
          <a href="https://telegram.im/@anton_sh94" target={"_blanck"}>
            Anton Sharudylo
          </a>
        </p>
      </C.Container>
    </C.Footer>
  );
};
