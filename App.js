const audio1 = document.getElementById("Q");
const audio2 = document.getElementById("W");
const audio3 = document.getElementById("E");
const audio4 = document.getElementById("A");
const audio5 = document.getElementById("S");
const audio6 = document.getElementById("D");
const audio7 = document.getElementById("Z");
const audio8 = document.getElementById("X");
const audio9 = document.getElementById("C");
const note = document.getElementById("note");

function bell1() {
    audio1.currentTime = 0;
    audio1.play();
    note.innerText = "c2";
}

function bell2() {
    audio2.currentTime = 0;
    audio2.play();
    note.innerText = "c3";
}
function bell3() {
    audio3.currentTime = 0;
    audio3.play();
    note.innerText = "d1";
}
function bell4() {
    audio4.currentTime = 0;
    audio4.play();
    note.innerText = "d2";
}
function bell5() {
    audio5.currentTime = 0;
    audio5.play();
    note.innerText = "e1";
}
function bell6() {
    audio6.currentTime = 0;
    audio6.play();
    note.innerText = "f1";
}
function bell7() {
    audio7.currentTime = 0;
    audio7.play();
    note.innerText = "f2";
}
function bell8() {
    audio8.currentTime = 0;
    audio8.play();
    note.innerText = "g1";
}
function bell9() {
    audio9.currentTime = 0;
    audio9.play();
    note.innerText = "g2";
}

window.addEventListener("keydown", function(e) {
    if (e.key === 'Q' || e.key === 'q') {
       bell1();
    }
    if (e.key === 'W' || e.key === 'w') {
        bell2();
    }
    if (e.key === 'E' || e.key === 'e') {
        bell3();
    }
    if (e.key === 'A' || e.key === 'a') {
        bell4();
    }
    if (e.key === 'S' || e.key === 's') {
        bell5();
    }
    if (e.key === 'D' || e.key === 'd') {
        bell6();
    }
    if (e.key === 'Z' || e.key === 'z') {
        bell7();
    }
    if (e.key === 'X' || e.key === 'x') {
        bell8();
    }
    if (e.key === 'C' || e.key === 'c') {
        bell9();
    }
  });