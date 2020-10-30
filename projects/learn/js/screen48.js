// plus 1
let minus1 = document.getElementById('minus1');
let text1 = document.getElementById('text1');
let add1 = document.getElementById('add1');

minus1.addEventListener("click", minusOne);
add1.addEventListener("click", plusOne);

function minusOne() {
    (text1.innerHTML <= 0) ? text1.innerHTML = 0 : text1.innerHTML -= 1;
}

function plusOne() {
    let num1 = +text1.innerHTML;
    text1.innerHTML = num1 + 1;
}

// plus 2
let minus2 = document.getElementById('minus2');
let text2 = document.getElementById('text2');
let add2 = document.getElementById('add2');

minus2.addEventListener("click", minusOne2);
add2.addEventListener("click", plusOne2);

function minusOne2() {
    (text2.innerHTML <= 0) ? text2.innerHTML = 0 : text2.innerHTML -= 1;
}

function plusOne2() {
    let num1 = +text2.innerHTML;
    text2.innerHTML = num1 + 1;
}

// plus 3
let minus3 = document.getElementById('minus3');
let text3 = document.getElementById('text3');
let add3 = document.getElementById('add3');

minus3.addEventListener("click", minusOne3);
add3.addEventListener("click", plusOne3);

function minusOne3() {
    (text3.innerHTML <= 0) ? text3.innerHTML = 0 : text3.innerHTML -= 1;
}

function plusOne3() {
    let num1 = +text3.innerHTML;
    text3.innerHTML = num1 + 1;
}

// plus 4
let minus4 = document.getElementById('minus4');
let text4 = document.getElementById('text4');
let add4 = document.getElementById('add4');

minus4.addEventListener("click", minusOne4);
add4.addEventListener("click", plusOne4);

function minusOne4() {
    (text4.innerHTML <= 0) ? text4.innerHTML = 0 : text4.innerHTML -= 1;
}

function plusOne4() {
    let num1 = +text4.innerHTML;
    text4.innerHTML = num1 + 1;
}

// plus 5
let minus5 = document.getElementById('minus5');
let text5 = document.getElementById('text5');
let add5 = document.getElementById('add5');

minus5.addEventListener("click", minusOne5);
add5.addEventListener("click", plusOne5);

function minusOne5() {
    (text5.innerHTML <= 0) ? text5.innerHTML = 0 : text5.innerHTML -= 1;
}

function plusOne5() {
    let num1 = +text5.innerHTML;
    text5.innerHTML = num1 + 1;
}