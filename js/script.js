let btn = document.getElementById("order");
let elem1 = document.getElementById("detail");
let elem2 = document.getElementById("analytics");
let elem3 = document.getElementById("action");


elem1.addEventListener("click", display1);
elem2.addEventListener("click", display2);

function display1() {
	btn.style.display = 'none';
	elem2.classList.remove("acc-details");
	elem2.classList.add("acc-analytics");
	elem1.classList.remove("acc-analytics");
	elem1.classList.add("acc-details");
	elem3.style.display = 'block';
	document.getElementById("acc").style.display = 'block';
}

function display2() {
	btn.style.display ='block';
	elem1.classList.remove("acc-details");
	elem1.classList.add("acc-analytics");
	elem2.classList.remove("acc-analytics");
	elem2.classList.add("acc-details");
	elem3.style.display = 'none';
	document.getElementById("acc").style.display = 'none';
}