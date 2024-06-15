## Anagrams Finder

Anagrams Finder is a React application that allows users to input a string of characters and find anagrams for the input string. The application utilizes two solutions

1. A web worker to efficiently process a large dataset of words and leverages a debounce function to optimize performance.
2. Or manually running a script which generates multiple json files categorised by length and utilised on the client side by running a local server.

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

Create Static JSON Files:

```
npm run process-anagram
```

or

```
yarn run process-anagram
```

This will create a json folder containing multiple numbered folders. The number represents the length of the sorted anagram word.

Start the server:

```
npm jsonserver
```

or

```
yarn jsonserver
```

The server will be available at http://localhost:4000.

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

- src/components/app: Contains the main application component.
- src/components/jsonFiles: Contains the solution that uses the JSON files generated.
- src/components/webWorker: Contains the Web Worker solution and the web worker script for processing word data.
- src/util: Contains utility functions, including the debounce function and word sorting function.
- data/: Folder with `words.txt` file and the static files manually generated.
  public/: Public assets and the HTML template.

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

### Static files

Generating the static files and sorting the anagrams by length provides a fast API lookup of the word. The API response will return the list of anagrams as an array instantly.

Happy anagram hunting! If you have any questions or feedback, feel free to reach me out.
