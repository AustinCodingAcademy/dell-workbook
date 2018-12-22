function countWords(inputWords) {
  // SOLUTION GOES HERE
  
  var unique;
  inputWords.every(x=> unique[x]);
  return unique.every(x=> inputWords.reduce())
}

module.exports = countWords