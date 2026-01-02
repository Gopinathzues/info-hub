
const hour = new Date().getHours();
const greet =
  hour < 12 ? "Good Morning" :
  hour < 18 ? "Good Afternoon" :
  "Good Evening";

document.querySelector("header h1").innerText =
  `${greet}, welcome to your Info Hub 👋`;
