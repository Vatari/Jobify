import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showStats } from "../../features/allJobs/allJobsSlice";
import { Spinner, StatsContainer, ChartsContainer } from "../Dashboard";

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
  }, [dispatch]);
  if (isLoading) {
    return <Spinner center />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};
export default Stats;
