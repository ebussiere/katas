const instructorWithLongestName = function (instructors) {
  let nameLength = 0;
  for (const i of instructors) {
    if (i.name.length > nameLength) {
      nameLength = i.name.length;
      instructorLongName = i;
    }
  }
  return instructorLongName;
};

console.log(
  instructorWithLongestName([
    { name: 'Samuel', course: 'iOS' },
    { name: 'Jeremiah', course: 'Web' },
    { name: 'Ophilia', course: 'Web' },
    { name: 'Donald', course: 'Web' },
  ]),
);
console.log(
  instructorWithLongestName([
    { name: 'Matthew', course: 'Web' },
    { name: 'David', course: 'iOS' },
    { name: 'Domascus', course: 'Web' },
  ]),
);
