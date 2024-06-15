import { ChangeEvent, useState } from "react";
import { getAnagram } from "./util/get-anagram";

export const MainOptimised = () => {
  const [inputValue, setInputValue] = useState("");
  const [anagrams, setAnagrams] = useState([]);

  const checkAnagrams = async (val: string) => {
    try {
      const result = await getAnagram(val);
      setAnagrams(result);
    } catch (error: any) {
      setAnagrams([]);
      console.log(error.message);
      console.log(error.code);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    checkAnagrams(event.target.value);
  };

  return (
    <div>
      <h2>Json files solution: </h2>
      <label htmlFor="input-fiel">Check anagram: </label>
      <input value={inputValue} onChange={handleChange} id="input-fiel" />
      <div>{anagrams.join(", ")}</div>
    </div>
  );
};
