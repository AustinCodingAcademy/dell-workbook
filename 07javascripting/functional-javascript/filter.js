function getShortMessages(messages) {
  return messages.filter(function (m) {
    if (m.message.length < 50) {
      return m.message;
    }
  }).map(function (m) {
    return m.message;
  });
}

module.exports = getShortMessages