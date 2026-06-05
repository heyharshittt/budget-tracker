const FormModal = ({
  isOpen,
  title,
  children,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-xl"
          >
            ×
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default FormModal;