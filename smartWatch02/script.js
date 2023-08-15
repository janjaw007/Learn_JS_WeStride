// const d2 = new Date().toLocaleString("en-GB");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let yyyy, mmmm, dd, day, hh, mm, ss;
let d = new Date();
d = new Date();
yyyy = d.getFullYear();
mmmm = months[d.getMonth()];
dd = d.getDate();
day = days[d.getDay()];
hh = d.getHours();
mm = d.getMinutes();
ss = d.getSeconds();
let dateState;
dateState = `${day} ${dd} ${mmmm} 
${yyyy}`;

let timeState;
timeState = `${hh}:${mm}:${ss}`;
const ddmy = document.getElementById("ddmy");
const clock = document.getElementById("times");

ddmy.innerHTML = dateState;
clock.innerHTML = timeState;
function clockwork() {
  d = new Date();
  yyyy = d.getFullYear();
  mmmm = months[d.getMonth()];
  dd = d.getDate();
  day = days[d.getDay()];
  hh = d.getHours();
  mm = d.getMinutes();
  ss = d.getSeconds();
  console.log(ss);

  let dateState;
  dateState = `${day} ${dd} ${mmmm} 
${yyyy}`;

  let timeState;
  timeState = `${hh}:${mm}:${ss}`;
  const ddmy = document.getElementById("ddmy");
  const clock = document.getElementById("times");

  ddmy.innerHTML = dateState;
  clock.innerHTML = timeState;
}

function startClock() {
  clockwork();
}
setInterval(startClock, 1000);
