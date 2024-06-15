import { useEffect, useCallback, useState, ChangeEvent } from "react";
import { fetchURL, debounce, sortWord } from "./utils";

const Main = () => {
  const [data, setData] = useState<Record<string, Array<string>>>({});
  const [rawData, setRawData] = useState<string[]>();
  const [inputValue, setInputValue] = useState<string>("");
  const [anagrams, setAnagrams] = useState<string[]>([]);

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

  const debouncedAnagramsLookup = useCallback(
    (val: string) => {
      debounce(() => {
        const cleanWord = sortWord(val);
        if (data[cleanWord]) {
          setAnagrams(data[cleanWord]);
        }
      }, 1000);
    },
    [data]
  );

  // handle change event
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    debouncedAnagramsLookup(event.target.value);
  };

  return (
    <div>
      <h1>Anagrams finder</h1>
      <label htmlFor="input-field">Check anagram</label>
      <input value={inputValue} onChange={handleChange} />
      <div>
        {inputValue.length > 0 && anagrams.length > 0 ? (
          <div>
            {anagrams.map((a, i) => (
              <p key={i}>{a}</p>
            ))}
          </div>
        ) : inputValue.length > 0 && anagrams.length === 0 ? (
          <p>No anagrams found</p>
        ) : null}
      </div>
    </div>
  );
};

export default Main;
