import axios from "axios";

const customFetch = axios.create({
  //baseURL: "http://localhost:4000",
  baseURL: "https://66c005c045ce.sn.mynetname.net:4000",
});

export default customFetch;
