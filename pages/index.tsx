import { useState } from "react";
import InputSection from "./components/InputSection";
import RowsSection from "./components/RowsSection";
import ResultsSection from "./components/ResultsSection";

export default function Home() {
  const [page, setPage] = useState(1);
  const [rente, setRente] = useState("");
  const [aflossing, setAflossing] = useState("");
  const [rows, setRows] = useState([{ beschrijving: "", bedrag: "" }]);

  const handleNextPage = () => {
    if (page === 1) {
      setPage(2);
    } else if (page === 2) {
      sessionStorage.setItem("rente", rente);
      sessionStorage.setItem("aflossing", aflossing);
      sessionStorage.setItem("rows", JSON.stringify(rows));
      setPage(3);
    }
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hypotheek Berekenen</h1>
      {page === 1 && (
        <InputSection
          rente={rente}
          aflossing={aflossing}
          setRente={setRente}
          setAflossing={setAflossing}
          nextPage={handleNextPage}
        />
      )}
      {page === 2 && (
        <RowsSection
          rows={rows}
          setRows={setRows}
          previousPage={handlePreviousPage}
          nextPage={handleNextPage}
        />
      )}
      {page === 3 && (
        <ResultsSection
          rente={rente}
          aflossing={aflossing}
          rows={rows}
          previousPage={handlePreviousPage}
        />
      )}
    </div>
  );
}
