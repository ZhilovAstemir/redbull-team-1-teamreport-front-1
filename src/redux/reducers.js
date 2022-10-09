const UPDATE_TITLE = "UPDATE_TITLE";

export const reducers = (state, action) => {

  // if (action.type === "TITLE") {
  //   return {
  //     ...state,
  //     title: "newTitle",
  //   }
  // }

  switch (action.type) {
    case "LAUNCH_GUIDE":
      return {
        ...state,
        title: "Launch Guide",
        isLaunchGuide: true,
        isMyCompany: false,
        isInviteYourTeam: false,
        isMyReports: false,
        isFillOutReport: false,
        isLogIn: false,
        isTeamMembers: false,
        isEditTeamInfo: false,
      };
    case "MY_COMPANY":
      return {
        ...state,
        title: "ANKO Technologies Corp",
        isLaunchGuide: false,
        isMyCompany: true,
        isInviteYourTeam: false,
        isMyReports: false,
        isFillOutReport: false,
        isLogIn: false,
        isTeamMembers: false,
        isEditTeamInfo: false,
      };
    case "INVITE_TEAM":
      return {
        ...state,
        title: "Invite Your Team",
        isLaunchGuide: false,
        isMyCompany: false,
        isInviteYourTeam: true,
        isMyReports: false,
        isFillOutReport: false,
        isLogIn: false,
        isTeamMembers: false,
        isEditTeamInfo: false,
      };
    case "MY_REPORTS":
      return {
        ...state,
        title: "ANKO Technologies Corp",
        isLaunchGuide: false,
        isMyCompany: false,
        isInviteYourTeam: false,
        isMyReports: true,
        isFillOutReport: false,
        isLogIn: false,
        isTeamMembers: false,
        isEditTeamInfo: false,
      };
    case "TEAM_MEMBERS":
      return {
        ...state,
        title: "ANKO Technologies Corp",
        isLaunchGuide: false,
        isMyCompany: false,
        isTeamMembers: true,
      };
    case "FILL_OUT_REPORT":
      return {
        ...state,
        isLaunchGuide: false,
        isMyCompany: false,
        isInviteYourTeam: false,
        isMyReports: false,
        isFillOutReport: true,
        isLogIn: false,
        isTeamMembers: false,
        isEditTeamInfo: false,
      };
    case "CLOSE_LOGIN":
      return {
        ...state,
        isLaunchGuide: true,
        isLogIn: false,
      };
    case "LOG_IN":
      return {
        ...state,
        isLaunchGuide: false,
        isMyCompany: false,
        isInviteYourTeam: false,
        isMyReports: false,
        isFillOutReport: false,
        isLogIn: true,
        isTeamMembers: false,
        isEditTeamInfo: false,
      };
    case "EDIT_TEAM_INFO":
      return {
        ...state,
        isLaunchGuide: false,
        isMyCompany: false,
        isInviteYourTeam: false,
        isMyReports: false,
        isFillOutReport: false,
        isLogIn: false,
        isTeamMembers: false,
        isEditTeamInfo: true,
      };
    case UPDATE_TITLE || "CHANGE_TITLE":
      const title = action.payload;
      return {
        ...state,
        title: title,
      };
    case "MORALE_INPUT":
      return {
        ...state,
        isMoraleInput: true,
        isStressInput: false,
        isWorkloadInput: false,
      };
    case "STRESS_INPUT":
      return {
        ...state,
        isMoraleInput: false,
        isStressInput: true,
        isWorkloadInput: false,
      };
    case "WORKLOAD_INPUT":
      return {
        ...state,
        isMoraleInput: false,
        isStressInput: false,
        isWorkloadInput: true,
      }
    case "CLOSE_INPUT":
      return {
        ...state,
        isMoraleInput: false,
        isStressInput: false,
        isWorkloadInput: false,
      }
  }

  return ({
    title: "ANKO Technologies Corp",
    // pages
    isLaunchGuide: true,
    isMyCompany: false,
    isInviteYourTeam: false,
    isMyReports: false,
    isFillOutReport: false,
    isTeamMembers: false,
    isLogIn: false,
    isEditTeamInfo: false,
    // inputs
    isMoraleInput: false,
    isStressInput: false,
    isWorkloadInput: false,
    leaders: [
      {
        id: Math.random(),
        name: "Alexandr Vovchuk",
      },
      {
        id: Math.random(),
        name: "Anna Kotova",
      },
      {
        id: Math.random(),
        name: "Nina Mammadova",
      },
      {
        id: Math.random(),
        name: "Natalia Starkova",
      },
      {
        id: Math.random(),
        name: "Anton Tarkhanov",
      },
    ]
  })
}