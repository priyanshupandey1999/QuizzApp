questions = [
  {
    question: "Which crop is sown on the largest area in India?",
    A: "Rice",
    B: "Wheat",
    C: "Sugarcane",
    D: "Paddy",
    answer: "A",
  },
  {
    question: "Entomology is the science that studies",
    A: "Behaviour of human beings",
    B: "Insects",
    C: "The origin and history of technical and scientific terms",
    D: "The formation of rocks",
    answer: "B",
  },
  {
    question: "Grand Central Terminal, Park Avenue, New York is the world's",
    A: "Highest Railway Station",
    B: "Longest Railway Station",
    C: "Largest Railway Station",
    D: "None of the above",
    answer: "C",
  },
  {
    question: "The world smallest country is",
    A: "Canada",
    B: "USA",
    C: "Vatican City",
    D: "Venezula",
    answer: "C",
  },
  {
    question: "Novak Djokovic is a famous player associated with the game of",
    A: "Hockey",
    B: "Football",
    C: "Cricket",
    D: "Lawn Tennis",
    answer: "D",
  },
];

setQuestion = (index) => {
  let ques = document.getElementById("question");
  let optionA = document.getElementById("option-A-label");
  let optionB = document.getElementById("option-B-label");
  let optionC = document.getElementById("option-C-label");
  let optionD = document.getElementById("option-D-label");
  ques.innerText = questions[index].question;
  optionA.innerText = questions[index].A;
  optionB.innerText = questions[index].B;
  optionC.innerText = questions[index].C;
  optionD.innerText = questions[index].D;
};

let index = 0;
let score = 0;

call_functions = () => {
  setQuestion(index);
};

call_functions();

increase_index = () => {
  let getSelectedValue = document.querySelector(
    'input[name="options"]:checked'
  );
  if (getSelectedValue != null) {
    if (getSelectedValue.value == questions[index].answer) {
      score += 10;
    }
    document.getElementById("error").innerText = "";

    getSelectedValue.checked = false;
    index++;
    if (index < questions.length) {
      setQuestion(index);
    } else {
      score_board();
    }
  } else {
    document.getElementById("error").innerText = "Answer can't be left blank";
  }
};

reset = () => {
  index = 0;
  let container = document.getElementById("container");
  console.log(container);
  container.style.display = "block";
  document.getElementById("block").innerHTML = "";
  document.getElementById("block").style.display = "none";
  call_functions();
};

score_board = () => {
  //display the score
  let view = `<div class="result">
      <h1>Congratulations! <br>You have scored ${score}/50.</h1>
      <button onclick="reset()">Reset</button>

      </div>`;
  let container = document.getElementById("container");
  console.log(container);
  container.style.display = "none";
  document.getElementById("block").style.display = "block";
  document.getElementById("block").innerHTML = view;
};
