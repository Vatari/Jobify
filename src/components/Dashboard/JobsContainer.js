import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllJobs } from "../../features/allJobs/allJobsSlice";
import { Job, Spinner } from "../Dashboard";
import Wrapper from "./JobsContainerWrapper";
import PaginationContainer from "./PaginationContainer";

const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfpages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchStatus, searchType, sort, dispatch]);

  if (isLoading) {
    return <Spinner center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>Няма резултати...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>Намерени резултати: {totalJobs} </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfpages > 1 && <PaginationContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
