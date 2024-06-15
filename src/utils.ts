export const fetchURL = "https://raw.githubusercontent.com/dwyl/english-words/master/words.txt";

// function which removes all characters of a word and lowercase it  
export const sortWord = (word: string): string => word.replace(/[^A-Za-z0-9]/g,"").toLowerCase().split('').sort().join('');

// timer function which delays the anagrams finder
export const debounce = (callbackFn: (val:string) => void, delay: number) => {
  const timer = setTimeout(callbackFn,delay);
  
  // cleanup timer
  return () => clearTimeout(timer);
}

// function which changes the data structure from array to hashmap
// the resulting hashmap will be like: 
// { "aabcinot":["abaction","botanica" }
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