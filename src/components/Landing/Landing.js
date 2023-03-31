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
            Публикувайте вашата обява за работа при нас, за да имате достъп до
            постоянен набор от кандидати, които са нетърпеливи да поемат роли на
            начално ниво и да започнат кариерата си.
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
