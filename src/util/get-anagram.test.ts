import { getAnagram } from './';
import { sortWord } from './sort-word';

// Mock the sortWord function
jest.mock('./sort-word', () => ({
  sortWord: jest.fn(),
}));

// Mock the fetch function globally
global.fetch = jest.fn();

describe('getAnagram', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    jest.clearAllMocks();
  });

  it('should fetch anagrams for the given word', async () => {
    const word = 'listen';
    const sortedWord = 'eilnst';
    const mockResponse = { anagrams: ['silent', 'listen', 'enlist'] };

    (sortWord as jest.Mock).mockReturnValue(sortedWord);
    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await getAnagram(word);

    expect(sortWord).toHaveBeenCalledWith(word);
    expect(global.fetch).toHaveBeenCalledWith(
      `http://localhost:4000/json/${sortedWord.length}/${sortedWord}.json`
    );
    expect(result).toEqual(mockResponse);
  });

  it('should handle errors', async () => {
    const word = 'errorword';
    const sortedWord = 'deorrwor';
    const mockError = new Error('Fetch failed');

    (sortWord as jest.Mock).mockReturnValue(sortedWord);
    (global.fetch as jest.Mock).mockRejectedValue(mockError);

    await expect(getAnagram(word)).rejects.toThrow('Fetch failed');

    expect(sortWord).toHaveBeenCalledWith(word);
    expect(global.fetch).toHaveBeenCalledWith(
      `http://localhost:4000/json/${sortedWord.length}/${sortedWord}.json`
    );
  });
});
