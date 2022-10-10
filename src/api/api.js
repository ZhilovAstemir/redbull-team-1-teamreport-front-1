import axios from "axios";

export const logInQuery = (data) => {
  return axios
    .post("https://localhost:7030/api/members/login", {
      email: data.email,
      password: data.password,
    })
    .then((response) => {
      return response.data;
    });
};

export const registerCompanyQuery = (data) => {
  axios
    .post("https://localhost:7030/api/company/register", {
      firstName: data.firstName,
      lastName: data.lastName,
      title: data.title,
      email: data.email,
      company: { name: data.companyName },
      password: data.password,
    })
    .then((response) => {
      console.log(response);
    });
};

export const registerTeamMemberQuery = (data) => {
  axios
    .post("https://localhost:7030/api/members/register", {
      firstName: data.firstName,
      lastName: data.lastName,
      title: data.title,
      email: data.email,
      password: data.password,
    })
    .then((response) => {
      console.log(response);
    });
};

export const inviteTeamMemberQuery = (data) => {
  axios
    .post("https://localhost:7030/api/members/invite", {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    })
    .then((response) => {
      console.log(response);
    });
};

export const updateCompanyNameQuery = (newCompanyName) => {
  axios
    .put("https://localhost:7030/api/company/update", {
      newCompanyName,
    })
    .then((response) => {
      console.log(response);
    });
};

export const getCompanyNameQuery = (token) => {
  axios
    .get("https://localhost:7030/api/company/name", {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      console.log(response);
      return response;
    });
};
