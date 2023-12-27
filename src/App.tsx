import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <section className="px-4">
        <SearchInput />
      </section>
    </>
  );
}

export default App;
