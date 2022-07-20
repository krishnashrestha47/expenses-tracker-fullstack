import ExpensesSchema from "./Expenses.Schema.js";

//expenses should be an object
export const createExpense = (expense) => {
  return ExpensesSchema.create(expense);
};

//filter must be an object that should atleast contain the user Id
export const getExpenses = (filter) => {
  return ExpensesSchema.find(filter);
};

//filter must be an object that should atleast contain the user Id and the expenses Id
export const deleteExpenses = (filter) => {
  return ExpensesSchema.findOneAndDelete(filter);
};

export const deleteManyExpenses = (userId, itemIds) => {
  return ExpensesSchema.deleteMany({ userId, _id: { $in: itemIds } });
};
