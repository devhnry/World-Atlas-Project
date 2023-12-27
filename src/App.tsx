// import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import "./index.css";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <section className="px-[5.5vw]">
        <SearchInput />
      </section>
    </>
  );
}

export default App;
