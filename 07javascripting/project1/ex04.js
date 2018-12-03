function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return(messages.map(x=>x.message)).filter(y => y.length < 50);
}

module.exports = getShortMessages
