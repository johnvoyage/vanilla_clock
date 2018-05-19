let framesPerSecond = 1000;

const letItRun = () => {
  return false;
};

const ballPositions = {
  queueTrack: [],
  minuteTrack: [],
  fiveMinuteTrack: [],
  hourTrack: []
};

const originalPositions = {
  queueTrack: [],
  minuteTrack: [],
  fiveMinuteTrack: [],
  hourTrack: []
};

let morning = true;
let daysPassed = 0;
let minutesPassed = 0;
let minutesRemaining;

// const setTrack = (track, number) => {
//   for (let counter = 1; counter <= number; counter++) {
//     track.queueTrack.push(counter);
//   }
// };

const clockStarted = () => {
  // document.addEventListener("DOMContentLoaded", () => {
  // const boardDiv = document.getElementById("board");
  // const minDiv = document.getElementById("mintrack");
  // const fiveMinDiv = document.getElementById("fivemintrack");
  // const hourDiv = document.getElementById("hourtrack");
  // const queueDiv = document.getElementById("queuetrack");
  // const timeHeader = document.getElementById("time");
  // const daysHeader = document.getElementById("days");
  // const minPassedHeader = document.getElementById("minpassed");
  // const minRemainingHeader = document.getElementById("minremain");

  const ballClock = (numberOfBalls, numberOfMinutes = null) => {
    minutesRemaining = numberOfMinutes;
    setTrack(ballPositions, numberOfBalls);
    setTrack(originalPositions, numberOfBalls);
    showInfo();
    startClock();
  };

  const setTrack = (track, number) => {
    for (let counter = 1; counter <= number; counter++) {
      track.queueTrack.push(counter);
    }
  };

  const showInfo = () => {
    timeHeader.innerText = `Current time: ${hourAndMinutes()} ${amOrPm()}`;
    daysHeader.innerText = `Total days passed: ${formatWithCommas(
      dayFormat()
    )}`;
    minPassedHeader.innerText = `Total minutes passed: ${formatWithCommas(
      minutesPassed
    )}`;
    minRemainingHeader.innerText = `Total minutes remaining: ${formatMinutesRemaining()}`;
    minDiv.innerText = `Balls: ${ballPositions.minuteTrack}`;
    fiveMinDiv.innerText = `Balls: ${ballPositions.fiveMinuteTrack}`;
    hourDiv.innerText = `Balls: ${ballPositions.hourTrack}`;
    queueDiv.innerText = `Balls: ${ballPositions.queueTrack}`;
  };

  const hourAndMinutes = () => {
    return `${timeFormat(ballPositions.hourTrack.length + 1)}:${timeFormat(
      ballPositions.fiveMinuteTrack.length * 5 +
        ballPositions.minuteTrack.length
    )}`;
  };

  const amOrPm = () => {
    hourAndMinutes() === "12:00"
      ? ((morning = !morning), (daysPassed += 0.5))
      : null;
    return morning ? "AM" : "PM";
  };

  const timeFormat = number => {
    return number >= 10 ? number : "0" + number;
  };

  const dayFormat = () => {
    return Math.floor(daysPassed);
  };

  const formatWithCommas = number => {
    return number
      .toString()
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g)
      .join(",")
      .split("")
      .reverse()
      .join("");
  };

  const formatMinutesRemaining = () => {
    return minutesRemaining === null
      ? "N/A"
      : formatWithCommas(minutesRemaining - minutesPassed);
  };

  const startClock = () => {
    setInterval(() => {
      if (keepGoingOrNot()) {
        moveNextBallInQueue();
        minutesPassed += 1;
        showInfo();
      }
    }, 1000 / framesPerSecond);
  };

  const keepGoingOrNot = () => {
    return (initialOrderTest() && numberOfMinutesTest()) || letItRun();
  };

  const initialOrderTest = () => {
    if (minutesPassed < 1 || minutesRemaining !== null) {
      return true;
    }

    if (
      ballPositions.queueTrack.length === originalPositions.queueTrack.length
    ) {
      let counter = 0;
      while (counter < ballPositions.queueTrack.length) {
        if (
          ballPositions.queueTrack[counter] !==
          originalPositions.queueTrack[counter]
        ) {
          return true;
        }
        counter++;
      }
      return false;
    } else {
      return true;
    }
  };

  const numberOfMinutesTest = () => {
    return minutesRemaining === null || minutesRemaining - minutesPassed !== 0;
  };

  const moveNextBallInQueue = () => {
    moveFromQueueToMinute(ballPositions.queueTrack.shift());
  };

  const moveFromQueueToMinute = ball => {
    clearTrackCheck("minuteTrack", 4)
      ? (clearTrack(ballPositions.minuteTrack),
        clearTrackCheck("fiveMinuteTrack", 11)
          ? (clearTrack(ballPositions.fiveMinuteTrack),
            clearTrackCheck("hourTrack", 11)
              ? (clearTrack(ballPositions.hourTrack),
                ballPositions.queueTrack.push(ball))
              : ballPositions.hourTrack.push(ball))
          : ballPositions.fiveMinuteTrack.push(ball))
      : ballPositions.minuteTrack.push(ball);
  };

  const clearTrackCheck = (track, maxLength) => {
    return ballPositions[track].length === maxLength;
  };

  const clearTrack = track => {
    const trackLength = track.length;
    for (let i = 0; i < trackLength; i++) {
      ballPositions.queueTrack.push(track.pop());
    }
  };

  const moveFromMinuteToFiveMinute = ball => {
    clearTrackCheck("fiveMinuteTrack", 9)
      ? clearTrack(ballPositions.fiveMinuteTrack)
      : ballPositions.fiveMinuteTrack.push(ball);
  };

  const moveFromFiveMinuteToHour = ball => {
    clearTrackCheck("hourTrack", 11)
      ? clearTrack(ballPositions.hourTrack)
      : ballPositions.hourTrack.push(ball);
  };

  const moveFromHourToQueue = ball => {
    ballPositions.queueTrack.push(ball);
  };

  // ballClock(27);
  // ballClock(30); // "30 balls cycle after 15 days"
  // ballClock(45); // "45 balls cycle after 378 days"
  ballClock(30, 325);
  /*
    {
      "Min":[],
      "FiveMin":[22,13,25,3,7],
      "Hour":[6,12,17,4,15],
      "Main": [11,5,26,18,2,30,19,8,24,10,29,20,16,21,28,1,23,14,27,9]
    }
  */
};
