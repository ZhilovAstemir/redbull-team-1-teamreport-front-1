import AxiosService from "./axiosService";

class MemberService extends AxiosService {
  constructor() {
    super();
  }

  getMember = (memberId, setSelectedMember) => {
    this.post("/members/info-by-id", { memberId: memberId })
      .then((response) => {
        setSelectedMember(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  setToken = (token) => {
    this.defaults.headers.common["Authorization"] = token;
  };
}

const memberService = new MemberService();

export default memberService;
