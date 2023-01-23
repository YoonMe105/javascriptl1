var getacctitles = document.querySelectorAll('.acctitle');
var getacccontents = document.querySelectorAll('.accontent');
// console.log(getacctitles);
// console.log(getacccontents);


for(var x = 0 ; x < getacctitles.length ; x++){

	getacctitles[x].addEventListener('click',function(e){
		// console.log(e.target);
		// console.log(this);

		this.classList.toggle('active');
		var getcontent = this.nextElementSibling;
		// console.log(getcontent);

		if(getcontent.style.height){
			getcontent.style.height = null;  //beware can't set 0
		}else{
			getcontent.style.height = getcontent.scrollHeight +"px";
			// console.log(getcontent.style.height);
		}


	});

	if(getacctitles[x].classList.contains('active')){
		getacccontents[x].style.height = getacccontents[x].scrollHeight +"px";
	}

}