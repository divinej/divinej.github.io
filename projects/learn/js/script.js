let btn = document.getElementById("order");
let elem1 = document.getElementById("detail");
let elem2 = document.getElementById("analytics");


elem1.addEventListener("click", display1);
elem2.addEventListener("click", display2);

function display1() {
	btn.style.display = 'none';
	elem2.classList.remove("acc-details");
	elem2.classList.add("acc-analytics");
	elem1.classList.remove("acc-analytics");
	elem1.classList.add("acc-details");
}

function display2() {
	btn.style.display ='block';
	elem1.classList.remove("acc-details");
	elem1.classList.add("acc-analytics");
	elem2.classList.remove("acc-analytics");
	elem2.classList.add("acc-details");
}