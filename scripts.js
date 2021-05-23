"use strict";

//

//
const circle = document.querySelector(`.shapes3`);

circle.addEventListener(`click`, function () {
  circle.animate(
    {
      width: `50000px`,
      backgroundColor: `#` + Math.trunc(Math.random() * 16777215).toString(16),
      borderRadius: Math.trunc(Math.random() * 200) + `px`,
      height: `100000px`,
    },
    5000
  );
});
