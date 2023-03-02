import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { customFetch } from "../../utils/axios";

const initialFilterState = {
  search: "",
  searchStatus: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a", "а-з", "з-а"], //Default стойности на филтъра
};

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  montlyApplications: [],
  ...initialFilterState,
};

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
});

export default allJobsSlice.reducer;
