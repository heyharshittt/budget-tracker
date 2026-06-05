const EmptyState = ({
  title,
  description,
}) => {
  return (
    <div className="py-12 text-center">
      <h3 className="text-xl font-semibold text-slate-700">
        {title}
      </h3>

      <p className="mt-2 text-slate-500">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;