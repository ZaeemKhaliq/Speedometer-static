window.onload = () => {
  let svg = document.getElementById("svg-main");

  for (let i = 0; i < 17; i++) {
    svg.innerHTML += `
        <line
            class="speed-lines"
            x1="50%"
            y1="115"
            x2="50%"
            y2="135"
            style="transform:rotate(${205 + (i + 1) * 17}deg) translateY(-460%)"
        />
        `;
  }
  for (let i = 0; i < 17; i++) {
    svg.innerHTML += `
      <text
      x="50%"
      y="50%"
      fill="white"
      class="speed-values"
      style="transform:translate(${
        Math.cos((245 + (i + 1) * 13 - (i + 1) * 30) * (Math.PI / 180)) * 70 - 9
      }px, ${
      Math.sin((245 + (i + 1) * 13 - (i + 1) * 30) * (Math.PI / 180)) *
        70 *
        -1 +
      4
    }px)"
      >
        ${i * 20}
      </text>
      `;
  }

  for (let i = 0; i < 9; i++) {
    for (j = 0; j < 16; j++) {
      svg.innerHTML += `
          <line 
            class="small-speed-lines"
            x1="50%"
            y1="120"
            x2="50%"
            y2="130"
            style="transform: rotate(${
              205 + 1.7 * (i + 1) + (j + 1) * 17
            }deg)  translateY(-${i === 4 ? 940 : 980}%);${
        i === 4 ? "stroke-width:1" : ""
      }"
          />
          `;
    }
  }

  svg.innerHTML += `
  <path
    class="arrow"
    d="M30,125
    L140,120 L140,130 L30,125
    "
  />
  <circle cx="50%" cy="50%" r="12" class="center-circle"></circle>
  `;
};

let arrowRotationDegree = 312;
let enterEvent = false;
let leaveEvent = false;

const incrementRotationDegree = () => {
  const redArrow = document.getElementsByClassName("arrow")[0];

  setTimeout(() => {
    arrowRotationDegree =
      arrowRotationDegree === 585
        ? arrowRotationDegree
        : arrowRotationDegree + 1;
    redArrow.style.transform = `rotate(${arrowRotationDegree}deg)`;

    if (arrowRotationDegree < 585) {
      if (leaveEvent === false) {
        incrementRotationDegree();
      }
    }
  }, 30);
};

const decrementRotationDegree = () => {
  const redArrow = document.getElementsByClassName("arrow")[0];

  setTimeout(() => {
    arrowRotationDegree = arrowRotationDegree - 1;
    redArrow.style.transform = `rotate(${arrowRotationDegree}deg)`;
    if (arrowRotationDegree > 312) {
      if (enterEvent === false) {
        decrementRotationDegree();
      }
    }
  }, 30);
};

function onPedalEnter() {
  enterEvent = true;
  leaveEvent = false;

  if (arrowRotationDegree < 585) {
    incrementRotationDegree();
  }
}

function onPedalLeave() {
  enterEvent = false;
  leaveEvent = true;

  if (arrowRotationDegree > 312) {
    decrementRotationDegree();
  }
}
