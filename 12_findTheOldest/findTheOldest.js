const findTheOldest = function (people) {
  arr = people.reduce((oldest, currAge) => {
    const oldest_man = age(oldest.yearOfBirth, oldest.yearOfDeath);
    const current_man = age(currAge.yearOfBirth, currAge.yearOfDeath);

    return oldest_man > current_man ? oldest : currAge;
  });
  return arr; //reduce array and returns
};

const age = (birth, death) => {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};
// Do not edit below this line
module.exports = findTheOldest;
