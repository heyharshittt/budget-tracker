import Income from "../models/income.model.js";
import Expense from "../models/expense.model.js";

export const getFinancialSummary = async (
  userId
) => {
  const incomes = await Income.find({
    user: userId,
  });

  const expenses = await Expense.find({
    user: userId,
  });

  const totalIncome = incomes.reduce(
    (sum, income) =>
      sum + income.amount,
    0
  );

  const totalExpenses =
    expenses.reduce(
      (sum, expense) =>
        sum + expense.amount,
      0
    );

  const balance =
    totalIncome - totalExpenses;

  const savingsRate =
    totalIncome > 0
      ? Number(
          (
            (balance /
              totalIncome) *
            100
          ).toFixed(2)
        )
      : 0;

  const categoryTotals = {};

  expenses.forEach((expense) => {
    categoryTotals[
      expense.category
    ] =
      (categoryTotals[
        expense.category
      ] || 0) +
      expense.amount;
  });

  const categoryData =
    Object.entries(
      categoryTotals
    ).map(([name, value]) => ({
      name,
      value,
    }));

  return {
    totalIncome,
    totalExpenses,
    balance,
    savingsRate,
    categoryData,
    incomeCount: incomes.length,
    expenseCount:
      expenses.length,
  };
};