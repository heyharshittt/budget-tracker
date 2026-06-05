const GoalCard = ({
  goal,
}) => {
  const percentage =
    Math.min(
      (
        (goal.currentAmount /
          goal.targetAmount) *
        100
      ).toFixed(2),
      100
    );

  const remaining =
    goal.targetAmount -
    goal.currentAmount;

  const daysRemaining =
    Math.ceil(
      (
        new Date(
          goal.targetDate
        ) -
        new Date()
      ) /
        (1000 *
          60 *
          60 *
          24)
    );

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-slate-800">
          {goal.title}
        </h3>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          {percentage}%
        </span>
      </div>

      <div className="space-y-2 text-sm">
        <p>
          Target:
          {" "}
          ₹
          {goal.targetAmount.toLocaleString()}
        </p>

        <p>
          Saved:
          {" "}
          ₹
          {goal.currentAmount.toLocaleString()}
        </p>

        <p>
          Remaining:
          {" "}
          ₹
          {remaining.toLocaleString()}
        </p>

        <p>
          Days Left:
          {" "}
          {daysRemaining}
        </p>
      </div>

      <div className="mt-4 h-3 rounded-full bg-slate-200">
        <div
          className="h-3 rounded-full bg-blue-500"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
};

export default GoalCard;