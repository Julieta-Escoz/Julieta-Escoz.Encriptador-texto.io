var input = document.querySelector("input");
var button = document.querySelector("button");
button.onclick = encrypt;



function encrypt() {

    
    var message = input.value.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');

    document.getElementById("msg2").value = message.toLowerCase();

}


var button = document.getElementById("message2");
button.onclick = decrypt;

function decrypt() { 

    var message = input.value.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');

    document.getElementById("msg2").value = message;

}


var input2 = document.getElementById("msg2");
var button = document.getElementById("copy");
button.onclick = copy;

function copy() {
    
    var content = document.getElementById('msg2');

    content.select();
    document.execCommand('copy');
    
}
