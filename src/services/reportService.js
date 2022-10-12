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
  sendReport = (data, token) => {
    this.post(
      "/reports",
      {
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
      },
      {
        headers: token
      }
    );
  };
}

const reportService = new ReportService();

export default reportService;
