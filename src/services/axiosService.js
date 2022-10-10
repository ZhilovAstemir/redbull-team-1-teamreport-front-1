import axios from "axios";

class Axios {
  constructor() {
    return axios.create()
  }
}

export default class AxiosService extends Axios {
  constructor() {
    super();
    this.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  }
}
