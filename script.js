let startTime, interval, elapsed = 0;
let running = false;

function start() {
  if (!running) {
    startTime = Date.now() - elapsed;
    interval = setInterval(updateTime, 10);
    running = true;
  }
}

function stop() {
  if (running) {
    clearInterval(interval);
    elapsed = Date.now() - startTime;
    running = false;
  }
}

function reset() {
  clearInterval(interval);
  elapsed = 0;
  running = false;
  document.getElementById("display").textContent = "00:00:00.000";
}

function updateTime() {
  const now = Date.now();
  const time = now - startTime;

  const ms = time % 1000;
  const s = Math.floor((time / 1000) % 60);
  const m = Math.floor((time / 60000) % 60);
  const h = Math.floor((time / 3600000));

  document.getElementById("display").textContent =
    `${pad(h)}:${pad(m)}:${pad(s)}.${pad(ms, 3)}`;
}

function pad(num, size = 2) {
  let s = "000" + num;
  return s.slice(-size);
}
