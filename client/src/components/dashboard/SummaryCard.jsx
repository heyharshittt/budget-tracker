const SummaryCard = ({
  title,
  value,
  valueClass = "",
}) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <p className="text-slate-500">
        {title}
      </p>

      <h2
        className={`mt-2 text-3xl font-bold ${valueClass}`}
      >
        {value}
      </h2>
    </div>
  );
};

export default SummaryCard;