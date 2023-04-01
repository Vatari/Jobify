import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://localhost:4000",
  // baseURL: "http://b8e00a7b5ca8.sn.mynetname.net:3019/",
  // baseURL: "http://10.10.101.19:4000",
});

export default customFetch;
