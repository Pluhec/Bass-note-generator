// Tones
let bassSounds = {
  "A1": new Audio("bassTones/A (1).wav"),
  "A2": new Audio("bassTones/A (2).wav"),
  "A3": new Audio("bassTones/A (3).wav"),
  "B1": new Audio("bassTones/B (1).wav"),
  "B2": new Audio("bassTones/B (2).wav"),
  "B3": new Audio("bassTones/B (3).wav"),
  "C1": new Audio("bassTones/C (1).wav"),
  "C2": new Audio("bassTones/C (2).wav"),
  "C3": new Audio("bassTones/C (3).wav"),
  "D1": new Audio("bassTones/D (1).wav"),
  "D2": new Audio("bassTones/D (2).wav"),
  "D3": new Audio("bassTones/D (3).wav"),
  "F1": new Audio("bassTones/F (1).wav"),
  "F2": new Audio("bassTones/F (2).wav"),
  "F3": new Audio("bassTones/F (3).wav"),
  "G1": new Audio("bassTones/G (1).wav"),
  "G2": new Audio("bassTones/G (2).wav"),
  "G3": new Audio("bassTones/G (3).wav")
};

// Slider

const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

}
// Generator


function playBassSound(note, number) {
  let soundKey = note + number;
  if (bassSounds.hasOwnProperty(soundKey)) {
      bassSounds[soundKey].play();
  } else {
      console.error("No audio found for the bass note: " + soundKey);
  }
}

function displayText() {
  var notes = ["F", "G", "A", "B", "C", "D"];
  var numbers = ["1", "2", "3"];

  var randomNotesIndex = Math.floor(Math.random() * notes.length);
  var randomNumIndex = Math.floor(Math.random() * numbers.length);

  var note = notes[randomNotesIndex];
  var number = numbers[randomNumIndex];

  document.getElementById("current-reason").textContent = note + " " + number;

  // Play the sound
  playBassSound(note, number);
}

document.body.addEventListener('click', function () {
  displayText(); // Call function on click anywhere on the page
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 32) {
      // Calling function
      displayText();
  }
});

// Update interval based on slider value
function updateInterval() {
  var speed = document.getElementById("rangeNumber").value;
  var speedCal = speed * 1000;

  // Clear previous interval if it exists
  clearInterval(rangeNumber);

  // Set new interval
  rangeNumber = setInterval(displayText, speedCal);
}

// Add event listener to slider input
document.getElementById("rangeNumber").addEventListener("input", updateInterval);

// Initial call to set the interval
updateInterval();