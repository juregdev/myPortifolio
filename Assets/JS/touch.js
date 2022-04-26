var startingX , startingY , movingX , movingY ;
function touchStart(evt){
	startingX = evt.touches[0].clientX ;
	startingY = evt.touches[0].clientY ;
}
function touchMove(evt){
		movingX = evt.touches[0].clientX ;
		movingY = evt.touches[0].clientY ;
}
function touchEnd(){
	if(startingX+100 < movingX){
		console.log('right');
	} else if(startingX-100 > movingX){
			console.log('left');
	}
					 
	if(startingY+100 < movingY){
		console.log('down');
  } else if(startingY-100 > movingY){
		console.log('up');
	}
}

const body = document.querySelector('body')

export const eventTouch = () => {
body.addEventListener('touchstart', ev =>( touchStart(ev)))
}


