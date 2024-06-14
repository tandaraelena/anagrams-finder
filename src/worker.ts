/* eslint-disable no-restricted-globals */
self.onmessage = (event) => {
  const rawData = event.data;
  const sortWord = (word: string): string => word.replace(/[^A-Za-z0-9]/g,"").toLowerCase().split('').sort().join('');
  
  const sanitiseWordsList = (words: string[]) => {
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

  const sanitizedData = sanitiseWordsList(rawData);
  postMessage(sanitizedData);
};

export {}