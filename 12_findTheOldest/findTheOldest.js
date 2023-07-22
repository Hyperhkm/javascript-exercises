const findTheOldest = function(people) {
    const todayDate = new Date().getFullYear();
    const oldestPeople = people.sort(function(a,b) {
        if (!a.yearOfDeath) {a.yearOfDeath = todayDate;}
        if (!b.yearOfDeath) {b.yearOfDeath = todayDate;}
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        if (lastPerson > nextPerson) {
          return -1;
        } else {
          return 1;
        }
      });
    return oldestPeople[0];        
};
// Do not edit below this line
module.exports = findTheOldest;
/* 
The program will take an input of array with three objects
If the person doesn't have deathBirth, then calculate age with today's date
Calculate the age of each one
Get the object of the oldest one
it will return the name within the object of the oldest person
*/