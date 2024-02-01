// Web Worker Script (e.g., workerScript.js)
let startTime;
let expectedEndTime;
let timerDuration;
let interval;

/* eslint-disable no-restricted-globals */
self.onmessage = (e) => {
  if (e.data.command === "start") {
    clearInterval(interval);
    startTime = Date.now();
    timerDuration = e.data.duration;
    expectedEndTime = startTime + timerDuration;
    interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const remainingTime = Math.max(expectedEndTime - currentTime, 0);
      self.postMessage({ type: "tick", remainingTime });
      if (remainingTime <= 0) {
        clearInterval(interval);
        self.postMessage({ type: "finished" });
      }
    }, 1000);
  } else if (e.data.command === "stop") {
    clearInterval(interval);
  }
};
/* eslint-enable no-restricted-globals */
