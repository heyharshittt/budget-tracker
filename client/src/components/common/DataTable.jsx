const DataTable = ({
  columns,
  data,
  renderActions,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-slate-50">
            {columns.map((column) => (
              <th
                key={column.key}
                className="p-4 text-left"
              >
                {column.label}
              </th>
            ))}

            {renderActions && (
              <th className="p-4 text-left">
                Actions
              </th>
            )}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr
              key={row._id}
              className="border-b"
            >
              {columns.map(
                (column) => (
                  <td
                    key={
                      column.key
                    }
                    className="p-4"
                  >
                    {column.render
                      ? column.render(
                          row
                        )
                      : row[
                          column.key
                        ]}
                  </td>
                )
              )}

              {renderActions && (
                <td className="p-4">
                  {renderActions(
                    row
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;