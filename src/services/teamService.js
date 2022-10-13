import AxiosService from "./axiosService";

class TeamService extends AxiosService {
  constructor() {
    super();
  }

  getMembers = (setMembers) => {
    this.get("/team/all")
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getLeaders = (memberId, setLeaders) => {
    this.get("/team/leaders", { params: { memberId } })
      .then((response) => {
        setLeaders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getReporters = (memberId, setReporters) => {
    this.get("/team/reporters", { params: { memberId } })
      .then((response) => {
        setReporters(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  setLeaders = (memberId, leaders) => {
    console.log(leaders);
    this.post("/team/leaders", { memberId, membersIds: leaders })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  setReporters = (memberId, reporters) => {
    this.post("/team/reporters", { memberId, membersIds: reporters })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  setToken = (token) => {
    this.defaults.headers.common["Authorization"] = token;
  };
}

const teamService = new TeamService();

export default teamService;
