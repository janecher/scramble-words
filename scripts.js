const data = [{
    word : "cat",
    scrumble : "tac",
    description : "A pet"
  },
  {
    word : "car",
    scrumble : "cra",
    description : "Ride on the road"
  },
  {
    word : "school",
    scrumble : "coolsh",
    description : "Where kids study"
  },
  {
    word : "sun",
    scrumble : "nus",
    description : "The star"
  },
  {
    word : "moon",
    scrumble : "mono",
    description : "At night in the sky"
  },
  {
    word : "circle",
    scrumble : "cleric",
    description : "Geometry shape"
  },
  {
    word : "yellow",
    scrumble : "wollye",
    description : "Color"
  },
  {
    word : "burger",
    scrumble : "rugber",
    description : "food"
  },
  {
    word : "book",
    scrumble : "kobo",
    description : "Read"
  },
  {
    word : "tree",
    scrumble : "reet",
    description : "Plant"
  }
];

const start = document.getElementById('start');
const word = document.getElementById('word');
const answer = document.getElementById('answer');
const hint = document.getElementById('hint');
const check = document.getElementById('check');
const clear = document.getElementById('clear');
const result = document.getElementById('result');


let scrumble;

function SetScrumbleWord(){
  const rand = Math.floor((Math.random() * data.length));
  scrumble = data[rand];
};

start.addEventListener('click', () => {
  SetScrumbleWord();
  word.innerHTML = scrumble.scrumble;
  answer.value = "";
  result.innerHTML = "";
});

hint.addEventListener('click', () => {
  if(word.innerHTML.trim().length == 0){
    alert("Push the start button");
    return;
  }
  alert(scrumble.description);
});

clear.addEventListener('click', () => {
  word.innerHTML = "";
  answer.value = "";
  result.innerHTML = "";
});

check.addEventListener('click', () => {
  if(word.innerHTML.trim().length == 0){
    alert("Push the start button");
    return;
  }
  else if(answer.value === ""){
    alert("Input the answer");
    return;
  }
  else if(answer.value === scrumble.word){
    result.style.color = "green";
    result.textContent = "Correct";
  }
  else{
    result.style.color = "red";
    result.innerHTML = "Incorrect";
  }
});
