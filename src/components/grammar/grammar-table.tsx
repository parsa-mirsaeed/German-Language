import type { GrammarTable as GrammarTableData } from "@/content/schema/content-types";

type GrammarTableProps = {
  table: GrammarTableData;
  scrollHint?: string;
};

export function GrammarTable({
  table,
  scrollHint = "Scroll horizontally to see all columns when needed.",
}: GrammarTableProps) {
  return (
    <div
      aria-label={`${table.title}. ${scrollHint}`}
      className="grammar-table-wrap"
      role="region"
      tabIndex={0}
    >
      <table className="grammar-table">
        <caption>{table.title}</caption>
        <thead>
          <tr>
            {table.columns.map((column) => (
              <th key={column} scope="col">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={`${table.title}-${rowIndex}`}>
              {row.map((cell, cellIndex) =>
                cellIndex === 0 ? (
                  <th key={cellIndex} scope="row">{cell}</th>
                ) : (
                  <td dir="ltr" key={cellIndex} lang="de">{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
