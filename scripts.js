"use strict";

//

//
const circle = document.querySelector(`.shapes3`);
const m = document.querySelector(`.m`);

m.addEventListener(`click`, function () {
  m.style.display = `none`;
  circle.animate(
    {
      width: `400px`,
      backgroundColor: `#` + Math.trunc(Math.random() * 16777215).toString(16),
      borderRadius: Math.trunc(Math.random() * 400) + `px`,
      height: `100vh`,
    },
    120000
  );
});
