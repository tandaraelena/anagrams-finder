import { JsonFiles } from "../jsonFiles";
import { WebWorker } from "../webWorker";
import "./app.css";

export const App = () => {
  return (
    <div className="app">
      <h1>Anagrams finder</h1>
      <JsonFiles />
      <WebWorker />
    </div>
  );
};
