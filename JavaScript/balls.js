//   let i = 1;
//   while (i <= 127) {
//     console.log(ballCoords);
//     canvasContext.beginPath();
//     // canvasContext.fillStyle = "grey";
//     // canvasContext.strokeStyle = "black";
//     // canvasContext.font = "15px Georgia";
//     // canvasContext.lineWidth = 10;
//     canvasContext.arc(ballCoords[0], ballCoords[1], 20, 0, 2 * Math.PI);
//
//     // canvasContext.fillStyle = "red";
//     // canvasContext.fill();
//     // canvasContext.beginPath();
//     // canvasContext.fill();
//     // canvasContext.fillStyle = "black";
//     // canvasContext.fillText(
//     // i,
//     // ballCoords[0] - 4 * i.toString().length,
//     // ballCoords[1] + 5
//     // );
//     // canvasContext.fill();
//     canvasContext.stroke();
//     ballCoords[0] < 780 ? (ballCoords[0] += 40) : (ballCoords[0] = 20);
//     ballCoords[1] = Math.floor(i / 20) * 40 + 440;
//     i++;
//   }

const ballCoords = [ballRadius + ballDiameter, canvasHeight - ballRadius];

const createBalls = numberOfBalls => {
  let counter = 2;
  while (counter <= numberOfBalls) {
    ballArray.push({
      number: counter,
      color: null,
      xCoordinate: 0,
      yCoordinate: 0
    });
    counter++;
  }
  drawBalls(ballArray);
};

const drawBalls = ballArray => {
  drawBall(1);
  drawBall(2);

  drawFirstRow(ballArray.slice(2, 22));
  // drawSecondRow(ballArray.slice(22, 41));
  // ballArray.length
  // console.log(ballArray.slice(2, 22));
  // console.log(ballArray.slice(22, 41));
  // console.log(ballArray.slice(41, 60));
  // console.log(ballArray.slice(60, 79));
  // console.log(ballArray.slice(79, 98));
  // console.log(ballArray.slice(98, 117));
  // console.log(ballArray.slice(117, 127));
};

const drawBall = ball => {
  const ballToDraw = ballArray[ball - 1];
  canvasContext.beginPath();
  canvasContext.fillStyle = ballToDraw.color;
  canvasContext.arc(
    ballToDraw.xCoordinate,
    ballToDraw.yCoordinate,
    20,
    0,
    2 * Math.PI
  );
  canvasContext.fill();
};

const drawFirstRow = ballArray => {
  for (let ball of ballArray) {
    console.log(ball);
  }
};

// const drawSecondRow = ballArray => {};
