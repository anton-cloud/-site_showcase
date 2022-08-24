import React from "react";
import * as C from "./style";
import FS from "../../../assets/img/documents/FS_Anton_Sharudylo.webp";
import GL from "../../../assets/img/documents/GL.webp";

export const Sertifikats = () => {
  return (
    <C.Sertifikats id="sertifikats">
      <C.Container>
        <C.Image>
          <img src={FS} alt="conact_image" />
        </C.Image>
        <C.Image>
          <img src={GL} alt="conact_image" />
        </C.Image>
      </C.Container>
    </C.Sertifikats>
  );
};
