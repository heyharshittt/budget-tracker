import RecurringTransaction from "../models/recurringTransaction.model.js";

export const createRecurringTransaction =
  async (data) => {
    return await RecurringTransaction.create(
      data
    );
  };

export const getRecurringTransactions =
  async (userId) => {
    return await RecurringTransaction.find({
      user: userId,
    }).sort({
      nextRunDate: 1,
    });
  };

export const deleteRecurringTransaction =
  async (
    id,
    userId
  ) => {
    return await RecurringTransaction.findOneAndDelete(
      {
        _id: id,
        user: userId,
      }
    );
  };