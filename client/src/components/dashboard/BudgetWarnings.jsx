const BudgetWarnings = ({
  budgets = [],
}) => {
  const warnings =
    budgets.filter(
      (budget) =>
        budget.status ===
          "Warning" ||
        budget.status ===
          "Over Budget"
    );

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        Budget Alerts
      </h2>

      {warnings.length === 0 ? (
        <p className="text-slate-500">
          No budget warnings
        </p>
      ) : (
        <div className="space-y-3">
          {warnings.map(
            (warning) => (
              <div
                key={
                  warning.budgetId
                }
                className="rounded-xl border border-red-200 bg-red-50 p-3"
              >
                <p className="font-medium text-red-700">
                  {
                    warning.category
                  }
                </p>

                <p className="text-sm text-red-600">
                  Usage:
                  {" "}
                  {
                    warning.usagePercentage
                  }
                  %
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default BudgetWarnings;