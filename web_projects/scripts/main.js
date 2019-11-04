let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sunrise.png') {
      myImage.setAttribute ('src','images/tiger.png');
    } else {
      myImage.setAttribute ('src','images/sunrise.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name. ');
    if(!myName || myName === null) {
        setUserName();
    } else{

        myHeading.textContent = 'Future Developer, ' + myName;
    }


}
myButton.onclick = function() {
  setUserName();
}

