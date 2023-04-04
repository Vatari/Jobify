import React from "react";
import { Link } from "react-router-dom";

import main from "../../assets/images/jobs.png";
import { Logo } from "../../components";
import Wrapper from "./LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Никога не губете представа за позиция, от която се интересувате или
            вече сте кандидатствали, и наблюдавайте текущото състояние на
            всичките си кандидатури с един поглед. Организирайте и следвайте
            кандидатурите си за работа
          </p>
          <Link to="/register" className="btn btn-hero">
            Вход / Регистрация
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
