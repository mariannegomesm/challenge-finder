import axios from "axios";

class HomeServices {
  static user(user) {
    return axios.get(`https://api.github.com/users/${user}`);
  }
}

export default HomeServices;
