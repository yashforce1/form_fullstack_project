const http = require("http");
const os = require("os");

const TARGET_URL = "http://localhost:3000/api/users";
const TOTAL_REQUESTS = 500;
const INTERVAL_MS = 10;

let count = 0;

function getCpuUsage() {
  const cpus = os.cpus();

  let idle = 0;
  let total = 0;

  cpus.forEach(cpu => {
    for (type in cpu.times) {
      total += cpu.times[type];
    }
    idle += cpu.times.idle;
  });

  return {
    idle,
    total
  };
}

let prevCpu = getCpuUsage();

const interval = setInterval(() => {
  if (count >= TOTAL_REQUESTS) {
    console.log("✅ Finished 200 requests");
    clearInterval(interval);
    return;
  }

  http.get(TARGET_URL, (res) => {
    res.on("data", () => {});
    res.on("end", () => {
      const currCpu = getCpuUsage();

      const idleDiff = currCpu.idle - prevCpu.idle;
      const totalDiff = currCpu.total - prevCpu.total;

      const cpuUsage =
        100 - Math.floor((idleDiff / totalDiff) * 100);

      console.log(
        `Request #${count + 1} | Status: ${res.statusCode} | CPU Usage: ${cpuUsage}%`
      );

      prevCpu = currCpu;
      count++;
    });
  }).on("error", (err) => {
    console.error("Request failed:", err.message);
  });

}, INTERVAL_MS);
