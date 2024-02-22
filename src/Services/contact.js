import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons";
console.log(baseUrl);

console.log("🚀 Hello from Server!!");

//get request

const getAll = () => {
  return axios.get(baseUrl);
};

//post request
const create = (contactObj) => {
  return axios.post(baseUrl, contactObj);
};

//put request
const update = (id, contactObj) => {
  console.log("id from front-end", id);
  return axios.put(`${baseUrl}/${id}`, contactObj);
};

//Delete request
const deleteContact = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
  deleteContact: deleteContact,
};
