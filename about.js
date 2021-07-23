console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("form has been submited successfully")
	//console.log('form submit');
}

const picAlert = e => {
	e.preventDefault()
	alert("You've got really sculpted abs!")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('img').addEventListener('mouseover',picAlert)