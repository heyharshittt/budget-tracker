import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";

import IncomeForm from "../../components/forms/IncomeForm";

import Loader from "../../components/common/Loader";
import EmptyState from "../../components/common/EmptyState";
import Card from "../../components/common/Card";
import PageHeader from "../../components/common/PageHeader";

import {
  getAllIncomes,
  createIncome,
  deleteIncome,
} from "../../services/income.service";

const IncomePage = () => {
  const [incomes, setIncomes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchIncomes = async () => {
    try {
      const response = await getAllIncomes();

      setIncomes(response.data);
    } catch (error) {
      console.error(error);

      toast.error("Failed to fetch incomes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIncomes();
  }, []);

  const handleAddIncome = async (formData) => {
    try {
      await createIncome(formData);

      toast.success("Income added successfully");

      await fetchIncomes();
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to add income"
      );
    }
  };

  const handleDeleteIncome = async (id) => {
    try {
      await deleteIncome(id);

      toast.success("Income deleted successfully");

      await fetchIncomes();
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to delete income"
      );
    }
  };

  return (
    <DashboardLayout>
      <PageHeader
        title="Income Management"
        subtitle="Manage and track all your income sources"
      />

      <Card className="mb-8">
        <IncomeForm onSubmit={handleAddIncome} />
      </Card>

      <Card className="overflow-hidden p-0">
        {loading ? (
          <Loader />
        ) : incomes.length === 0 ? (
          <EmptyState
            title="No Income Found"
            description="Add your first income record"
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b bg-slate-50">
                  <th className="p-4 text-left">Source</th>
                  <th className="p-4 text-left">Amount</th>
                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {incomes.map((income) => (
                  <tr key={income._id} className="border-b">
                    <td className="p-4">{income.source}</td>

                    <td className="p-4 font-medium text-emerald-600">
                      ₹{income.amount.toLocaleString()}
                    </td>

                    <td className="p-4">
                      {new Date(income.date).toLocaleDateString()}
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() =>
                          handleDeleteIncome(income._id)
                        }
                        className="font-medium text-red-600 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </DashboardLayout>
  );
};

export default IncomePage;
