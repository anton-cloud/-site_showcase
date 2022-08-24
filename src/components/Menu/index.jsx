import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import * as C from "./style";

export const Menu = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <C.Menu>
      <C.Container>
        <C.Name>
          <p>
            <span>Anton</span> Sharudylo
          </p>
        </C.Name>

        <C.NavBar>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#sertifikats">Sertifikats</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </C.NavBar>

        <C.Toggle>
          {
            !visibility === true && (
              <a onClick={() => setVisibility(true)}>
                <GiHamburgerMenu />
              </a>
            )

            // <button onClick={() => setVisibility(true)}>Menu</button>
          }

          {visibility === true && (
            <ul>
              <div className="btn-close">
                <a onClick={() => setVisibility(false)}>X</a>
              </div>
              <div className="links">
                <li>
                  <a href="#home" onClick={() => setVisibility(false)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={() => setVisibility(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={() => setVisibility(false)}>
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#sertifikats" onClick={() => setVisibility(false)}>
                    Sertifikats
                  </a>
                </li>
                <li>
                  <a href="#contacts" onClick={() => setVisibility(false)}>
                    Contacts
                  </a>
                </li>
              </div>
            </ul>
          )}
        </C.Toggle>
      </C.Container>
    </C.Menu>
  );
};
