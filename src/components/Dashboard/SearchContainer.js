import { useDispatch, useSelector } from "react-redux";
import { FormRow, FormRowSelect } from ".";
import Wrapper from "./SearchContainerWrapper";

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOPtions } =
    useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  const handleSearch = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };
};

export default SearchContainer;
