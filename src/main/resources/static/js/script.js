const image = document.createElement('img'); 

function spinTop() {
  faceNum = Math.floor(Math.random() * 6);
  console.log(faceNum);
  if (faceNum == 0){
	image.src = "/img/pon_uno.jpg"; 
	image.alt = "Pon Uno Img";
	image.className = "topImg";
	var inputImg = document.getElementById("topImg");
	inputImg.appendChild(image);
	return document.getElementById("result").innerHTML = "Pon Uno";
  }
  
  
  if (faceNum == 1){
  return document.getElementById("result").innerHTML = "Toma Uno";
  } 
  
  
  if (faceNum == 2){
	image.src = "/img/pon_dos.jpg"; 
	image.alt = "Pon Dos Img";
	image.className = "topImg"
	var inputImg = document.getElementById("topImg");
	inputImg.appendChild(image);
  	return document.getElementById("result").innerHTML = "Pon Dos";
  } 
  
  
  if (faceNum == 3){
	image.src = "/img/toma_dos.jpg"; 
	image.alt = "Toma Dos Img";
	image.className = "topImg"
	var inputImg = document.getElementById("topImg");
	inputImg.appendChild(image);
  	return document.getElementById("result").innerHTML = "Toma Dos";
  } 
  
  
  if (faceNum == 4){
	image.src = "/img/todos_ponen.jpg"; 
	image.alt = "Todos Ponen Img";
	image.className = "topImg"
	var inputImg = document.getElementById("topImg");
	inputImg.appendChild(image);
	return document.getElementById("result").innerHTML = "Todos Ponen";
	} 
  
  
  if (faceNum == 5){
	image.src = "/img/toma_todo.jpg"; 
	image.alt = "Toma Todo Img";
	image.className = "topImg";
	var inputImg = document.getElementById("topImg");
	inputImg.appendChild(image);
  	return document.getElementById("result").innerHTML = "Toma Todo";
  } 
}