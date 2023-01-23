const getmodal = document.getElementById('signupmodal');
const btnsignup = document.getElementById('signup');
const openfsbtn = document.getElementById('openfullscreen');
const closefsbtn = document.getElementById('closefullscreen');
const closebtn = document.querySelector('.closebtn');

btnsignup.addEventListener('click',function(){
	getmodal.style.display = "block";
});

closebtn.addEventListener('click',function(){
	getmodal.style.display = "none";
});

window.onclick = function(e){

	if(e.target === getmodal){
		getmodal.style.display = "none";
	}
}



var getde = document.documentElement;
// console.log(getde);

openfsbtn.addEventListener('click',function(){

	if(getde.requestFullscreen){
		getde.requestFullscreen();
	}else if(getde.msRequestFullscreen){
		getde.msRequestFullscreen();
	}else if(getde.webkitRequestFullscreen){
		getde.webkitRequestFullscreen();
	}

	closefsbtn.style.display = "inline-block";

});


closefsbtn.addEventListener('click',function(){

	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.msExitFullscreen){
		document.msExitFullscreen();
	}else if(document.webkitEixtFullscreen){
		document.webkitEixtFullscreen();
	}

	closefsbtn.style.display = "none";

});
