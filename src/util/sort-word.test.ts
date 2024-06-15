import { sortWord } from './';

describe('sortWord', () => {
  it('should remove all non-alphanumeric characters', () => {
    const word = 'h-e*l^l&o';
    const result = sortWord(word);
    expect(result).toBe('ehllo');
  });

  it('should convert all characters to lowercase', () => {
    const word = 'Hello';
    const result = sortWord(word);
    expect(result).toBe('ehllo');
  });

  it('should sort the characters in the word', () => {
    const word = 'dcba';
    const result = sortWord(word);
    expect(result).toBe('abcd');
  });

  it('should handle an empty string', () => {
    const word = '';
    const result = sortWord(word);
    expect(result).toBe('');
  });

  it('should handle a string with only non-alphanumeric characters', () => {
    const word = '-^*&$#';
    const result = sortWord(word);
    expect(result).toBe('');
  });

  it('should handle a string with mixed alphanumeric and non-alphanumeric characters', () => {
    const word = 'A1b2C3!';
    const result = sortWord(word);
    expect(result).toBe('123abc');
  });

  it('should handle a string with repeated characters', () => {
    const word = 'aabbcc';
    const result = sortWord(word);
    expect(result).toBe('aabbcc');
  });
});
