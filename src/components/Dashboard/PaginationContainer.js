import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";

import Wrapper from "./PaginationContainerWrapper";

const PaginationContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {};
  const prevPage = () => {};
  return (
    <button className="prev-btn" onClick={prevPage}>
      <HiChevronDoubleLeft />
      Назад
    </button>
  );
};

export default PaginationContainer;
