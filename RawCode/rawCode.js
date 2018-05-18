let framesPerSecond = 1000;

const ballPositions = {
  queueTrack: [],
  minuteTrack: [],
  fiveMinuteTrack: [],
  hourTrack: []
};

let originalPositions = {
  queueTrack: [],
  minuteTrack: [],
  fiveMinuteTrack: [],
  hourTrack: []
};

// let originalPositions = {
//   queueTrack: [
//     11,
//     5,
//     26,
//     18,
//     2,
//     30,
//     19,
//     8,
//     24,
//     10,
//     29,
//     20,
//     16,
//     21,
//     28,
//     1,
//     23,
//     14,
//     27,
//     9
//   ],
//   minuteTrack: [],
//   fiveMinuteTrack: [22, 13, 25, 3, 7],
//   hourTrack: [6, 12, 17, 4, 15]
// };

let morning = true;
let daysPassed = 0;
let minutesPassed = 0;
let minutesRemaining;

document.addEventListener("DOMContentLoaded", () => {
  const boardDiv = document.getElementById("board");

  const minDiv = document.getElementById("mintrack");
  const fiveMinDiv = document.getElementById("fivemintrack");
  const hourDiv = document.getElementById("hourtrack");
  const queueDiv = document.getElementById("queuetrack");

  // const initialOrderTest = () => {
  //   // debugger;
  //   for (let track in ballPositions) {
  //     let counter = 0;
  //     for (let ball of ballPositions[track]) {
  //       if (daysPassed === 15) {
  //         console.log(originalPositions[track][counter]);
  //         console.log(ball);
  //       }
  //
  //       if (originalPositions[track][counter] !== ball) {
  //         return false;
  //       } else {
  //         counter++;
  //       }
  //     }
  //   }
  //   return true;
  // };

  const ballClock = (numberOfBalls, numberOfMinutes = null) => {
    // ballPositions.hourTrack.push(1);
    minutesRemaining = numberOfMinutes;
    putBallsOnQueueTrack(numberOfBalls);
    assignOriginalPositions(numberOfBalls);
    // console.log(ballPositions);
    // console.log(originalPositions);
    // console.log(initialOrderTest());
    // debugger;
    showTracks();
    startClock();
  };

  const putBallsOnQueueTrack = number => {
    for (let counter = 1; counter <= number; counter++) {
      ballPositions.queueTrack.push(counter);
    }
  };

  const assignOriginalPositions = number => {
    for (let counter = 1; counter <= number; counter++) {
      originalPositions.queueTrack.push(counter);
    }
  };

  const showTracks = () => {
    // debugger;
    boardDiv.innerHTML = `
      <h2>Current time: ${hourAndMinutes()} ${amOrPm()}</h2>
      <h3>Total days passed: ${dayFormat()}</h3>

      <h3>Total minutes passed: ${minutesFormat(minutesPassed)}</h3>
    `;
    minDiv.innerText = ballPositions.minuteTrack;
    fiveMinDiv.innerText = ballPositions.fiveMinuteTrack;
    hourDiv.innerText = ballPositions.hourTrack;
    queueDiv.innerText = ballPositions.queueTrack;
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

  const minutesFormat = number => {
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

  const startClock = () => {
    setInterval(() => {
      // if (minutesPassed !== 325) {
      // console.log("test1 ", minutesRemaining === null);
      // console.log("test2: ", minutesRemaining - minutesPassed === 0);

      if (keepGoingOrNot()) {
        // console.log(ballPositions);

        moveNextBallInQueue();
        minutesPassed += 1;
        showTracks();
      }
      // }
      // console.log(initialOrderTest());
    }, 1000 / framesPerSecond);
  };

  const keepGoingOrNot = () => {
    return initialOrderTest() && numberOfMinutesTest() && letItRun();
  };

  const initialOrderTest = () => {
    // debugger;
    if (minutesPassed < 1 || minutesRemaining !== null) {
      // console.log("here");
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
      } // console.log(ballPositions.queueTrack);
      // console.log(originalPositions.queueTrack);
      return false;
    } else {
      return true;
    }

    // for (let track in ballPositions) {
    //   let counter = 0;
    //   for (let ball of ballPositions[track]) {
    //     // if (daysPassed === 15) {
    //     //   console.log(originalPositions[track][counter]);
    //     //   console.log(ball);
    //     // console.log(originalPositions);
    //     // console.log("orig: ", originalPositions[track][counter]);
    //     // console.log("ballPositions: ", ball);
    //
    //     if (originalPositions[track][counter] !== ball) {
    //       return true;
    //     } else {
    //       counter++;
    //     }
    //   }
    // }
    // return false;
  };

  const numberOfMinutesTest = () => {
    return minutesRemaining === null || minutesRemaining - minutesPassed !== 0;
  };

  const letItRun = () => {
    return true;
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
              ? (clearTrack(ballPositions.hourTrack),
                ballPositions.queueTrack.push(ball))
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

  // ballClock(30); // "30 balls cycle after 15 days"
  ballClock(45); // "45 balls cycle after 378 days"
  // ballClock(30, 325);
  /*
    {
      "Min":[],
      "FiveMin":[22,13,25,3,7],
      "Hour":[6,12,17,4,15],
      "Main": [11,5,26,18,2,30,19,8,24,10,29,20,16,21,28,1,23,14,27,9]
    }
  */
});
