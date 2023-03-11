import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";

import Spinner from "./Spinner";

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, []);
  if (isLoading) {
    return <Spinner center />;
  }
  return <></>;
};
export default Stats;
