import axios from "axios";

export default {
    search: function() {
      return axios.get("https://randomapi.com/api/?nat=us&results=50&inc=name,phone,email,dob,picture");
    }
  };