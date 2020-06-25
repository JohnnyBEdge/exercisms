class WordSearch {
  constructor(grid) {
      this.grid = grid;
  }

  fullStringMatch(startCoords, endCoords, word) {
      // This indicates the direction we are searching through
      const direction = [
          Math.sign(endCoords[0] - startCoords[0]),
          Math.sign(endCoords[1] - startCoords[1])
      ];
      // Check that every char in our range matches the given word
      return [...word].every((char, i) =>
          char === this.grid[(startCoords[0] + i * direction[0])][(startCoords[1] + i * direction[1])]);
  }

  findLastCharWithinDistance(rowI, startCoords, word, distance) {
      const charToFind = word.charAt(word.length - 1);
      // Check the three positions where we need the character to be (diagonal left, vertical, diagonal right)
      for (let charI = startCoords[1] - distance; charI <= startCoords[1] + distance; charI += distance) {
          // If the character matches, we then ensure that the full string matches as well
          if (this.grid[rowI][charI] === charToFind && this.fullStringMatch(startCoords, [rowI, charI], word)) {
              // If we're here, we have found the word: we can return the end coordinates, adjusted with + 1
              return [rowI + 1, charI + 1];
          }
      }
  }

  findWord(word, startCoords) {
      // I chose to find the matching last char of the word, so I automatically exclude all
      // occurrencies where the word would not fit in length
      const distance = word.length - 1;
      // The loop runs through the rows at the correct distance so we can search for the matching last char
      for (let rowI = startCoords[0] - distance; rowI <= startCoords[0] + distance; rowI += distance) {
          // Check that the row exists (it's within the grid boundaries)
          if (this.grid[rowI]) {
              const coords = this.findLastCharWithinDistance(rowI, startCoords, word, distance);
              if (coords) return coords;
          }
      }
  }

  find1stCharInRow(rowI, word) {
      for (let charI = 0; charI < this.grid[rowI].length; charI++) {
          if (this.grid[rowI][charI] === word[0]) {
              // Whenever we find a match for the 1st char, we save the startCoords and look for endCoords
              const startCoords = [rowI, charI];
              const coords = {
                  start: [rowI + 1, charI + 1],
                  end: this.findWord(word, startCoords),
              };
              if (coords.end) return coords;
          }
      }
  }

  find(words) {
      return words.reduce((result, word) => {
          result[word] = undefined;
          for (let rowI = 0; rowI < this.grid.length; rowI++) {
              // Looping through rows and searching for the first char of the word
              const coords = this.find1stCharInRow(rowI, word);
              if (coords) {
                  // If we have coords, it means we have found the word and we break out of the loop
                  result[word] = coords;
                  break;
              }
          }
          return result;
      }, {});
  }
}
export default WordSearch;