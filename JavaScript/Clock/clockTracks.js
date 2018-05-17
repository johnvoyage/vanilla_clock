const minTrackCoords = [200, 100, 600, 100];
const fiveMinTrackCoords = [200, 200, 600, 200];
const hourTrackCoords = [200, 300, 600, 300];

document.addEventListener("DOMContentLoaded", () => {
  console.log("clockTracks.js loaded");

  const clockCanvas = document.getElementById("clockCanvas");

  const minTrack = clockCanvas.getContext("2d");
  minTrack.beginPath();
  minTrack.moveTo(minTrackCoords[0], minTrackCoords[1]);
  minTrack.lineTo(minTrackCoords[2], minTrackCoords[3]);
  minTrack.stroke();

  const fiveMinTrack = clockCanvas.getContext("2d");
  fiveMinTrack.beginPath();
  fiveMinTrack.moveTo(fiveMinTrackCoords[0], fiveMinTrackCoords[1]);
  fiveMinTrack.lineTo(fiveMinTrackCoords[2], fiveMinTrackCoords[3]);
  fiveMinTrack.stroke();

  const hourTrack = clockCanvas.getContext("2d");
  hourTrack.beginPath();
  hourTrack.moveTo(hourTrackCoords[0], hourTrackCoords[1]);
  hourTrack.lineTo(hourTrackCoords[2], hourTrackCoords[3]);
  hourTrack.stroke();
});
