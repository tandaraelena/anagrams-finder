// function which removes all characters of a word and lowercase it  
export const sortWord = (word: string): string => word.replace(/[^A-Za-z0-9]/g,"").toLowerCase().split('').sort().join('');

