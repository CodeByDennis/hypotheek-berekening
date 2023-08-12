import React from "react";
import Button from "@/pages/atoms/Button";

interface RowsSectionProps {
  rows: { beschrijving: string; bedrag: string }[];
  setRows: (rows: { beschrijving: string; bedrag: string }[]) => void;
  previousPage: () => void;
  nextPage: () => void;
}

const RowsSection = ({
  rows,
  setRows,
  previousPage,
  nextPage,
}: RowsSectionProps) => {
  const handleRowChange = (
    index: number,
    field: keyof (typeof rows)[0],
    value: string
  ) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { beschrijving: "", bedrag: "" }]);
  };

  const handleDeleteRow = (index: number) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <div>
      {rows.map((row, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Beschrijving"
            value={row.beschrijving}
            onChange={(e) =>
              handleRowChange(index, "beschrijving", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Bedrag"
            value={row.bedrag}
            onChange={(e) => handleRowChange(index, "bedrag", e.target.value)}
          />
          <Button
            onClick={() => handleDeleteRow(index)}
            label="Verwijder"
            colorClass="red"
          />
        </div>
      ))}
      <Button
        onClick={handleAddRow}
        colorClass="zinc"
        icon="plus"
        label="Voeg een rij toe"
      />
      <Button onClick={previousPage} colorClass="red" label="Vorige" />
      <Button onClick={nextPage} colorClass="blue" label="Volgende" />
      <br />
    </div>
  );
};

export default RowsSection;
