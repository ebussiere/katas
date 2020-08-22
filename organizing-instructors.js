const organizeInstructors = function (instructors) {
  let courses = [];
  result = {};
  for (const i of instructors) {
    if (!courses.includes(i.course)) {
      courses.push(i.course);
    }
  }
  for (let i = 0; i < courses.length; i++) {
    let courseInstructors = [];
    for (const j of instructors) {
      if (courses[i] === j.course) {
        courseInstructors.push(j.name);
      }
    }
    result[courses[i]] = courseInstructors;
  }
  return result;
};

console.log(
  organizeInstructors([
    { name: 'Samuel', course: 'iOS' },
    { name: 'Victoria', course: 'Web' },
    { name: 'Karim', course: 'Web' },
    { name: 'Donald', course: 'Web' },
  ]),
);

console.log(
  organizeInstructors([
    { name: 'Brendan', course: 'Blockchain' },
    { name: 'David', course: 'Web' },
    { name: 'Martha', course: 'iOS' },
    { name: 'Carlos', course: 'Web' },
  ]),
);
