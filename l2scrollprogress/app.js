var getprogress = document.getElementById('progress-bar');

window.onscroll = function(){
	scrollpoint();
};

function scrollpoint(){
	// console.log('i am working');

	var getscrolltop = document.documentElement.scrollTop;
	// console.log(getscrolltop);
	var getscrollheight = document.documentElement.scrollHeight;
	// console.log(getscrollheight);
	var getclientheight = document.documentElement.clientHeight;
	// console.log(getclientheight);

	var getcalcheight = getscrollheight - getclientheight;
	// console.log(getcalcheight);

	var gettotalheight = Math.round(getscrolltop * 100 / getcalcheight);
	// console.log(gettotalheight);

	getprogress.style.width = `${gettotalheight}%`;
}

function printme(){
	window.print();
}