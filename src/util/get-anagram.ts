import { sortWord } from "./sort-word";

export const getAnagram = async (val = "") => {
  const cleanWord = sortWord(val);

  const result = await (
    await fetch(
      `http://localhost:4000/json/${cleanWord.length}/${cleanWord}.json`
    )
  ).json();
  return result;
};