
const students = [
  {
    name: 'Ordjay',
    favoriteColor: 'black',
  },
  {
    name: 'Ocksray',
    favoriteColor: 'grey',
  },
  {
    name: 'Akelay',
    favoriteColor: 'blue',
  },
  {
    name: 'Yskay',
    favoriteColor: 'blue',
  }
];


const getStudentsByFavoriteColor = (color) => {
  const matchingStudents = students.filter(student => student.color === color);
};

$('#start').on('click', () => {
  const container = $('#container');
  const blueStudents = getStudentsByFavoriteColor('blue');
  blueStudents.forEach((student) => {
    container.append(`<div>Student ${student.name} likes the color ${student.favoriteColor}`);
  });
});
