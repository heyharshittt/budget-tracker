import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ExpensePieChart = ({
  data,
}) => {
  return (
    <div className="h-80 rounded-2xl bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Expense Categories
      </h3>

      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpensePieChart;