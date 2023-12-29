import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import useTheme from "../hooks/useTheme";

export default function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Outlet />
    </>
  );
}
