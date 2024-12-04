import axios from "axios";
const axiosinstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});
export default axiosinstance;
