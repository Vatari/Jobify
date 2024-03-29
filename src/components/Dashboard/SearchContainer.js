import { useDispatch, useSelector } from "react-redux";

import { FormRow, FormRowSelect } from "..";
import Wrapper from "./SearchContainerWrapper";
import {
  handleChange,
  clearFilters,
} from "../../features/allJobs/allJobsSlice";

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    if (isLoading) return; //За да не вървят непрекъснати заявки
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };
  return (
    <Wrapper>
      <form className="form">
        <h4>Търси</h4>
        <div className="form-center">
          <FormRow
            type="text"
            labelText="Търси"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          <FormRowSelect
            labelText="Статус"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />
          <FormRowSelect
            labelText="Тип"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          <FormRowSelect
            labelText="Сортирай"
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Изчисти полетата
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
