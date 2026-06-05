import api from "./api";

export const getBudgetAnalytics =
  async () => {
    const response =
      await api.get(
        "/budget-analytics"
      );

    return response.data;
  };