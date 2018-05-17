document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded");

  const ballForm = document.createElement("form");
  ballForm.innerHTML = `
    <label>Number of balls (27 - 127)</label>
    <input required type='number' min='27' max='127'>
    <label>Number of minutes (optional)</label>
    <input min='1', step='1' type='number'>
    <input type='submit'>
  `;
  const clockInfoDiv = document.getElementById("clockInfo");
  clockInfoDiv.append(ballForm);
});
