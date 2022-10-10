import AxiosService from "./axiosService";

class InviteService extends AxiosService {
  constructor(props) {
    super(props);
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

const inviteService = new InviteService();

export default inviteService;
