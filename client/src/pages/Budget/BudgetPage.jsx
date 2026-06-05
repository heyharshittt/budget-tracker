import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";

import Card from "../../components/common/Card";
import Loader from "../../components/common/Loader";
import EmptyState from "../../components/common/EmptyState";
import PageHeader from "../../components/common/PageHeader";

import BudgetForm from "../../components/forms/BudgetForm";

import BudgetCard from "../../components/budget/BudgetCard";

import {
  createBudget,
} from "../../services/budget.service";

import {
  getBudgetAnalytics,
} from "../../services/budgetAnalytics.service";

const BudgetPage = () => {
  const [budgets, setBudgets] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchBudgets =
    async () => {
      try {
        const response =
          await getBudgetAnalytics();

        setBudgets(
          response.data
        );
      } catch (error) {
        toast.error(
          "Failed to fetch budgets"
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchBudgets();
  }, []);

  const handleCreateBudget =
    async (formData) => {
      try {
        await createBudget(
          formData
        );

        toast.success(
          "Budget created successfully"
        );

        await fetchBudgets();
      } catch (error) {
        toast.error(
          error?.response?.data
            ?.message ||
            "Failed to create budget"
        );
      }
    };

  return (
    <DashboardLayout>
      <PageHeader
        title="Budget Management"
        subtitle="Track spending against your budgets"
      />

      <Card className="mb-8">
        <BudgetForm
          onSubmit={
            handleCreateBudget
          }
        />
      </Card>

      {loading ? (
        <Loader />
      ) : budgets.length ===
        0 ? (
        <Card>
          <EmptyState
            title="No Budgets Found"
            description="Create your first budget"
          />
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {budgets.map(
            (budget) => (
              <BudgetCard
                key={
                  budget.budgetId
                }
                budget={
                  budget
                }
              />
            )
          )}
        </div>
      )}
    </DashboardLayout>
  );
};

export default BudgetPage;