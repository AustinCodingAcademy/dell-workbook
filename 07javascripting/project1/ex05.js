function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(x => goodUsers.some(y => y === x));
    // SOLUTION GOES HERE
  };
}

module.exports = checkUsersValid;
