const ballPositions = {
  queueTrack: [],
  minuteTrack: [],
  fiveMinuteTrack: [],
  hourTrack: []
};

const originalPositions = {};

let totalMinutes = 0;

document.addEventListener("DOMContentLoaded", () => {
  const boardDiv = document.getElementById("board");

  const minDiv = document.getElementById("mintrack");
  const fiveMinDiv = document.getElementById("fivemintrack");
  const hourDiv = document.getElementById("hourtrack");
  const queueDiv = document.getElementById("queuetrack");

  const ballClock = (numberOfBalls, numberOfMinutes = null) => {
    ballPositions.hourTrack.push(1);
    putBallsOnQueueTrack(numberOfBalls);
    assignOriginalPositions(ballPositions);
    showTracks();
    startClock();
  };

  const putBallsOnQueueTrack = number => {
    for (let counter = 2; counter <= number; counter++) {
      ballPositions.queueTrack.push(counter);
    }
  };

  const assignOriginalPositions = ballPositions => {
    for (let key in ballPositions) {
      originalPositions[key] = ballPositions[key];
    }
  };

  const showTracks = () => {
    // debugger;
    boardDiv.innerHTML = `
      <h4>Current time: ${timeFormat(
        ballPositions.hourTrack.length
      )}:${timeFormat(
      ballPositions.fiveMinuteTrack.length * 5 +
        ballPositions.minuteTrack.length
    )}</h4>
      <h3>Total minutes passed: ${totalMinutes}</h3>
    `;
    minDiv.innerText = ballPositions.minuteTrack;
    fiveMinDiv.innerText = ballPositions.fiveMinuteTrack;
    hourDiv.innerText = ballPositions.hourTrack;
    queueDiv.innerText = ballPositions.queueTrack;
  };

  const timeFormat = trackLength => {
    return trackLength >= 10 ? trackLength : "0" + trackLength;
  };

  const startClock = () => {
    setInterval(() => {
      if (totalMinutes !== 325) {
        moveNextBallInQueue();
        totalMinutes += 1;
        showTracks();
      }
    }, 500);
  };

  const moveNextBallInQueue = () => {
    // console.log(ballPositions)
    moveFromQueueToMinute(ballPositions.queueTrack.shift());
  };

  const moveFromQueueToMinute = ball => {
    clearTrackCheck("minuteTrack", 4)
      ? (clearTrack(ballPositions.minuteTrack),
        clearTrackCheck("fiveMinuteTrack", 11)
          ? (clearTrack(ballPositions.fiveMinuteTrack),
            clearTrackCheck("hourTrack", 11)
              ? clearTrack(ballPositions.hourCheck)
              : ballPositions.hourTrack.push(ball))
          : ballPositions.fiveMinuteTrack.push(ball))
      : ballPositions.minuteTrack.push(ball);
  };

  // const moveFromQueueToMinute = ball => {
  //   clearTrackCheck("minuteTrack", 4)
  //     ? clearTrack(ballPositions.minuteTrack)
  //     : clearTrackCheck("fiveMinute", 9)
  //       ? clearTrack(ballPositions.fiveMinuteTrack)
  //       : clearTrackCheck("hourTrack", 5)
  //         ? clearTrack(ballPositions.hourTrack)
  //         : ballPositions.minuteTrack.push(ball);
  // };
  //
  const clearTrackCheck = (track, maxLength) => {
    return ballPositions[track].length === maxLength;
  };

  const clearTrack = track => {
    const trackLength = track.length;
    for (let i = 0; i < trackLength; i++) {
      ballPositions.queueTrack.push(track.pop());
    }
    // debugger;
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

  ballClock(30); // "30 balls cycle after 15 days"
  // ballClock(45) // "45 balls cycle after 378 days"
  // ballClock(30, 325)
  /*
    {
      "Min":[],
      "FiveMin":[22,13,25,3,7],
      "Hour":[6,12,17,4,15],
      "Main": [11,5,26,18,2,30,19,8,24,10,29,20,16,21,28,1,23,14,27,9]
    }
  */
});
