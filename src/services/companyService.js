import AxiosService from "./axiosService";

class CompanyService extends AxiosService {
  constructor(token) {
    super();
    this.setToken(token);
  }

  changeName = (name) => {
    return this.put("/company/update", {
      newCompanyName: name,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default CompanyService;
