export const fetchData = async (setData: React.Dispatch<React.SetStateAction<string[]>>) => {
  await fetch(
    "https://raw.githubusercontent.com/dwyl/english-words/master/words.txt"
  )
    .then((response) => response.text())
    .then((list) => {
      const wordList: string[] = list.split("\n").map((word) => word.trim());
      setData(wordList);
    })
    .catch((err) => console.log(err.message));
};

export const sanitiseWord = (word: string) => word.replace(/[^A-Za-z0-9]/g,'').toLowerCase().split('').join('');


export const sanitiseWordsList = (words: string[]) => {
  const newWordsStructure: Record<string, Array<string>> = {};

  words.forEach((word) => {
    const cleanWord = sanitiseWord(word);
    if (!Object.hasOwn(newWordsStructure, cleanWord)) {
      newWordsStructure[cleanWord] = [];
    }
    newWordsStructure[cleanWord].push(cleanWord);
  });
};