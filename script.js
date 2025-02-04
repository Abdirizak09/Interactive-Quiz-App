// Questions for the quiz
const quizData = [
    {
      question: "What does HTML stand for?",
      a: "HyperText Markup Language",
      b: "HighText Machine Language",
      c: "Hyperloop Machine Language",
      d: "None of the above",
      correct: "a",
    },
    {
      question: "What does CSS stand for?",
      a: "Creative Style Sheets",
      b: "Cascading Style Sheets",
      c: "Computer Style Sheets",
      d: "Colorful Style Sheets",
      correct: "b",
    },
    {
      question: "What does JS stand for?",
      a: "JavaScript",
      b: "JavaSource",
      c: "JustScript",
      d: "None of the above",
      correct: "a",
    },
  ];
  
  // Get references to HTML elements
  const quiz = document.getElementById("quiz");
  const submitBtn = document.getElementById("submit");
  const results = document.getElementById("results");
  
  // Function to load the quiz
  function loadQuiz() {
    quiz.innerHTML = ""; // Clear previous quiz content
    quizData.forEach((data, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
  
      questionDiv.innerHTML = `
        <h3>${index + 1}. ${data.question}</h3>
        <label>
          <input type="radio" name="question${index}" value="a">
          ${data.a}
        </label><br>
        <label>
          <input type="radio" name="question${index}" value="b">
          ${data.b}
        </label><br>
        <label>
          <input type="radio" name="question${index}" value="c">
          ${data.c}
        </label><br>
        <label>
          <input type="radio" name="question${index}" value="d">
          ${data.d}
        </label>
      `;
      quiz.appendChild(questionDiv);
    });
  }
  
  // Function to calculate the score
  function calculateScore() {
    let score = 0;
  
    quizData.forEach((data, index) => {
      const selectedAnswer = document.querySelector(
        `input[name="question${index}"]:checked`
      );
  
      if (selectedAnswer && selectedAnswer.value === data.correct) {
        score++;
      }
    });
  
    return score;
  }
  
  // Event listener for submit button
  submitBtn.addEventListener("click", () => {
    const score = calculateScore();
    results.textContent = `You scored ${score} out of ${quizData.length}`;
  });
  
  // Load the quiz on page load
  loadQuiz();
  