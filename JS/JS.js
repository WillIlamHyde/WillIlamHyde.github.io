window.onload = function(){
	init();
}
function init(){
	var hoodie = document.getElementById("hoodie");
	hoodie.addEventListener('click',Hoodie,false);
}
//Local storage
function Hoodie(){
	window.localStorage.setItem("item","hoodie");
	console.log(localStorage);
}