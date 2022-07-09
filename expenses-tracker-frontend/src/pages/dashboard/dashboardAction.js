import { getExpense, postExpense } from "../../helpers/axiosHelper";
import { requestPending, setExpenses } from "./dashboardSlice";

export const fetchExpenses = () => async (dispatch) => {
  const { status, expenses } = await getExpense();

  status === "success" && dispatch(setExpenses(expenses));
};

export const handleOnPost = (formDt) => async (dispatch) => {
  dispatch(requestPending(true));
  const data = await postExpense(formDt);
  //   setResp(data);
  data.status === "success" && dispatch(fetchExpenses());
};
