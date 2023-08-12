import React from "react";
import Button from "@/pages/atoms/Button";

interface ResultsSectionProps {
  rente: string;
  aflossing: string;
  rows: { beschrijving: string; bedrag: string }[];
  previousPage: () => void;
}

const ResultsSection = ({
  rente,
  aflossing,
  rows,
  previousPage,
}: ResultsSectionProps) => {
  return (
    <div>
      <h2>Resultaten</h2>
      <p>Rente: {rente}</p>
      <p>Aflossing: {aflossing}</p>
      <h3>Ingevulde rijen:</h3>
      {rows.map((row, index) => (
        <div key={index}>
          <p>Beschrijving: {row.beschrijving}</p>
          <p>Bedrag: {row.bedrag}</p>
        </div>
      ))}

      <Button onClick={previousPage} colorClass="blue" label="Vorige" />
    </div>
  );
};

export default ResultsSection;
