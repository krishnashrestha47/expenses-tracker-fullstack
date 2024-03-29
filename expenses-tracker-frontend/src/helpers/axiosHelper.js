import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const userApi = rootUrl + "/users";
const loginApi = rootUrl + "/users/login";
const expensesAPI = rootUrl + "/expenses";

//====== user APIs

export const postRegister = (formDt) => {
  try {
    return axios.post(userApi, formDt);
  } catch (error) {
    return {
      data: {
        status: "error",
        message: error.message,
      },
    };
  }
};

export const postLogin = (formDt) => {
  try {
    return axios.post(loginApi, formDt);
  } catch (error) {
    return {
      data: {
        status: "error",
        message: error.message,
      },
    };
  }
};

// ===== expenses api

export const postExpense = async (formDt) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const { data } = await axios.post(expensesAPI, formDt, {
      headers: {
        Authorization: user._id,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getExpense = async () => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const { data } = await axios.get(expensesAPI, {
      headers: {
        Authorization: user._id,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteExpense = async (ids) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const { data } = await axios.delete(expensesAPI, {
      headers: {
        Authorization: user._id,
      },
      data: ids,
    });
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
