import axios from "axios";

export default axios.create({
  baseURL: "https://spring-boot-data-jpa-rutah.run.goorm.io/api",
  headers: {
    "Content-type": "application/json"
  }
});