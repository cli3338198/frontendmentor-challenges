import Choices from "./components/Choices";
import Header from "./components/Header";
import Rules from "./components/Rules";

function App() {
  return (
    <div className="game">
      {/* header */}
      <Header />

      {/* main */}
      <main>
        {/* user pick screen */}
        <Choices />

        {/* user vs house pick screen */}
      </main>

      {/* rules modal */}
      <Rules />

      {/* rules modal button */}
    </div>
  );
}

export default App;
