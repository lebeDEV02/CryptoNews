$(function () {
	const slidesCounter = document.querySelectorAll('.articles__item'),
	activeBlock = document.querySelector('.articles__items--active'),
	numbersOfBlock = document.querySelectorAll('.articles__items')
	leftAngle = document.querySelector('.articles__angle-left'),
	rightAngle = document.querySelector('.articles__angle-right');
	rightAngle.style.transition = 'all .4s';
	leftAngle.style.transition = 'all .4s';
		syncSlider = function(){
		if (counter === 0){
			leftAngle.style.opacity = "0.4";
		} else{
			leftAngle.style.opacity = "1";
		}
		if (counter === numbersOfBlock.length - 1){
			rightAngle.style.opacity = "0.4";
		} else{
			rightAngle.style.opacity = "1";
		}
	}
	let counter = 0;
	syncSlider();
	leftAngle.addEventListener('click', function () {
		if(counter !=0){
		numbersOfBlock[counter].classList.remove('articles__items--active');
		counter -= 1;
		numbersOfBlock[counter].classList.add('articles__items--active');	
		syncSlider();
		}
		});
	rightAngle.addEventListener('click', function () {
		if(counter !=numbersOfBlock.length - 1){
		numbersOfBlock[counter].classList.remove('articles__items--active');
		counter += 1;
		numbersOfBlock[counter].classList.add('articles__items--active');
		syncSlider();              
		}
	});
	console.log(numbersOfBlock.length);
})