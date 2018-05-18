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
    endingX: ballDiameter * 6,
    endingY: ballDiameter
  },
  firstBarrier: {
    startingX: ballDiameter * 7,
    startingY: 0,
    endingX: ballDiameter * 7,
    endingY: ballDiameter * 3
  },
  secondBarrier: {
    startingX: ballDiameter * 7,
    startingY: ballDiameter * 7,
    endingX: ballDiameter * 7,
    endingY: ballDiameter * 8
  },
  thirdBarrier: {
    startingX: ballDiameter * 7,
    startingY: ballDiameter * 7,
    endingX: ballDiameter * 8,
    endingY: ballDiameter * 7
  },
  fourthBarrier: {
    startingX: ballDiameter * 8,
    startingY: ballDiameter * 5,
    endingX: ballDiameter * 8,
    endingY: ballDiameter * 7
  },
  fifthBarrier: {
    startingX: ballDiameter * 14,
    startingY: 0,
    endingX: ballDiameter * 14,
    endingY: ballDiameter * 6
  },
  sixthBarrier: {
    startingX: ballDiameter * 9,
    startingY: ballDiameter * 6,
    endingX: ballDiameter * 14,
    endingY: ballDiameter * 6
  }
};

const fluidTracks = {
  minute: {
    startingX: 80,
    startingY: 120,
    endingX: 280,
    endingY: 120
  },
  fiveMinute: {
    startingX: 40,
    startingY: 200,
    endingX: 520,
    endingY: 200
  },
  hour: {
    startingX: 280,
    startingY: 320,
    endingX: 760,
    endingY: 320
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
