## Anagrams Finder
Anagrams Finder is a React application that allows users to input a string of characters and find anagrams for the input string. The application utilizes a web worker to efficiently process a large dataset of words and leverages a debounce function to optimize performance.

## Features
Input Field: Allows the user to enter a string of characters.
Anagram Finder: Displays a list of anagrams for the input string, including the input itself if it is a valid word.
No Matches Message: Communicates clearly when no anagrams are found for the input string.
Debounce Function: Optimizes performance by waiting for user input to settle before processing.
Web Worker: Offloads data processing to a web worker for better performance with large datasets.

## Installation

Clone the repository:
```
git clone https://github.com/yourusername/anagrams-finder.git
cd anagrams-finder
```

Install the dependencies:
```
npm install
```
or
```
yarn install
```

Start the development server:
```
npm start
```
or
```
yarn start
```

The application will be available at http://localhost:3000.

## Project Structure
- src/App.tsx: The main application component.
- src/Main.tsx: The main component that handles input and displays anagrams.
- src/utils.ts: Utility functions, including the debounce function and word sorting function.
- src/worker.ts: Web worker script for processing word data.
- public/: Public assets and the HTML template.

## Usage

Enter a string of characters in the input field.
The application will display a list of anagrams for the input string.
If no anagrams are found, a message will be displayed.

## Implementation Details
### Debounce Function
The debounce function delays the anagram lookup by 1 second after the user stops typing, optimizing performance by reducing the number of function calls.

### Web Worker
A web worker is used to process the word list and create a hashmap for efficient anagram lookups. This offloads the heavy processing from the main thread, improving performance.

### Sorting Words
Words are sanitized by removing non-alphanumeric characters, converting to lowercase, sorting the characters, and then joining them back together. This ensures that anagrams have the same key in the hashmap.

Happy anagram hunting! If you have any questions or feedback, feel free to reach me out.
