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
      };
    case "MY_COMPANY":
      return {
        ...state,
        title: "ANKO Technologies Corp",
        isLaunchGuide: false,
        isMyCompany: true,
        isInviteYourTeam: false,
        isMyReports: false,
      };
    case "INVITE_TEAM":
      return {
        ...state,
        title: "Invite Your Team",
        isLaunchGuide: false,
        isMyCompany: false,
        isInviteYourTeam: true,
        isMyReports: false,
      };
    case "MY_REPORTS":
      return {
        ...state,
        title: "ANKO Technologies Corp",
        isLaunchGuide: false,
        isMyCompany: false,
        isInviteYourTeam: false,
        isMyReports: true,
      };
    case UPDATE_TITLE || "CHANGE_TITLE":
      const title = action.payload;
      return {
        ...state,
        title: title,
      }

  }

  return {
    title: "ANKO Technologies Corp",
    isLaunchGuide: true,
    isMyCompany: false,
    isInviteYourTeam: false,
    isMyReports: false,
  }
}