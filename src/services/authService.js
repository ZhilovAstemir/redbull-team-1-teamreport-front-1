import AxiosService from "./axiosService";

class AuthService extends AxiosService {
  constructor() {
    super();
  }
  logIn = (data) => {
    return this.post("/members/login", {
      email: data.email,
      password: data.password,
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  registerCompany = (data) => {
    this.post("/company/register", {
      firstName: data.firstName,
      lastName: data.lastName,
      title: data.title,
      email: data.email,
      company: { name: data.companyName },
      password: data.password,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  registerTeamMember = (data) => {
    this.post("/members/register", {
      firstName: data.firstName,
      lastName: data.lastName,
      title: data.title,
      email: data.email,
      password: data.password,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

const authService = new AuthService();

export default authService;
