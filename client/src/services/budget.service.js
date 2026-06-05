import api from "./api";

export const getBudgets = async () => {
  const response = await api.get("/budget");
  return response.data;
};

export const createBudget = async (budgetData) => {
  const response = await api.post(
    "/budget",
    budgetData
  );

  return response.data;
};

export const deleteBudget = async (id) => {
  const response = await api.delete(
    `/budget/${id}`
  );

  return response.data;
};