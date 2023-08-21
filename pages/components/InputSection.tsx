// components/InputSection.tsx
import React from "react";
import Button from "@/pages/atoms/Button";

interface InputSectionProps {
  rente: string;
  aflossing: string;
  setRente: (value: string) => void;
  setAflossing: (value: string) => void;
  nextPage: () => void;
}

const InputSection = ({
  rente,
  aflossing,
  setRente,
  setAflossing,
  nextPage,
}: InputSectionProps) => {
  return (
    <div>
      <label>Rente: </label>
      <input
        type="text"
        value={rente}
        onChange={(e) => setRente(e.target.value)}
      />
      <br />
      <label>Aflossing: </label>
      <input
        type="text"
        value={aflossing}
        onChange={(e) => setAflossing(e.target.value)}
      />
      <br />
      <Button onClick={nextPage} colorClass="blue" label="Volgende" />
    </div>
  );
};

export default InputSection;
