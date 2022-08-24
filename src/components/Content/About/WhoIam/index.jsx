import React from "react";
import * as C from "./style";

import MyPhoto from "../../../../assets/img/avatar.png";

export const WhoIam = () => {
  return (
    <C.WhoIam>
      <img src={MyPhoto} alt="photo Anton" />
      <h2>
        <span>Who</span> I am ?
      </h2>
      <p className="p1">
        &ensp; I have a master's degree in the field of energy. But since I was
        always interested in IT, I decided to make it my profession. I finished
        IT School GoIt courses (bootcamp) in the direction of
        <strong>Full stack developer </strong> and now I will
        <strong> focus on the front end</strong> . To date, I have commercial
        experience and continue to acquire new knowledge and skills.
      </p>

      <p className="p2">
        &ensp; For me, development, practice and work for results are important.{" "}
        <strong>
          I intend to develop as a technical specialist and bring value to
          people
        </strong>
        .
      </p>
    </C.WhoIam>
  );
};
