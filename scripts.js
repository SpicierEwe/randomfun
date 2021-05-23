"use strict";

//

//
const circle = document.querySelector(`.shapes3`);

circle.addEventListener(`click`, function () {
  circle.animate(
    {
      width: `100vh`,
      backgroundColor: `#` + Math.trunc(Math.random() * 16777215).toString(16),
      borderRadius: Math.trunc(Math.random() * 200) + `px`,
      height: `1000px`,
    },
    4000
  );
});
