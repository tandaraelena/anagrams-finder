export const fetchURL = "https://raw.githubusercontent.com/dwyl/english-words/master/words.txt";

export const sortWord = (word: string): string => word.replace(/[^A-Za-z0-9]/g,"").toLowerCase().split('').sort().join('');

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
