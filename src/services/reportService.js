import AxiosService from "./axiosService";

class ReportService extends AxiosService {
  constructor() {
    super();
  }
  getReports = (token) => {
    return this.get("/reports/get-reports-by-member-id", {
      headers: {
        Authorization: token,
      },
    });
  };
  sendReport = (data) => {
    this.post("/reports", {
      morale: data.morale,
      moraleComment: data.moraleComment,
      stress: data.stress,
      stressComment: data.stressComment,
      workload: 0,
      workloadComment: "string",
      high: "string",
      low: "string",
      else: "string",
      week: {
        dateStart: "2022-10-11T06:42:58.143Z",
        dateEnd: "2022-10-11T06:42:58.143Z"
      }
    })
  }
}

const reportService = new ReportService();

export default reportService;