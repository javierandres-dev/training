export const countdown = (boxCountdown) => {
  const d = document,
    $boxCountdown = d.getElementById("boxCountdown"),
    response = () => {
      const newYear = new Date(2021, 0, 0, 0, 0, 0).getTime(),
        today = new Date().getTime(),
        miliSeconds = newYear - today,
        aSecond = 1000,
        aMinute = aSecond * 60,
        aHour = aMinute * 60,
        aDay = aHour * 24;
      let handledTime,
        days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0;
      handledTime = miliSeconds;
      if (handledTime > aDay) {
        days = Math.floor(handledTime / aDay);
      }
      handledTime = handledTime - aDay * days;
      if (handledTime > aHour) {
        hours = Math.floor(handledTime / aHour);
      }
      handledTime = handledTime - aHour * hours;
      if (handledTime > aMinute) {
        minutes = Math.floor(handledTime / aMinute);
      }
      handledTime = handledTime - aMinute * minutes;
      if (handledTime < aMinute) {
        seconds = Math.floor(handledTime / aSecond);
      }
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        $boxCountdown.innerText = `Happy New Year!`;
        clearInterval(start);
      } else {
        $boxCountdown.innerText = `${days} days ${hours} hours ${minutes} minutes ${seconds} segunds.`;
      }
    },
    start = setInterval(response, 1000);
};
