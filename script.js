const card = document.querySelectorAll(".cell");
const front = document.querySelectorAll(".front");
const container = document.querySelector(".container");
const score = document.querySelector(".score span");

shuffleImage();
clicking();
function shuffleImage() {
  card.forEach((c) => {
    const num = [...Array(card.length).keys()];
    const random = Math.floor(Math.random() * card.length);

    c.style.order = num[random];
  });
}

function clicking() {
  for (let i = 0; i < card.length; i++) {
    front[i].classList.add("show");

    setInterval(() => {
      front[i].classList.remove("show");
    }, 2000);

    card[i].addEventListener("click", () => {
      front[i].classList.add("flip");
      const filppedCard = document.querySelectorAll(".flip");

      if (filppedCard.length == 2) {
        container.style.pointerEvents = "none";

        setInterval(() => {
          container.style.pointerEvents = "all";
        }, 1000);

        match(filppedCard[0], filppedCard[1]);
      }
    });
  }
}

function match(cardOne, cardTwo) {
  if (cardOne.dataset.index == cardTwo.dataset.index) {
    score.innerHTML = parseInt(score.innerHTML) + 1;

    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");

    cardOne.classList.add("match");
    cardTwo.classList.add("match");
  } else {
    setTimeout(() => {
      cardOne.classList.remove("flip");
      cardTwo.classList.remove("flip");
    }, 1000);
  }
  // Set the initial time in seconds
  let time = 60;

  // Get the timer element from the HTML
  const timerElement = document.getElementById("timer");

  // Function to update the timer display
  function updateTimerDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerElement.textContent = `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  // Function to handle the timer
  function startTimer() {
    updateTimerDisplay();
    const timerInterval = setInterval(() => {
      time--;
      updateTimerDisplay();

      // Check if the time has reached 0
      if (time === 0) {
        clearInterval(timerInterval);
        // Add your code here to handle the end of the game or any other action
        alert("You lost!");

        shuffleall("Time's up!");
      }
    }, 1000);
  }

  // Call the startTimer function to begin the countdown
  startTimer();
}
document.getElementById("btn1").addEventListener("click", function () {
  location.reload(); // This will refresh the page
});
