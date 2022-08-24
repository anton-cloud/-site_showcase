import React from "react";
import * as C from "./style";
import VetorHome from "../../../assets/img/Tag-Developer.png";

import Resume from "../../../assets/documents/anton_sharudylo.pdf";

export const Home = () => {
  return (
    <C.Home id="home">
      <C.Container>
        <C.Info>
          <p className="hello">Hi, my name is</p>
          <h1>
            Anton <span>Sharudylo</span>
          </h1>
          <p className="dev">Developer Front-end</p>

          <div className="buttons">
            <a href="#projects" className="btn-project">
              Projects
            </a>
            <a
              href={Resume}
              className="btn-cv"
              target="_blank"
              rel="noreferrer"
            >
              show CV
            </a>
          </div>
        </C.Info>

        <C.Image>
          <img src={VetorHome} alt="vector" />
        </C.Image>
      </C.Container>
    </C.Home>
  );
};
