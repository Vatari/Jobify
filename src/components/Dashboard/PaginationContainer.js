import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";

import Wrapper from "./PaginationContainerWrapper";
import { changePage } from "../../features/allJobs/allJobsSlice";

const PaginationContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages; //Връщане на последната страница
    }
    dispatch(changePage(newPage));
  };
  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        Назад
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}
              key={pageNumber}
              onClick={() => dispatch(changePage(pageNumber))}
            ></button>
          );
        })}
      </div>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleRight />
        Напред
      </button>
    </Wrapper>
  );
};

export default PaginationContainer;
