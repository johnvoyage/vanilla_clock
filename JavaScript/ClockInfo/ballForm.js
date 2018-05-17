document.addEventListener("DOMContentLoaded", () => {
  const ballForm = document.createElement("form");
  ballForm.innerHTML = `
    <label>Number of balls (27 - 127)</label>
    <input id='ballInput' required type='number' min='27' max='127'>
    <label>Number of minutes (optional)</label>
    <input id='minuteInput' min='1', step='1' type='number'>
    <input type='submit'>
  `;
  const clockInfoDiv = document.getElementById("clockInfo");
  ballForm.addEventListener("submit", handleSubmit);
  clockInfoDiv.append(ballForm);

  // const ballInput = document.getElementById("ballInput");
  // ballInput.addEventListener("change", ballNumberChanged);
  //
  // const minuteInput = document.getElementById("minuteInput");
  // minuteInput.addEventListener("change", event =>
  //   console.log(event.target.value)
  // );
});

const handleSubmit = event => {
  event.preventDefault();
  const numberOfBalls = parseInt(event.target.children[1].value);
  ballNumberSubmitted(numberOfBalls);
  // debugger;
  event.target.reset();
};

const ballNumberSubmitted = ballNumberInput => {
  const queueBallArray = [];
  for (let i = 1; i <= ballNumberInput; i++) {
    queueBallArray.push(i);
  }
  changeBallQueue(queueBallArray);
};
