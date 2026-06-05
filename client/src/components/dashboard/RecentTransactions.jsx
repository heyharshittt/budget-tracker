const RecentTransactions = ({
  incomes = [],
  expenses = [],
}) => {
  const transactions = [
    ...incomes.map(
      (income) => ({
        ...income,
        type: "Income",
      })
    ),

    ...expenses.map(
      (expense) => ({
        ...expense,
        type: "Expense",
      })
    ),
  ]
    .sort(
      (a, b) =>
        new Date(
          b.createdAt
        ) -
        new Date(
          a.createdAt
        )
    )
    .slice(0, 5);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        Recent Transactions
      </h2>

      {transactions.length ===
      0 ? (
        <p className="text-slate-500">
          No transactions found
        </p>
      ) : (
        <div className="space-y-3">
          {transactions.map(
            (
              transaction
            ) => (
              <div
                key={
                  transaction._id
                }
                className="flex items-center justify-between rounded-xl border p-3"
              >
                <div>
                  <p className="font-medium">
                    {transaction.type}
                  </p>

                  <p className="text-sm text-slate-500">
                    {new Date(
                      transaction.date
                    ).toLocaleDateString()}
                  </p>
                </div>

                <p
                  className={
                    transaction.type ===
                    "Income"
                      ? "font-semibold text-emerald-600"
                      : "font-semibold text-red-600"
                  }
                >
                  ₹
                  {
                    transaction.amount
                  }
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default RecentTransactions;