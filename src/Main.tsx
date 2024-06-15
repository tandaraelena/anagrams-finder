import { MainOptimised } from "./Main-optimised";
import { WorkerSolution } from "./WorkerSolution";
import "./index.css";

const Main = () => {
  return (
    <div className="main">
      <h1>Anagrams finder</h1>
      <MainOptimised />
      <WorkerSolution />
    </div>
  );
};

export default Main;
