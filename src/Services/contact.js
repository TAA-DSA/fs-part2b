import axios from "axios";

const baseUrl = "http://localhost:3001/persons";
console.log(baseUrl);

console.log("🚀 Hello from Server!!");

//get request

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (contactObj) => {
  return axios.post(baseUrl, contactObj);
};

const update = (id, contactObj) => {
  return axios.put(`${baseUrl}/${id}`, contactObj);
};

export default { getAll: getAll, create: create, update: update };
