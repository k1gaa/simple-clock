const clock = document.querySelector(".container");

const checkTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  updateTime(hour, min, sec);

  setInterval(function () {
    checkTime();
  }, 1000);
};

const updateTime = (hour, min, sec) => {
  clock.textContent = hour + " : " + min + " : " + sec;
};

checkTime();
