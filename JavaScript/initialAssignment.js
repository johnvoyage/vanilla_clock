const canvasHeight = 700;
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
  }
};

const fluidTracks = {
  minute: {
    startingX: 200,
    startingY: 100,
    endingX: 400,
    endingY: 100
  },
  fiveMinute: {
    startingX: 400,
    startingY: 200,
    endingX: 640,
    endingY: 200
  },
  hour: {
    startingX: 200,
    startingY: 300,
    endingX: 680,
    endingY: 300
  }
};

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
    color: BLUE,
    xCoordinate: ballRadius + ballDiameter,
    yCoordinate: canvasHeight - ballRadius
  }
];

const minuteTrack = [];
const fiveMinTrack = [];
const hourTrack = [];
const queueTrack = [];
