const canvasHeight = 680;
const canvasWidth = 800;

const ballRadius = 20;
const halfRadius = ballRadius / 2;
const ballDiameter = ballRadius * 2;

const GREEN = "#2FA166";
const BLUE = "#5390EF";
const RED = "#DA554F";
const YELLOW = "#E7AD43";

const createRows = () => {
  return ["first", "second", "third", "fourth", "fifth", "sixth"].map(
    (row, index) => {
      const yCoordinate = canvasHeight - ballDiameter * (index + 1);
      const isEvenRow = (index + 1) % 2 === 0;
      return {
        startingX: isEvenRow ? ballDiameter * 2 : ballDiameter,
        startingY: yCoordinate,
        endingX: isEvenRow ? canvasWidth : canvasWidth - ballDiameter,
        endingY: yCoordinate
      };
    }
  );
};

const staticTracks = {
  ...createRows(),
  elevatorShaft: {
    startingX: ballDiameter,
    startingY: ballDiameter,
    endingX: ballDiameter,
    endingY: canvasHeight - ballDiameter
  },
  horizontalTop: {
    startingX: ballDiameter,
    startingY: ballDiameter,
    endingX: ballDiameter * 5,
    endingY: ballDiameter
  },
  firstBarrier: {
    startingX: ballDiameter * 5,
    startingY: ballDiameter * 1,
    endingX: ballDiameter * 5,
    endingY: ballDiameter * 3
  },
  secondBarrier: {
    startingX: ballDiameter * 11,
    startingY: 0,
    endingX: ballDiameter * 11,
    endingY: ballDiameter * 5
  },
  thirdBarrier: {
    startingX: ballDiameter * 4,
    startingY: ballDiameter * 3,
    endingX: ballDiameter * 4,
    endingY: ballDiameter * 7
  }
};

const fluidTracks = {
  minute: {
    startingX: 200,
    startingY: 120,
    endingX: 400,
    endingY: 120
  },
  fiveMinute: {
    startingX: 200,
    startingY: 200,
    endingX: 440,
    endingY: 200
  },
  hour: {
    startingX: 160,
    startingY: 280,
    endingX: 640,
    endingY: 280
  }
};

// const exampleBall = {
//   number: 1,
//   color: "black",
//   xCoordinate: ballRadius,
//   yCoordinate: canvasHeight - ballRadius
// };

const ballArray = [
  {
    number: 1,
    color: GREEN,
    xCoordinate: fluidTracks.hour.startingX + ballRadius,
    yCoordinate: fluidTracks.hour.startingY - ballRadius
  },
  {
    number: 2,
    color: GREEN,
    xCoordinate: ballRadius,
    yCoordinate: canvasHeight - ballRadius
  },
  {
    number: 3,
    color: RED,
    xCoordinate: ballRadius + ballDiameter,
    yCoordinate: canvasHeight - ballRadius
  }
];

const minuteTrack = [];
const fiveMinuteTrack = [];
const hourTrack = [];
const queueTrack = [];
const originalOrder = [];
