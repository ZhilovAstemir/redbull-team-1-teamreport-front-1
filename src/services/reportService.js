import AxiosService from "./axiosService";

class ReportService extends AxiosService {
  constructor(token) {
    super();
    this.setToken(token);
  }
  getReports = () => {
    return this.get("/reports/get-reports-by-member-id");
  };
  sendReport = (data) => {
    this.post("/reports", {
      morale: data.morale,
      moraleComment: data.moraleComment,
      stress: data.stress,
      stressComment: data.stressComment,
      workload: data.workload,
      workloadComment: data.workloadComment,
      high: data.highComment,
      low: data.lowComment,
      else: data.elseComment,
      week: {
        dateStart: data.week.dateStart,
        dateEnd: data.week.dateEnd,
      },
    });
  };
}

export default ReportService;
