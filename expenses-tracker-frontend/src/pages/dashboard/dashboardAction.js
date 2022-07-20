import {
  deleteExpense,
  getExpense,
  postExpense,
} from "../../helpers/axiosHelper";
import { requestPending, setExpenses, setResponse } from "./dashboardSlice";

export const fetchExpenses = () => async (dispatch) => {
  const { status, expenses } = await getExpense();

  status === "success" && dispatch(setExpenses(expenses));
};

export const handleOnPost = (formDt) => async (dispatch) => {
  dispatch(requestPending(true));
  const data = await postExpense(formDt);
  dispatch(setResponse(data));
  data.status === "success" && dispatch(fetchExpenses());
};

export const handleOnDeleteExpenses = (ids) => async (dispatch) => {
  dispatch(requestPending(true));
  const data = await deleteExpense(ids);
  dispatch(setResponse(data));
  data.status === "success" && dispatch(fetchExpenses());
};
