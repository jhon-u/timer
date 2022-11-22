const timer = (timers) => {
  const sortedTimers = timers.sort((a, b) => a - b);
  let delay = 0;
  for (const timer of sortedTimers) {
    if (Number(timer) < 0) continue;
    if (isNaN(timer)) continue;
    delay += Number(timer) * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);
  }
};

const args = process.argv.slice(2);
timer(args);