import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Wrapper from "./NavbarWrapper";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { Logo } from "../../components";
import { logoutUser, toggleSidebar } from "../../features/user/userSlice";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [showLogout, setShowLogout] = useState(false);

  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" type="button" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Табло</h3>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            type="button"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              className="dropdown-btn"
              type="button"
              onClick={() => dispatch(logoutUser())}
            >
              Изход
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
