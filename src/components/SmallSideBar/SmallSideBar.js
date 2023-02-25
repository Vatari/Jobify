import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import { Logo, NavLinks } from "../../components";
import Wrapper from "./SmallSidebarWrapper";
import { toggleSidebar } from "../../features/user/userSlice";

const SmallSideBar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSideBar;
