import AxiosService from "./axiosService";

class InviteService extends AxiosService {
  constructor() {
    super();
  }
  invite = (data, token) => {
    this.post(
      "/members/invite",
      {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      },
      {
        headers: token,
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  setToken = (token) => {
    this.defaults.headers.common["Authorization"] = token;
  };
}

const inviteService = new InviteService();

export default inviteService;
