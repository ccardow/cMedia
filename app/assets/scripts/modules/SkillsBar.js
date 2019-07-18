const elem = document.getElementById("html");
let width1 = 1;
const id = setInterval(frame, 20);
function frame() {
  if (width1 >= 75) {
    clearInterval(id);
  } else {
    width1++;
    elem.style.width = width1 + "%";
  }
}

const elem2 = document.getElementById("css");
let width2 = 1;
const id2 = setInterval(frame2, 20);
function frame2() {
  if (width2 >= 80) {
    clearInterval(id2);
  } else {
    width2++;
    elem2.style.width = width2 + "%";
  }
}

const elem3 = document.getElementById("ux");
let width3 = 1;
const id3 = setInterval(frame3, 20);
function frame3() {
  if (width3 >= 100) {
    clearInterval(id3);
  } else {
    width3++;
    elem3.style.width = width3 + "%";
  }
}

const elem4 = document.getElementById("js");
let width4 = 1;
const id4 = setInterval(frame4, 20);
function frame4() {
  if (width4 >= 45) {
    clearInterval(id4);
  } else {
    width4++;
    elem4.style.width = width4 + "%";
  }
}

const elem5 = document.getElementById("react");
let width5 = 1;
const id5 = setInterval(frame5, 20);
function frame5() {
  if (width5 >= 40) {
    clearInterval(id5);
  } else {
    width5++;
    elem5.style.width = width5 + "%";
  }
}

const elem6 = document.getElementById("wordpress");
let width6 = 1;
const id6 = setInterval(frame6, 20);
function frame6() {
  if (width6 >= 75) {
    clearInterval(id6);
  } else {
    width6++;
    elem6.style.width = width6 + "%";
  }
}

const elem7 = document.getElementById("jquery");
let width7 = 1;
const id7 = setInterval(frame7, 20);
function frame7() {
  if (width7 >= 40) {
    clearInterval(id7);
  } else {
    width7++;
    elem7.style.width = width7 + "%";
  }
}

export default SkillsBar;
