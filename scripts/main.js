var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'JS TITLE';

/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

var image_to_be_changed = document.querySelector('img');

image_to_be_changed.onclick = function()
{
  var src = image_to_be_changed.getAttribute('src');
  if(src==='images/blackhood.jpg')
  {
    image_to_be_changed.setAttribute('src','images/js_image.jpg');
  }
  else
  {
    image_to_be_changed.setAttribute('src','images/blackhood.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Hello, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
