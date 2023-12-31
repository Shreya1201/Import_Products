import Display from "./Components/Display";
import FileInputPage from "./Components/FileInputPage";
import Import from "./Components/Import";
import { Route, Routes, Router } from "react-router-dom";
import DataTable from "./Components/DataTable";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Import />} />
        <Route path="/display" element={<Display />} />
        <Route path="/file" element={<FileInputPage />} />
        <Route path="/datatable" element={<DataTable />} />
      </Routes>
    </div>
  );
}

export default App;
