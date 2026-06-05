import Budget from "../models/budget.model.js";
import Expense from "../models/expense.model.js";

export const getBudgetAnalytics =
  async (userId) => {
    const budgets =
      await Budget.find({
        user: userId,
      });

    const expenses =
      await Expense.find({
        user: userId,
      });

    return budgets.map(
      (budget) => {
        const spent =
          expenses
            .filter(
              (expense) =>
                expense.category ===
                budget.category
            )
            .reduce(
              (
                total,
                expense
              ) =>
                total +
                expense.amount,
              0
            );

        const remaining =
          budget.amount -
          spent;

        const usagePercentage =
          budget.amount > 0
            ? Number(
                (
                  (spent /
                    budget.amount) *
                  100
                ).toFixed(2)
              )
            : 0;

        let status =
          "Healthy";

        if (
          usagePercentage >=
          100
        ) {
          status =
            "Over Budget";
        } else if (
          usagePercentage >=
          80
        ) {
          status =
            "Warning";
        }

        return {
          budgetId:
            budget._id,
          category:
            budget.category,
          month:
            budget.month,
          budgetAmount:
            budget.amount,
          spent,
          remaining,
          usagePercentage,
          status,
        };
      }
    );
  };