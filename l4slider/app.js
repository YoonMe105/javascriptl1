var slides = document.getElementsByClassName('carousel-item');
// console.log(slides);  //HTML Collection
var dots = document.querySelectorAll('.dot');
// console.log(dots);  //Nodelist

let curslide = 1;

document.getElementById('prev').addEventListener('click',function(){
	carousel(curslide -= 1);
});

document.getElementById('next').addEventListener('click',function(){
	carousel(curslide += 1);
});

for(var q = 0; q < dots.length ; q++){

	dots[q].addEventListener('click',function(){

		curslide = this.getAttribute("data-bs-slide-to");
        carousel(curslide);

	});

}

carousel(curslide);

function carousel(slidenum){
	// console.log(slidenum);
	var x,y;

    // hide all slides
    for(x=0;x < slides.length ; x++){
    	slides[x].style.display = "none";
    }

    // remove .active from dots
    for(y=0;y < slides.length ; y++){
    	dots[y].className = dots[y].className.replace("active","");
    }

    // res for currslide 1 to 3 & 3 to 1 ( 4 to 1 ) ( 0 to 4 )
    if(slidenum > slides.length){
    	curslide = 1;
    }else if(slidenum < 1){
    	curslide = slides.length;
    }

    // console.log(curslide);

    slides[curslide - 1].style.display = "block";

    dots[curslide - 1].className += " active";

}