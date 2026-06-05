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

import GoalForm from "../../components/forms/GoalForm";

import GoalCard from "../../components/goals/GoalCard";

import {
  getGoals,
  createGoal,
} from "../../services/goal.service";

const GoalsPage = () => {
  const [goals, setGoals] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchGoals =
    async () => {
      try {
        const response =
          await getGoals();

        setGoals(
          response.data
        );
      } catch (error) {
        toast.error(
          "Failed to load goals"
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchGoals();
  }, []);

  const handleCreateGoal =
    async (formData) => {
      try {
        await createGoal(
          formData
        );

        toast.success(
          "Goal created successfully"
        );

        await fetchGoals();
      } catch (error) {
        toast.error(
          error?.response?.data
            ?.message ||
            "Failed to create goal"
        );
      }
    };

  return (
    <DashboardLayout>
      <PageHeader
        title="Financial Goals"
        subtitle="Track savings targets and progress"
      />

      <Card className="mb-8">
        <GoalForm
          onSubmit={
            handleCreateGoal
          }
        />
      </Card>

      {loading ? (
        <Loader />
      ) : goals.length ===
        0 ? (
        <Card>
          <EmptyState
            title="No Goals Found"
            description="Create your first financial goal"
          />
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {goals.map(
            (goal) => (
              <GoalCard
                key={goal._id}
                goal={goal}
              />
            )
          )}
        </div>
      )}
    </DashboardLayout>
  );
};

export default GoalsPage;