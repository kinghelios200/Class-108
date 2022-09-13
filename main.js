var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function startTheWeb() {
    document.getElementById("textbook").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbook").innerHTML = Content;
    if(Content == "take my selfie"){
        console.log("taking selfie ---");
        Speak();
    }
}

function Speak(){
    var synth = window.SpeechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    console.log(speak_data);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    }, 5000);
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

Webcam.set({
    width:360, 
    height:250, 
    image_format:'png', 
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='selfie_image' src='" + data_uri + "'>";
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}