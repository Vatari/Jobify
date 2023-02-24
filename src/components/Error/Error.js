import { Link } from "react-router-dom";
import img from "../../assets/images/not-found.svg";
import Wrapper from "../Error/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not-found" />
        <h3>Няма такава страница!</h3>
        <p>Страницата, която търсите не може да бъде намерена</p>
        <Link to="/">Върни се към началната страница</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
