function spinTop() {
  faceNum = Math.floor(Math.random() * 6);
  console.log(faceNum);
  if (faceNum == 0){
	return document.getElementById("result").innerHTML = "Pon Uno";
  }
  if (faceNum == 1){
  return document.getElementById("result").innerHTML = "Toma Uno";
  } 
  if (faceNum == 2){
  return document.getElementById("result").innerHTML = "Pon Dos";
  } 
  if (faceNum == 3){
  return document.getElementById("result").innerHTML = "Toma Dos";
  } 
  if (faceNum == 4){
  return document.getElementById("result").innerHTML = "Todos Ponen";
  } 
  if (faceNum == 5){
  return document.getElementById("result").innerHTML = "Toma Todo";
  } 
}

