import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Logo, FormRow } from "../../components";
import { loginUser, registerUser } from "../../features/user/userSlice";
import Wrapper from "./RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: "",
};

function Register() {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, lastName, location, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name && !lastName && !location)) {
      toast.error("Моля попълнете всички полета");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ name, email, lastName, location, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 0.3);
    }
  }, [user, navigate]);
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Вход" : "Регистрация"}</h3>

        {/* Ако потребителя не е регистриран, тогава се появява полето за вход */}

        {!values.isMember && (
          <FormRow
            type="text"
            labelText="Име"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {!values.isMember && (
          <FormRow
            type="text"
            labelText="Фамилия"
            name="lastName"
            value={values.lastName}
            handleChange={handleChange}
          />
        )}
        {!values.isMember && (
          <FormRow
            type="text"
            labelText="Град"
            name="location"
            value={values.location}
            handleChange={handleChange}
          />
        )}

        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />

        <FormRow
          type="password"
          labelText="Парола"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button className="btn btn-block " disabled={isLoading} type="submit">
          {!values.isMember ? "Продължи" : "Вход"}
          {/* {isLoading ? "Зареждане..." : null} Това трябва да го оправя... */}
        </button>
        <button
          className="btn btn-block btn-hipster "
          disabled={isLoading}
          type="button"
          onClick={() => {
            dispatch(
              loginUser({ email: "demo@demo.demo", password: "demouser" })
            );
          }}
        >
          {" "}
          {isLoading ? "Зареждане..." : "Демо"}
        </button>
        <p>
          {values.isMember ? "Нямам регистрация" : "Вече имаш регистрация?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Регистрирай се" : "Вход"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
