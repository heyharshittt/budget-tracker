import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";

import ExpenseForm from "../../components/forms/ExpenseForm";

import Loader from "../../components/common/Loader";
import EmptyState from "../../components/common/EmptyState";
import Card from "../../components/common/Card";
import PageHeader from "../../components/common/PageHeader";

import {
  getAllExpenses,
  createExpense,
  deleteExpense,
} from "../../services/expense.service";

const ExpensePage = () => {
  const [expenses, setExpenses] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchExpenses =
    async () => {
      try {
        const response =
          await getAllExpenses();

        setExpenses(
          response.data
        );
      } catch (error) {
        toast.error(
          "Failed to fetch expenses"
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleAddExpense =
    async (formData) => {
      try {
        await createExpense(
          formData
        );

        toast.success(
          "Expense added successfully"
        );

        await fetchExpenses();
      } catch (error) {
        toast.error(
          error?.response?.data
            ?.message ||
            "Failed to add expense"
        );
      }
    };

  const handleDeleteExpense =
    async (id) => {
      try {
        await deleteExpense(id);

        toast.success(
          "Expense deleted successfully"
        );

        await fetchExpenses();
      } catch (error) {
        toast.error(
          error?.response?.data
            ?.message ||
            "Failed to delete expense"
        );
      }
    };

  return (
    <DashboardLayout>
      <PageHeader
        title="Expense Management"
        subtitle="Track and manage all expenses"
      />

      <Card className="mb-8">
        <ExpenseForm
          onSubmit={
            handleAddExpense
          }
        />
      </Card>

      <Card className="overflow-hidden p-0">
        {loading ? (
          <Loader />
        ) : expenses.length ===
          0 ? (
          <EmptyState
            title="No Expenses Found"
            description="Add your first expense"
          />
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="p-4 text-left">
                  Category
                </th>

                <th className="p-4 text-left">
                  Amount
                </th>

                <th className="p-4 text-left">
                  Date
                </th>

                <th className="p-4 text-left">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {expenses.map(
                (expense) => (
                  <tr
                    key={
                      expense._id
                    }
                    className="border-b"
                  >
                    <td className="p-4">
                      {
                        expense.category
                      }
                    </td>

                    <td className="p-4 font-medium text-red-600">
                      ₹
                      {expense.amount.toLocaleString()}
                    </td>

                    <td className="p-4">
                      {new Date(
                        expense.date
                      ).toLocaleDateString()}
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() =>
                          handleDeleteExpense(
                            expense._id
                          )
                        }
                        className="font-medium text-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </Card>
    </DashboardLayout>
  );
};

export default ExpensePage;