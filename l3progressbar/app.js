const getprogressbar = document.querySelector('.progress-bar');
const getdownloadbtn = document.querySelector('.downloadbtn');

const setsrc = "https://linkedin.com";

getdownloadbtn.addEventListener('click',function(){

	getdownloadbtn.setAttribute('disabled',true);
	
	let setvalue = 0;

	let setint = setInterval(progressinc,50);

	function progressinc(){

		if(setvalue >= 100){

			clearInterval(setint);

			window.location.href = setsrc;

		}else{
			setvalue++;

			getprogressbar.style.width = `${setvalue}%`;

			getprogressbar.setAttribute('data-inc',`${setvalue}%`);
		}

	}

})