var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/spinoza.jpg') {
		myImage.setAttribute('src','images/spinoza2.jpg');
	} else {
		myImage.setAttribute('src','images/spinoza.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Spinoza is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Spinoza is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}