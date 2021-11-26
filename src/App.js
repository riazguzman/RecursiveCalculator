import { TermCalculator } from "./components/Calculator";
import { PetersNumber } from "./components/PetersNumber.js";
import { Graph } from "./components/Graph";

const App = () => {
  return (
    <div>
      <PetersNumber />
      <TermCalculator />
      <Graph />
    </div>
  );
};

export default App;
