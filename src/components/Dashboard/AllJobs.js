import { JobsContainer, SearchContainer } from "../Dashboard";
import PaginationContainer from "./PaginationContainer";

const AllJobs = () => {
  return (
    <>
      <SearchContainer />
      <JobsContainer />
      <PaginationContainer />
    </>
  );
};

export default AllJobs;
