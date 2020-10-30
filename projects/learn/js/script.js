// $(document).ready(function(){
//   $('.carousel').carousel({
//     // interval: 3000
//   })
// });
  /********************************************************************
*********** 	SCREEN 5 			 ***********************************
********************************************************************/
let btn1 = document.getElementById("plus");
let btn2 = document.getElementById("minus");
let btn3 = document.getElementById("questionBtn");

btn3.addEventListener("click", toggleDp);

function toggleDp() {
	btn1.classList.toggle("show");
  btn2.classList.toggle("show");
}



