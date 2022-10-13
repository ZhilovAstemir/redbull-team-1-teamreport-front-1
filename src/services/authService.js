import AxiosService from "./axiosService";

class AuthService extends AxiosService {
  constructor() {
    super();
  }
  logIn = (data, setToken) => {
    this.post("/members/login", {
      email: data.email,
      password: data.password,
    })
      .then((response) => {
        console.log(response.data);
        setToken(response.data);
        this.defaults.headers.common["Authorization"] = response.data;
      })
      .catch((error) => {
        console.log(error);
        setToken(null);
      });
  };

  logOut = (setToken) => {
    setToken(null);
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

  getMemberInformation = (setMember) => {
    this.get("/members/info")
      .then((response) => {
        setMember(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  continueRegistration = (data, setToken) => {
    this.post("/members/continue-registration", data)
      .then((response) => {
        setToken(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  setToken = (token) => {
    this.defaults.headers.common["Authorization"] = token;
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
