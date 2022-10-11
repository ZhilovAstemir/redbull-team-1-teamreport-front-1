const UPDATE_TITLE = "UPDATE_TITLE";

export const reducers = (state, action) => {
  // if (action.type === "TITLE") {
  //   return {
  //     ...state,
  //     title: "newTitle",
  //   }
  // }

  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
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
        isTeamReports: false,
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
        isTeamReports: false,
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
        isTeamReports: false,
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
        isTeamReports: false,
      };
    case "TEAM_REPORTS":
      return {
        ...state,
        title: "ANKO Technologies Corp",
        isLaunchGuide: false,
        isMyCompany: false,
        isInviteYourTeam: false,
        isMyReports: false,
        isFillOutReport: false,
        isLogIn: false,
        isTeamMembers: false,
        isEditTeamInfo: false,
        isTeamReports: true,
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
        isTeamReports: false,
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
        isTeamReports: false,
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
        isTeamReports: false,
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
      };
    case "CLOSE_INPUT":
      return {
        ...state,
        isMoraleInput: false,
        isStressInput: false,
        isWorkloadInput: false,
      };
  }

  return {
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
    isTeamReports: false,
    // inputs
    isMoraleInput: false,
    isStressInput: false,
    isWorkloadInput: false,
    // data
    myProfile: {
      myName: "Alex",
      myLastName: "Marlin",
      myPosition: "CEO",
    },
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
    ],
    members: [
      {
        id: Math.random(),
        name: "Aleksandr Evseev",
        title: "CEO"
      },
      {
        id: Math.random(),
        name: "Nikolai Kapustin",
        title: "Software developer"
      },
      {
        id: Math.random(),
        name: "Anna Kotova",
        title: "Computer systems analyst"
      },
      {
        id: Math.random(),
        name: "Nina Mammadova",
        title: "Database administrators and architect"
      },
      {
        id: Math.random(),
        name: "Natalia Starkova",
        title: "IT project manager"
      },
      {
        id: Math.random(),
        name: "Anton Tarkhanov",
        title: "Software developer"
      },
      {
        id: Math.random(),
        name: "Alexandr Vovchuk",
        title: "CEO"
      },
    ],
  }
}
