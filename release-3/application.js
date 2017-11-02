const data = {
  name: "Ordjay",
  school: "Dev Bootcamp",
};

$('#start').on('click', () => {
  const greeting = document.getElementById('greeting');
  greeting.innerText = `Hi ${data.name}, welcome to ${data.school}`;
});


// const data = {
//   name: "Ordjay",
//   school: "Dev Bootcamp",
// };

// $('#start').on('click', () => {
//   const greeting = document.getElementById('greeting');
//   greeting.innerText = `Hi ${data.name}, welcome to ${data.school}`;
// });
