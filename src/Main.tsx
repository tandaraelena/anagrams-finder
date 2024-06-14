import { useEffect, useState } from "react";
import { fetchURL } from "./utils";

const Main = () => {
  const [data, setData] = useState<Record<string, Array<string>>>({});
  const [rawData, setRawData] = useState<string[]>();
  const [inputValue, setInputValue] = useState<string>("");

  // fetch data
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(fetchURL)
          .then((res) => res.text())
          .then((response) => {
            return response.split("\n").map((word) => word.trim());
          });
        setRawData(response);
      } catch (error) {
        console.log((error as { message: string }).message);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (rawData && rawData?.length > 0) {
      const worker = new Worker(new URL("./worker.ts", import.meta.url));

      worker.onmessage = (event) => {
        setData(event.data);
      };

      worker.postMessage(rawData);

      return () => {
        worker.terminate();
      };
    }
  }, [rawData]);

  console.log("data", JSON.stringify(data));

  return (
    <div>
      <h1>Anagrams finder</h1>
      <input value={inputValue} />
    </div>
  );
};

export default Main;
