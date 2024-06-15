import { useEffect, useCallback, useState, ChangeEvent } from "react";
import { fetchURL } from "./util/constants";
import { debounce } from "./util/debounce";
import { sortWord } from "./util/sort-word";

export const WorkerSolution = () => {
  const [data, setData] = useState<Record<string, Array<string>>>({});
  const [rawData, setRawData] = useState<string[]>();
  const [inputValue, setInputValue] = useState<string>("");
  const [anagrams, setAnagrams] = useState<string[]>([]);

  // fetch text file and transform it in an array of words
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

  // setup web worker to transform the data in a hashmap - better for words search
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

  // use debounce function to wait 1s after user wrote the word
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
  // console.log(JSON.stringify(data));

  // handle change event
  // change the input value
  // fire debounce function to check if a word has anagrams
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    debouncedAnagramsLookup(event.target.value);
  };
  return (
    <div>
      <h2>Worker solution: </h2>
      <label htmlFor="input-field">Check anagram: </label>
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
