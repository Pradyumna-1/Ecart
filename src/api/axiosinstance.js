import axios from "axios";
const axiosinstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});
export default axiosinstance;

export const axiosinstance2 = axios.create({
  baseURL: "http://localhost:3000/",
});

