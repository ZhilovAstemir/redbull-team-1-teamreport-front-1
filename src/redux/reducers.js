import {getTitle} from "./store";

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
        isLaunchGuide: true,
        isMyCompany: false,
        isInviteYourTeam: false,
        isMyReports: false,
      };
    case "MY_COMPANY":
      return {
        ...state,
        isLaunchGuide: false,
        isMyCompany: true,
        isInviteYourTeam: false,
        isMyReports: false,
      };
    case "INVITE_TEAM":
      return {
        ...state,
        isLaunchGuide: false,
        isMyCompany: false,
        isInviteYourTeam: true,
        isMyReports: false,
      };
    case "MY_REPORTS":
      return {
        ...state,
        isLaunchGuide: false,
        isMyCompany: false,
        isInviteYourTeam: false,
        isMyReports: true,
      };
    case "GET_TITLE":
      // return {
      //   ...state,
      //   title:
      // };
  }

  return {
    title: "ANKO Technologies Corp",
    isLaunchGuide: true,
    isMyCompany: false,
    isInviteYourTeam: false,
    isMyReports: false,
  }
}