import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import Loader from "../../components/common/Loader";

import SummaryCard from "../../components/dashboard/SummaryCard";

import ExpensePieChart from "../../components/dashboard/ExpensePieChart";

import EmptyChartState from "../../components/dashboard/EmptyChartState";

import BudgetWarnings from "../../components/dashboard/BudgetWarnings";

import RecentTransactions from "../../components/dashboard/RecentTransactions";

import {
  getDashboardData,
} from "../../services/dashboard.service";

import {
  getBudgetAnalytics,
} from "../../services/budgetAnalytics.service";

import {
  getAllIncomes,
} from "../../services/income.service";

import {
  getAllExpenses,
} from "../../services/expense.service";

import IncomeExpenseChart from "../../components/dashboard/IncomeExpenseChart";
import TrendChart from "../../components/dashboard/TrendChart";

const DashboardPage = () => {
  const [
    dashboardData,
    setDashboardData,
  ] = useState(null);

  const [
    budgetAnalytics,
    setBudgetAnalytics,
  ] = useState([]);

  const [
    incomes,
    setIncomes,
  ] = useState([]);

  const [
    expenses,
    setExpenses,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {
    const loadData =
      async () => {
        try {
          const [
            dashboard,
            budgetData,
            incomeData,
            expenseData,
          ] =
            await Promise.all([
              getDashboardData(),
              getBudgetAnalytics(),
              getAllIncomes(),
              getAllExpenses(),
            ]);

          setDashboardData(
            dashboard.data
          );

          setBudgetAnalytics(
            budgetData.data
          );

          setIncomes(
            incomeData.data
          );

          setExpenses(
            expenseData.data
          );
        } catch (error) {
          console.error(
            error
          );
        } finally {
          setLoading(false);
        }
      };

    loadData();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <Loader />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1 className="mb-8 text-3xl font-bold">
        Dashboard
      </h1>

      <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <SummaryCard
          title="Total Income"
          value={`₹${dashboardData.totalIncome.toLocaleString()}`}
          valueClass="text-emerald-600"
        />

        <SummaryCard
          title="Total Expenses"
          value={`₹${dashboardData.totalExpenses.toLocaleString()}`}
          valueClass="text-red-600"
        />

        <SummaryCard
          title="Balance"
          value={`₹${dashboardData.balance.toLocaleString()}`}
          valueClass="text-blue-600"
        />

        <SummaryCard
          title="Savings Rate"
          value={`${dashboardData.savingsRate}%`}
          valueClass="text-purple-600"
        />
      </div>

          <div className="mb-8 grid gap-6 lg:grid-cols-2">
              <IncomeExpenseChart
                  data={
                      dashboardData.monthlyData
                  }
              />

              <TrendChart
                  data={
                      dashboardData.monthlyData
                  }
              />
          </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        {dashboardData
          .categoryData
          .length === 0 ? (
          <EmptyChartState title="No Expense Data Available" />
        ) : (
          <ExpensePieChart
            data={
              dashboardData.categoryData
            }
          />
        )}

        <BudgetWarnings
          budgets={
            budgetAnalytics
          }
        />
      </div>

      <RecentTransactions
        incomes={incomes}
        expenses={expenses}
      />
    </DashboardLayout>
  );
};

export default DashboardPage;