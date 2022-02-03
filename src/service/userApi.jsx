import axios from "axios";

const UserApi = axios.create({
  baseURL: "http://localhost:3005/profile",
});

export default UserApi;