import React from "react";
import * as C from "./style";
import VetorContato from "../../../assets/img/Vetor-Contato.png";

import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";

export const Contacts = () => {
  return (
    <C.Contacts id="contacts">
      <C.Container>
        <C.Image>
          <img src={VetorContato} alt="conact_image" />
        </C.Image>

        <C.Info>
          <div className="container">
            <h2>Contacts</h2>
            <div className="data">
              <div className="phone">{/* <p>+38</p> */}</div>
              <div className="email">
                <p>a.sharudylo@gmail.com</p>
              </div>
            </div>
            <div className="icos-redes">
              <a href="https://github.com/anton-cloud" target={"_blanck"}>
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/anton-sharudylo-196093194/"
                target={"_blanck"}
              >
                <AiFillLinkedin />
              </a>
              <a href="https://telegram.im/@anton_sh94" target={"_blanck"}>
                <SiTelegram />
              </a>
            </div>
          </div>
        </C.Info>
      </C.Container>
    </C.Contacts>
  );
};
