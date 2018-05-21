/* Variables needed throughout app */

let ballPositions = {
  Main: [],
  Min: [],
  FiveMin: [],
  Hour: []
};
let originalPositions = {
  Main: [],
  Min: [],
  FiveMin: [],
  Hour: []
};
let minutesPassed;
let minuteCap;
let totalBalls;

/* End of varables */

const runClock = (numberOfBalls, numberOfMinutes = null) => {
  resetVariables();
  totalBalls = numberOfBalls;
  minuteCap = numberOfMinutes;
  minutesPassed = 0;
  setTrack(originalPositions, numberOfBalls);
  setTrack(ballPositions, numberOfBalls);
  startClock();
};

const resetVariables = () => {
  minutesPassed = 0;
  originalPositions = {
    Main: [],
    Min: [],
    FiveMin: [],
    Hour: []
  };
  ballPositions = {
    Main: [],
    Min: [],
    FiveMin: [],
    Hour: []
  };
};

const setTrack = (track, number) => {
  for (let counter = 1; counter <= number; counter++) {
    track.Main.push(counter);
  }
};

const startClock = () => {
  if (keepGoingOrNot()) {
    moveNextBallInQueue();
    minutesPassed += 1;
    startClock();
  } else {
    minuteCap !== null
      ? console.log(`Tracks after ${minutesPassed} minutes: `, ballPositions)
      : console.log(
          `${totalBalls} balls cycle after ${minutesToDays(
            minutesPassed
          )} days.`
        );
  }
};

const minutesToDays = minutes => {
  return Math.floor(minutes / 1440);
};

const keepGoingOrNot = () => {
  return initialOrderTest() && numberOfMinutesTest();
};

const initialOrderTest = () => {
  if (minutesPassed < 1 || minuteCap !== null) {
    return true;
  }

  if (ballPositions.Main.length === originalPositions.Main.length) {
    let counter = 0;
    while (counter < ballPositions.Main.length) {
      if (individualBallTest(counter)) return true;
      counter++;
    }
    return false;
  } else {
    return true;
  }
};

const individualBallTest = ballPosition => {
  return (
    ballPositions.Main[ballPosition] !== originalPositions.Main[ballPosition]
  );
};

const numberOfMinutesTest = () => {
  return minuteCap === null || minuteCap - minutesPassed !== 0;
};

const moveNextBallInQueue = () => {
  moveFromQueueToMinute(ballPositions.Main.shift());
};

const moveFromQueueToMinute = ball => {
  clearTrackCheck("Min", 4)
    ? (clearTrack(ballPositions.Min),
      clearTrackCheck("FiveMin", 11)
        ? (clearTrack(ballPositions.FiveMin),
          clearTrackCheck("Hour", 11)
            ? (clearTrack(ballPositions.Hour), ballPositions.Main.push(ball))
            : ballPositions.Hour.push(ball))
        : ballPositions.FiveMin.push(ball))
    : ballPositions.Min.push(ball);
};

const clearTrackCheck = (track, maxLength) => {
  return ballPositions[track].length === maxLength;
};

const clearTrack = track => {
  const trackLength = track.length;
  for (let i = 0; i < trackLength; i++) {
    ballPositions.Main.push(track.pop());
  }
};

const moveFromMinuteToFiveMinute = ball => {
  clearTrackCheck("FiveMin", 9)
    ? clearTrack(ballPositions.FiveMin)
    : ballPositions.FiveMin.push(ball);
};

const moveFromFiveMinuteToHour = ball => {
  clearTrackCheck("Hour", 11)
    ? clearTrack(ballPositions.Hour)
    : ballPositions.Hour.push(ball);
};

const moveFromHourToQueue = ball => {
  ballPositions.Main.push(ball);
};

runClock(27);
runClock(30); // 30 balls cycle after 15 days.
// runClock(45); // 45 balls cycle after 378 days.
runClock(30, 325);
/*{
  "Min":[],
  "FiveMin":[22,13,25,3,7],
  "Hour":[6,12,17,4,15],
  "Main": [11,5,26,18,2,30,19,8,24,10,29,20,16,21,28,1,23,14,27,9]
}*/
