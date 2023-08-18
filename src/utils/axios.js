import axios from "axios";

const customFetch = axios.create({
  //baseURL: "http://localhost:4000",
  baseURL: "jobify-server:3019/",
  // baseURL: "http://10.10.101.19:4000",
});

export default customFetch;
