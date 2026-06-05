const EmptyChartState = ({
  title = "No Data Available",
}) => {
  return (
    <div className="flex h-80 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white">
      <p className="text-slate-500">
        {title}
      </p>
    </div>
  );
};

export default EmptyChartState;