const canvasHeight = 700;
const canvasWidth = 800;

const ballRadius = 20;
const halfRadius = ballRadius / 2;
const ballDiameter = ballRadius * 2;

const createRows = () => {
  return ["first", "second", "third", "fourth", "fifth", "sixth"].map(
    (row, index) => {
      const yCoordinate = canvasHeight - ballDiameter * index;
      const isEvenRow = index % 2 === 0;
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
  }
};

const fluidTracks = {
  minute: {
    startingX: 200,
    startingY: 100,
    endingX: 600,
    endingY: 100
  },
  fiveMinute: {
    startingX: 200,
    startingY: 200,
    endingX: 600,
    endingY: 200
  },
  hour: {
    startingX: 200,
    startingY: 300,
    endingX: 600,
    endingY: 300
  }
};
// const ballCoords = [20, 440];

const ballArray = [
  {
    ballNumber: 1,
    xCoordinate: fluidTracks.hour.startingX + ballRadius,
    yCoordinate: fluidTracks.hour.startingY - ballRadius
  }
];

const minBalls = [];
const fiveMinBalls = [];
const hourBalls = [];
let queueBalls = [];
