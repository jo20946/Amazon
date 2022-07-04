import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-oct-ccace.cloudfunctions.net/api",

  //http://localhost:5001/oct-ccace/us-central1/api, //localhost
});
//https://us-central1-oct-ccace.cloudfunctions.net/api // cloud
export default instance;
