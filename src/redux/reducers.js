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
        isTeamMembers: false,
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
        isTeamMembers: false,
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
        isTeamMembers: false,
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
        isTeamMembers: false,
      };
    case "TEAM_MEMBERS":
      return {
        ...state,
        title: "ANKO Technologies Corp",
        isLaunchGuide: false,
        isMyCompany: false,
        isInviteYourTeam: false,
        isMyReports: false,
        isFillOutReport: false,
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
      };
    case UPDATE_TITLE || "CHANGE_TITLE":
      const title = action.payload;
      return {
        ...state,
        title: title,
      };
    default: {
      return {
        ...state,
      }
    }
  }

  return {
    title: "ANKO Technologies Corp",
    isLaunchGuide: true,
    isMyCompany: false,
    isInviteYourTeam: false,
    isMyReports: false,
    isFillOutReport: false,
    isTeamMembers: false,
  }
}