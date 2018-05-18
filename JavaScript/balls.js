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

const ballCoords = {
  x: ballRadius + ballDiameter * 2,
  xDirection: 1,
  belowAnother: true,
  aboveAnother: false,
  y: canvasHeight - ballRadius
};

const createBalls = numberOfBalls => {
  let counter = 4;
  while (counter <= numberOfBalls) {
    ballArray.push({
      number: counter,
      color: ballColor(counter),
      xCoordinate: ballCoords.x,
      yCoordinate: ballCoords.y
    });
    ballCoords.x = updateXCoord(ballCoords.x, counter);
    ballCoords.y = updateYCoord(ballCoords.y, counter);
    counter++;
  }
  drawBalls(ballArray);
};

const updateXCoord = (priorXCoord, ballNumber) => {
  // console.log(priorXCoord);
  switch (priorXCoord) {
    case 780:
      // console.log(ballCoords.belowAnother);
      // console.log(ballCoords.aboveAnother);

      if (ballCoords.belowAnother) {
        ballCoords.belowAnother = !ballCoords.belowAnother;
        ballCoords.aboveAnother = !ballCoords.aboveAnother;
      } else if (ballCoords.aboveAnother) {
        ballCoords.aboveAnother = !ballCoords.aboveAnother;
        ballCoords.belowAnother = !ballCoords.belowAnother;
        ballCoords.xDirection = -ballCoords.xDirection;
        priorXCoord += ballDiameter * ballCoords.xDirection;
      } else {
        priorXCoord += ballDiameter * ballCoords.xDirection;
        ballCoords.aboveAnother = !ballCoords.aboveAnother;
      }
      break;
    case 60:
      if (ballCoords.belowAnother) {
        ballCoords.belowAnother = !ballCoords.belowAnother;
        ballCoords.aboveAnother = !ballCoords.aboveAnother;
      } else if (ballCoords.aboveAnother) {
        ballCoords.aboveAnother = !ballCoords.aboveAnother;
        ballCoords.belowAnother = !ballCoords.belowAnother;
        ballCoords.xDirection = -ballCoords.xDirection;
        priorXCoord += ballDiameter * ballCoords.xDirection;
      } else {
        priorXCoord += ballDiameter * ballCoords.xDirection;
      }
      break;
    default:
      priorXCoord += ballDiameter * ballCoords.xDirection;
  }
  // priorXCoord += ballDiameter;
  return priorXCoord;
};

const updateYCoord = (priorYCoord, ballNumber) => {
  // console.log(ballNumber);
  return (ballNumber - 4) % 17 === 0 && ballNumber !== 4
    ? priorYCoord - ballDiameter
    : priorYCoord;
};

const ballColor = ballNumber => {
  return "grey";
};

const drawBalls = ballArray => {
  drawBall(1);
  drawBall(2);
  drawBall(3);

  drawFirstRow(ballArray.slice(3));
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
  //     // ballCoords[0] - 4 * i.toString().length,
  //     // ballCoords[1] + 5
  canvasContext.beginPath();
  canvasContext.fillStyle = "black";
  canvasContext.fillText(
    ball,
    ballToDraw.xCoordinate - 4 * ball.toString().length,
    ballToDraw.yCoordinate + 5
  );
  canvasContext.fill();
};

const drawFirstRow = ballArray => {
  for (let ball of ballArray) {
    console.log(ball);
    canvasContext.beginPath();
    canvasContext.fillStyle = ball.color;
    canvasContext.arc(ball.xCoordinate, ball.yCoordinate, 20, 0, 2 * Math.PI);
    canvasContext.fill();
    canvasContext.beginPath();
    canvasContext.fillStyle = "black";
    canvasContext.fillText(
      ball.number,
      ball.xCoordinate - 4 * ball.number.toString().length,
      ball.yCoordinate + 5
    );
    canvasContext.fill();
  }
};

// const drawSecondRow = ballArray => {};
