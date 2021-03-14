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
   speak();
   Webcam.attach( '#camera')
}

function speak() {
    var synth = window.speechSynthesis;

    speakdata=document.getElementById("textbox").value;

    saythis= new SpeechSynthesisUtterance(speakdata);

    synth.speak(saythis)
}

//code for setting up the webcam

Webcam.set({
    width :  360,
    height : 250,
    image_format : 'jpeg',
    jpeg_quality : 90
})
