let originalOrder;

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
  originalOrder = [...ballArray];
  hourTrack.push(originalOrder[0]);
  setQueueTrack(originalOrder.slice(1));
  // console.log(originalOrder);
  // console.log(hourTrack);
  // console.log(queueTrack);
};

const setQueueTrack = ballArray => {
  ballArray.forEach(ball => queueTrack.push(ball));
};

const updateXCoord = (priorXCoord, ballNumber) => {
  switch (priorXCoord) {
    case 780:
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
  return priorXCoord;
};

const updateYCoord = (priorYCoord, ballNumber) => {
  return !ballCoords.belowAnother ? priorYCoord - ballDiameter : priorYCoord;
};

const ballColor = ballNumber => {
  if (
    (ballNumber >= 4 && ballNumber <= 21) ||
    (ballNumber >= 41 && ballNumber <= 59) ||
    (ballNumber >= 79 && ballNumber <= 97) ||
    ballNumber >= 117
  ) {
    return RED;
  } else {
    return YELLOW;
  }
};

const drawBalls = ballArray => {
  drawBall(1);
  drawBall(2);
  drawBall(3);
  drawOtherBalls(ballArray.slice(3));
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

  canvasContext.beginPath();
  canvasContext.fillStyle = "black";
  canvasContext.fillText(
    ball,
    ballToDraw.xCoordinate - 4 * ball.toString().length,
    ballToDraw.yCoordinate + 5
  );
  canvasContext.fill();
};

const drawOtherBalls = ballArray => {
  for (let ball of ballArray) {
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
