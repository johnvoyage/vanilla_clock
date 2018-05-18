const showClock = () => {
  const clock = document.createElement("div");
  clock.innerHTML = `
    <h1 class='center-text'>
      Day: 0 --- HH:MM --- Minutes passed: 0
      <button id='run-button'>Run</button>
    </h1>
    <h3 class='center-text'>
      Minutes remaining: N/a
    </h3>
  `;
  clockInfoDiv.append(clock);
  const runButton = document.getElementById("run-button");
  runButton.addEventListener("click", startClock);
};

const framesPerSecond = 1;

const startClock = event => {
  // console.log(event);
  setInterval(() => {
    moveAllBalls();
    drawAllBalls();
  }, 1000 / framesPerSecond);
  event.target.remove();
};
