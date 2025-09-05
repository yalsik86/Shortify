import { useState } from "react";
import Home from "./pages/HomePage";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" ? (
        <Home onSwitch={() => setPage("analytics")} />
      ) : (
        <AnalyticsPage onSwitch={() => setPage("home")} />
      )}
    </>
  );
}

export default App;