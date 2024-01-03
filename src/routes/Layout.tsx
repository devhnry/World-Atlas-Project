import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import useTheme from "../hooks/useTheme";

export default function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main>
      <header>
        <Header theme={theme} toggleTheme={toggleTheme} />
      </header>
      <div className="px-[5.5vw]">
        <Outlet />
      </div>
    </main>
  );
}
