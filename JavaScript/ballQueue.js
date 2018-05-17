// // const ballCoords = [20, 440];
// let canvas;
// let canvasContext;
//
// document.addEventListener("DOMContentLoaded", () => {
//   clockCanvas = document.getElementById("clockCanvas");
//   canvasContext = clockCanvas.getContext("2d");
//
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
//
//   // const ballNumberChanged = event => {
//   //   console.log(event.target.value);
//   // };
// });
//
// const changeBallQueue = queueBalls => {
//   const ball = clockCanvas.getContext("2d");
//
//   let i = 1;
//   while (i <= queueBalls.length) {
//     console.log(ballCoords);
//     canvasContext.beginPath();
//     canvasContext.fillStyle = "grey";
//     canvasContext.strokeStyle = "black";
//     canvasContext.font = "15px Georgia";
//     canvasContext.lineWidth = 10;
//     canvasContext.arc(ballCoords[0], ballCoords[1], 20, 0, 2 * Math.PI);
//
//     // canvasContext.fillStyle = "red";
//     canvasContext.fill();
//     canvasContext.beginPath();
//     // canvasContext.fill();
//     canvasContext.fillStyle = "black";
//     canvasContext.fillText(
//       i,
//       ballCoords[0] - 4 * i.toString().length,
//       ballCoords[1] + 5
//     );
//     canvasContext.fill();
//     // canvasContext.stroke();
//     ballCoords[0] < 780 ? (ballCoords[0] += 40) : (ballCoords[0] = 20);
//     ballCoords[1] = Math.floor(i / 20) * 40 + 440;
//     i++;
//   }
// };
