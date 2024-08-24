function encrypt() {
  var getTextToEncrypt = document.getElementById("inserted-text").value;

  if (getTextToEncrypt == "") {
    alert("Digite uma frase para ser encriptada");
  } else {

    document.getElementById("container__right__to__encrypt").style.display = "none";
    document.getElementById("container__right__to__decrypt").style.display = "block";
    document.getElementById("button__right").style.background = "white";  
    
    getTextToEncrypt = getTextToEncrypt.replace(/e/g,'enter'); 
    getTextToEncrypt = getTextToEncrypt.replace(/i/g, 'imes');
    getTextToEncrypt = getTextToEncrypt.replace(/a/g, 'ai');
    getTextToEncrypt = getTextToEncrypt.replace(/o/g, 'ober'); 
    getTextToEncrypt = getTextToEncrypt.replace(/u/g, 'ufat');      
    
    clear();
  
    document.getElementById("container__right__to__text__decrypt").innerHTML = getTextToEncrypt;      
  }
}

function decrypt() {
  var getTextToDecrypt = document.getElementById("inserted-text").value;

  if (getTextToDecrypt == "") {
    alert("Digite uma frase encriptada para ser desencriptada");
  } else {    
      getTextToDecrypt = getTextToDecrypt.replace(/enter/g,'e');      
      getTextToDecrypt = getTextToDecrypt.replace(/imes/g, 'i');
      getTextToDecrypt = getTextToDecrypt.replace(/ai/g, 'a');
      getTextToDecrypt = getTextToDecrypt.replace(/ober/g, 'o'); 
      getTextToDecrypt = getTextToDecrypt.replace(/ufat/g, 'u');   
      
      clear();
    
      document.getElementById("container__right__to__text__decrypt").innerHTML = getTextToDecrypt;
  }  
}

function copy() {
  document.getElementById("container__right__to__text__decrypt").innerHTML = "Nenhuma Mensagem";
}

function clear() {
  document.getElementById("inserted-text").value = "";    
}