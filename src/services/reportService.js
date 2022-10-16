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
  getCurrentExtendedReports = (companyId, setCurrentExtendedReports) => {
    this.get("/reports/" + companyId + "/extended-team-current-week-statistic")
      .then((response) => {
        setCurrentExtendedReports(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getPreviousExtendedReports = (companyId, setPreviousExtendedReports) => {
    this.get("/reports/" + companyId + "/extended-team-previous-week-statistic")
      .then((response) => {
        setPreviousExtendedReports(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getCurrentImmediateReports = (memberId, setCurrentImmediateReports) => {
    this.get("/reports/" + memberId + "/immidiate-team-current-week-statistic")
      .then((response) => {
        setCurrentImmediateReports(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getPreviousImmediateReports = (memberId, setPreviousImmediateReports) => {
    this.get("/reports/" + memberId + "/immidiate-team-previous-week-statistic")
      .then((response) => {
        setPreviousImmediateReports(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default ReportService;
