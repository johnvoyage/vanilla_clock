document.addEventListener("DOMContentLoaded", () => {
  const ballForm = document.createElement("form");
  ballForm.innerHTML = `
    <label>Number of balls (27 - 127)</label>
    <input id='ballInput' required type='number' min='27' max='127'>
    <label>Number of minutes (optional)</label>
    <input id='minuteInput' min='1', step='1' type='number'>
    <label>Speed in FPS (1-1000)</label>
    <input type="range" min="1" max="1000" value="1000">
    <input type='submit'>
  `;
  clockInfoDiv = document.getElementById("clockInfo");
  ballForm.addEventListener("submit", handleSubmit);
  clockInfoDiv.append(ballForm);
});
