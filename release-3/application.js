const data = {
  name: "Ordjay",
  school: "Dev Bootcamp",
};

$('#start').on('click', () => {
  const greeting = document.getElementById('greeting');
  greeting.innerText = `Hi ${name}, welcome to ${school}`;
});
