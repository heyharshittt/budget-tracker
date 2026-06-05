import Income from "../models/income.model.js";
import Expense from "../models/expense.model.js";

import {
  getFinancialSummary,
} from "./financialSummary.service.js";

export const getDashboardData =
  async (userId) => {
    const summary =
      await getFinancialSummary(
        userId
      );

    const incomes =
      await Income.find({
        user: userId,
      });

    const expenses =
      await Expense.find({
        user: userId,
      });

    const monthlyMap = {};

    incomes.forEach(
      (income) => {
        const month =
          new Date(
            income.date
          ).toLocaleString(
            "default",
            {
              month:
                "short",
            }
          );

        if (
          !monthlyMap[
            month
          ]
        ) {
          monthlyMap[
            month
          ] = {
            month,
            income: 0,
            expense: 0,
          };
        }

        monthlyMap[
          month
        ].income +=
          income.amount;
      }
    );

    expenses.forEach(
      (expense) => {
        const month =
          new Date(
            expense.date
          ).toLocaleString(
            "default",
            {
              month:
                "short",
            }
          );

        if (
          !monthlyMap[
            month
          ]
        ) {
          monthlyMap[
            month
          ] = {
            month,
            income: 0,
            expense: 0,
          };
        }

        monthlyMap[
          month
        ].expense +=
          expense.amount;
      }
    );

    const monthlyData =
      Object.values(
        monthlyMap
      );

    return {
      ...summary,
      monthlyData,
    };
  };