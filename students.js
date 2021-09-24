const students = [
  'Nacyme',
  'Bertrand',
  'Cédric',
  'Quentin',
  'Jérémy',
  'Caroline',
  'Héloïse',
  'Benoît',
  'Claire',
  'Franck',
  'Guillaume D.',
  'Guillaume K.',
  'Luigi',
  'Othmane',
  'Pierre',
  'Romain',
  'Sonia',
  'Jonathan',
  'Marion',
  'Victor',
];

const randStudents = students.sort((st1, st2) => {
  return Math.random() - 0.5;
});

// console.log(randStudents);

console.log(randStudents.slice(0, 5));
console.log(randStudents.slice(5, 10));
console.log(randStudents.slice(10, 15));
console.log(randStudents.slice(15, 20));
