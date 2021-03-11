var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function (SpeechResults){
   console.log(SpeechResults)
   output=SpeechResults.results[0][0].transcript
   document.getElementById("textbox").innerHTML=output;
}