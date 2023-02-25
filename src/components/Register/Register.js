import { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Logo, FormRow } from "../../components";
import { loginUser, registerUser } from "../../features/user/userSlice";
import { store } from "../../strore";
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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      toast.error("Моля попълнете всички полета");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Вход" : "Регистрация"}</h3>

        {/* Ако потребителя не е регистриран, тогава се появява полето за вход */}

        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
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
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button className="btn btn-block" type="submit">
          Регистрирай ме
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
