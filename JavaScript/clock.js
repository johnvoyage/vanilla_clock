const showClock = () => {
  const clock = document.createElement("div");
  clock.innerHTML = `
    <h1 class='center-text'>
      Day: 0 --- HH:MM --- Minutes passed: 0
      <button>Run</button>
    </h1>
    <h3 class='center-text'>
      Minutes remaining: N/a
    </h3>
  `;
  clockInfoDiv.append(clock);
};
