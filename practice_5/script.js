function sendRequest(method,url){
  const xhr = new XMLHttpRequest();
  xhr.onload = function(){
    console.log(this.response);
    //console.log(JSON.parse(this.responseText).userId);
  };

  xhr.open(method,url);

  xhr.responseType = "json";

  xhr.send();
}

//get data
function getData(){


}

//send data
function sendData(){
    
}

const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click",getData);
sendButton.addEventListener("click",sendData);
