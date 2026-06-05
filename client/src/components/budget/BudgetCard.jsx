const BudgetCard = ({
  budget,
}) => {
  const percentage =
    Number(
      budget.usagePercentage
    );

  const progressWidth =
    Math.min(
      percentage,
      100
    );

  const getStatusColor =
    () => {
      if (
        budget.status ===
        "Over Budget"
      ) {
        return "bg-red-500";
      }

      if (
        budget.status ===
        "Warning"
      ) {
        return "bg-yellow-500";
      }

      return "bg-emerald-500";
    };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-slate-800">
          {budget.category}
        </h3>

        <span
          className={`
            rounded-full px-3 py-1 text-xs font-medium text-white
            ${
              budget.status ===
              "Over Budget"
                ? "bg-red-500"
                : budget.status ===
                    "Warning"
                  ? "bg-yellow-500"
                  : "bg-emerald-500"
            }
          `}
        >
          {budget.status}
        </span>
      </div>

      <div className="space-y-2 text-sm">
        <p>
          Budget:
          {" "}
          ₹
          {budget.budgetAmount.toLocaleString()}
        </p>

        <p>
          Spent:
          {" "}
          ₹
          {budget.spent.toLocaleString()}
        </p>

        <p>
          Remaining:
          {" "}
          ₹
          {budget.remaining.toLocaleString()}
        </p>
      </div>

      <div className="mt-4">
        <div className="mb-2 flex justify-between text-sm">
          <span>Usage</span>

          <span>
            {
              budget.usagePercentage
            }
            %
          </span>
        </div>

        <div className="h-3 rounded-full bg-slate-200">
          <div
            className={`h-3 rounded-full ${getStatusColor()}`}
            style={{
              width: `${progressWidth}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BudgetCard;