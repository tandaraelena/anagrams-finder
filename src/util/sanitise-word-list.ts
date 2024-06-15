import { sortWord } from "./sort-word";

// function which changes the data structure from array to hashmap
// the resulting hashmap will be like: 
// { "aabcinot":["abaction","botanica"] }
export const sanitiseWordsList = (words: string[]) => {
  const newWordsStructure: Record<string, Array<string>> = {};

  words.forEach((word) => {
    const cleanWord = sortWord(word);
    if (!Object.hasOwn(newWordsStructure, cleanWord)) {
      newWordsStructure[cleanWord] = [];
    }
    newWordsStructure[cleanWord].push(word);
  });
  
  return newWordsStructure;
};