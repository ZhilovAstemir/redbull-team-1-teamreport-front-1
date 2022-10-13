import AxiosService from "./axiosService";

class InviteService extends AxiosService {
  constructor(token) {
    super();
    this.setToken(token);
  }
  invite = (data) => {
    this.post("/members/invite", {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default InviteService;
