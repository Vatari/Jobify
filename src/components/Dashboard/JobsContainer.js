import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Job, Spinner } from "../Dashboard";
import Wrapper from "./JobsContainerWrapper";

const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

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
      <h5>Намерени резултати:</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
