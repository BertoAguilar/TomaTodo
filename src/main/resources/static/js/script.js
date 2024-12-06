const image = document.createElement('img');
const playAgain = document.createElement('a');

function spinTop() {
  faceNum = Math.floor(Math.random() * 6);
  if (faceNum == 0){
	image.src = "/img/pon_uno.jpg"; 
	image.alt = "Pon Uno Img";
	image.className = "topImg";
	var inputImg = document.getElementById("topImg");
	inputImg.appendChild(image);
	return;
  }
  
  
  if (faceNum == 1){
	image.src = "/img/toma_uno.jpg"; 
	image.alt = "Toma Uno Img";
	image.className = "topImg";
	var inputImg = document.getElementById("topImg");
	inputImg.appendChild(image);
  return;
  } 
  
  
  if (faceNum == 2){
	image.src = "/img/pon_dos.jpg"; 
	image.alt = "Pon Dos Img";
	image.className = "topImg"
	var inputImg = document.getElementById("topImg");
	inputImg.appendChild(image);
  	return;
  } 
  
  
  if (faceNum == 3){
	image.src = "/img/toma_dos.jpg"; 
	image.alt = "Toma Dos Img";
	image.className = "topImg"
	var inputImg = document.getElementById("topImg");
	inputImg.appendChild(image);
  	return;
  } 
  
  
  if (faceNum == 4){
	image.src = "/img/todos_ponen.jpg"; 
	image.alt = "Todos Ponen Img";
	image.className = "topImg"
	var inputImg = document.getElementById("topImg");
	inputImg.appendChild(image);
	return;
	} 
  
  
  if (faceNum == 5){
	image.src = "/img/toma_todo.jpg"; 
	image.alt = "Toma Todo Img";
	image.className = "topImg";
	var inputImg = document.getElementById("topImg");
	inputImg.appendChild(image);
	playAgain.href = "/";
	playAgain.innerHTML = "<img src='/img/playAgain.png' class='playAgainBtn'>";
	var inputPlay = document.getElementById("playAgain");
	inputPlay.appendChild(playAgain);
  	return;
  } 
  
}