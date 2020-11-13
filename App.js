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
const drumPad = document.getElementsByClassName("drum-pad");

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
        const x = document.createElement("STYLE");
        const t = document.createTextNode("#a {height: 95px; width: 95px; margin: 12.5px;}");
        x.appendChild(t);
        document.head.appendChild(x);     
    }
    if (e.key === 'W' || e.key === 'w') {
        bell2();
        const x = document.createElement("STYLE");
        const t = document.createTextNode("#b {height: 95px; width: 95px; margin: 12.5px;}");
        x.appendChild(t);
        document.head.appendChild(x);
    }
    if (e.key === 'E' || e.key === 'e') {
        bell3();
        const x = document.createElement("STYLE");
        const t = document.createTextNode("#c {height: 95px; width: 95px; margin: 12.5px;}");
        x.appendChild(t);
        document.head.appendChild(x);
    }
    if (e.key === 'A' || e.key === 'a') {
        bell4();
        const x = document.createElement("STYLE");
        const t = document.createTextNode("#d {height: 95px; width: 95px; margin: 12.5px;}");
        x.appendChild(t);
        document.head.appendChild(x);
    }
    if (e.key === 'S' || e.key === 's') {
        bell5();
        const x = document.createElement("STYLE");
        const t = document.createTextNode("#e {height: 95px; width: 95px; margin: 12.5px;}");
        x.appendChild(t);
        document.head.appendChild(x);
    }
    if (e.key === 'D' || e.key === 'd') {
        bell6();
        const x = document.createElement("STYLE");
        const t = document.createTextNode("#f {height: 95px; width: 95px; margin: 12.5px;}");
        x.appendChild(t);
        document.head.appendChild(x);
    }
    if (e.key === 'Z' || e.key === 'z') {
        bell7();
        const x = document.createElement("STYLE");
        const t = document.createTextNode("#g {height: 95px; width: 95px; margin: 12.5px;}");
        x.appendChild(t);
        document.head.appendChild(x);
    }
    if (e.key === 'X' || e.key === 'x') {
        bell8();
        const x = document.createElement("STYLE");
        const t = document.createTextNode("#h {height: 95px; width: 95px; margin: 12.5px;}");
        x.appendChild(t);
        document.head.appendChild(x);
    }
    if (e.key === 'C' || e.key === 'c') {
        bell9();
        const x = document.createElement("STYLE");
        const t = document.createTextNode("#i {height: 95px; width: 95px; margin: 12.5px;}");
        x.appendChild(t);
        document.head.appendChild(x);
    }
});

window.addEventListener("keyup", function(e) {
    if (e.key === 'Q' || e.key === 'q') {
       const x = document.createElement("STYLE");
       const t = document.createTextNode("#a {height: 100px; width: 100px; margin: 10px;}");
       x.appendChild(t);
       document.head.appendChild(x);
    }
    if (e.key === 'W' || e.key === 'w') {
        const x = document.createElement("STYLE");
        const t = document.createTextNode("#b {height: 100px; width: 100px; margin: 10px;}");
        x.appendChild(t);
        document.head.appendChild(x);
    }
    if (e.key === 'E' || e.key === 'e') {
        const x = document.createElement("STYLE");
        const t = document.createTextNode("#c {height: 100px; width: 100px; margin: 10px;}");
        x.appendChild(t);
        document.head.appendChild(x);
    }
    if (e.key === 'A' || e.key === 'a') {
        const x = document.createElement("STYLE");
        const t = document.createTextNode("#d {height: 100px; width: 100px; margin: 10px;}");
        x.appendChild(t);
        document.head.appendChild(x);
    }
    if (e.key === 'S' || e.key === 's') {
        const x = document.createElement("STYLE");
        const t = document.createTextNode("#e {height: 100px; width: 100px; margin: 10px;}");
        x.appendChild(t);
        document.head.appendChild(x);
    }
    if (e.key === 'D' || e.key === 'd') {
        const x = document.createElement("STYLE");
        const t = document.createTextNode("#f {height: 100px; width: 100px; margin: 10px;}");
        x.appendChild(t);
        document.head.appendChild(x);
    }
    if (e.key === 'Z' || e.key === 'z') {
        const x = document.createElement("STYLE");
        const t = document.createTextNode("#g {height: 100px; width: 100px; margin: 10px;}");
        x.appendChild(t);
        document.head.appendChild(x);
    }
    if (e.key === 'X' || e.key === 'x') {
        const x = document.createElement("STYLE");
        const t = document.createTextNode("#h {height: 100px; width: 100px; margin: 10px;}");
        x.appendChild(t);
        document.head.appendChild(x);
    }
    if (e.key === 'C' || e.key === 'c') {
        const x = document.createElement("STYLE");
        const t = document.createTextNode("#i {height: 100px; width: 100px; margin: 10px;}");
        x.appendChild(t);
        document.head.appendChild(x);
    }
});
