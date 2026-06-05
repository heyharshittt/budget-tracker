import api from "./api";

export const getAllIncomes =
  async () => {
    const response =
      await api.get("/income");

    return response.data;
  };

export const createIncome =
  async (incomeData) => {
    const response =
      await api.post(
        "/income",
        incomeData
      );

    return response.data;
  };

export const updateIncome =
  async (
    id,
    incomeData
  ) => {
    const response =
      await api.put(
        `/income/${id}`,
        incomeData
      );

    return response.data;
  };

export const deleteIncome =
  async (id) => {
    const response =
      await api.delete(
        `/income/${id}`
      );

    return response.data;
  };