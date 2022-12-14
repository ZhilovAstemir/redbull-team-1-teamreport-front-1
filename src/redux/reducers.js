export const reducers = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN": {
      return {
        ...state,
        token: action.payload,
      };
    }
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
        isContinueRegistration: false,
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
        isContinueRegistration: false,
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
        isContinueRegistration: false,
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
        isContinueRegistration: false,
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
        isContinueRegistration: false,
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
        isContinueRegistration: false,
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
        isContinueRegistration: false,
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
        isContinueRegistration: false,
      };
    case "CHANGE_TITLE":
      return {
        ...state,
        title: action.payload,
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
    case "SET_MEMBER":
      return {
        ...state,
        member: action.payload,
      };
    case "SET_MEMBERS":
      return {
        ...state,
        members: action.payload,
      };
    case "SET_LEADERS":
      return {
        ...state,
        leaders: action.payload,
      };
    case "SET_REPORTERS":
      return {
        ...state,
        reporters: action.payload,
      };

    case "SELECT_MEMBER":
      return {
        ...state,
        selectedMemberId: action.payload,
      };
    case "CONTINUE_REGISTRATION":
      return {
        ...state,
        isLaunchGuide: false,
        isMyCompany: false,
        isInviteYourTeam: false,
        isMyReports: false,
        isFillOutReport: false,
        isLogIn: false,
        isTeamMembers: false,
        isEditTeamInfo: false,
        isTeamReports: false,
        isContinueRegistration: true,
      };
    case "SET_CURRENT_IMMEDIATE_REPORTS":
      return {
        ...state,
        currentImmediateReports: action.payload,
      };
    case "SET_PREVIOUS_IMMEDIATE_REPORTS":
      return {
        ...state,
        previousImmediateReports: action.payload,
      };
    case "SET_CURRENT_EXTENDED_REPORTS":
      return {
        ...state,
        currentExtendedReports: action.payload,
      };
    case "SET_PREVIOUS_EXTENDED_REPORTS":
      return {
        ...state,
        previousExtendedReports: action.payload,
      };

    case "SET_EDIT_MEMBER_OPEN": {
      console.log(action.payload);
      return {
        ...state,
        isMemberEditOpen: action.payload,
      };
    }
  }

  return {
    // pages
    isLaunchGuide: true,
    isMyCompany: false,
    isInviteYourTeam: false,
    isMyReports: false,
    isFillOutReport: false,
    isTeamMembers: false,
    isLogIn: false,
    isEditTeamInfo: false,
    isContinueRegistration: false,
    isTeamReports: false,
    // inputs
    isMoraleInput: false,
    isStressInput: false,
    isWorkloadInput: false,
    // data
    title: "Company Name",
    token: null,
    member: null,
    selectedMemberId: null,
    isMemberEditOpen: false,
    members: [],
    leaders: [],
    reporters: [],
    currentImmediateReports: [[], []],
    previousImmediateReports: [[], []],
    currentExtendedReports: [[], []],
    previousExtendedReports: [[], []],
  };
};
