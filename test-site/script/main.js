let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/7.png') {
      myImage.setAttribute('src', 'images/8.png');
    } else {
      myImage.setAttribute('src', 'images/7.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = '俊帅在线征婚，' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '俊帅在线征婚，' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
 }