import type { GrammarTable as GrammarTableData } from "@/content/schema/content-types";

type GrammarTableProps = {
  table: GrammarTableData;
};

export function GrammarTable({ table }: GrammarTableProps) {
  return (
    <div className="grammar-table-wrap">
      <table className="grammar-table">
        <caption>{table.title}</caption>
        <thead>
          <tr>
            {table.columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={`${table.title}-${rowIndex}`}>
              {row.map((cell, cellIndex) =>
                cellIndex === 0 ? (
                  <th key={cellIndex} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={cellIndex} lang={cellIndex > 0 ? "de" : undefined}>
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
