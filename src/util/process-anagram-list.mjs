import { readFileSync, mkdirSync, existsSync, writeFileSync } from "fs";

export const sortWord = (word) => word.replace(/[^A-Za-z0-9]/g,"").toLowerCase().split('').sort().join('');

const sanitiseWordsList = (words) => {
  const newWordsStructure= {};

  words.forEach((word) => {
    const cleanWord = sortWord(word);
    if (!Object.hasOwn(newWordsStructure, cleanWord)) {
      newWordsStructure[cleanWord] = [];
    }
    newWordsStructure[cleanWord].push(word);
  });
  
  return newWordsStructure;
};

const writeAnagram = (sortedAnagram = "", data = []) => {
  const anagramLength = sortedAnagram.length;
  const dirName = `data/json/${anagramLength}`;
  const dirExists = existsSync(dirName);

  if(!dirExists) {
    mkdirSync(dirName, {recursive: true});
  }
  writeFileSync(`${dirName}/${sortedAnagram}.json`,JSON.stringify(data));
  console.log(dirExists)
}

const fileData = readFileSync(`data/words.txt`, "UTF8");

const result = sanitiseWordsList(fileData.split('\n'))

Object.keys(result).forEach((key) => {
  writeAnagram(key,result[key]);
})