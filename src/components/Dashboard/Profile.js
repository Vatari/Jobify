import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { FormRow } from "..";
import Wrapper from "./ProfileWrapper";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    location: user?.location || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !userData.name ||
      !userData.email ||
      !userData.lastName ||
      !userData.location
    ) {
      toast.error("Моля попълнете всички полета");
      return;
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Профил</h3>
        <div className="form-center">
          <FormRow
            type="text"
            labelText="Име"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            labelText="Фамилия"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            labelText="Град"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button className="btn btn-lock" type="submit" disabled={isLoading}>
            {isLoading ? "Заявката се обработва..." : "Запиши промените"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
