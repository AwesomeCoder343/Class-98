var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult=function run (event){
    console.log(event);
    var Content = event.results [0] [0].transcript;
    
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    //To check if what the user speaks is the same as take my selfie if so function speak will be called
    if (Content == "take my selfie"){
        speak();
    }
    
}
function speak(){
    var synth = window.speechSynthesis;
    var speak_data = "taking your selfie in five seconds"
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    //This is to wait for 5 seconds before taking selfie
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
   
}

Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality: 90
});
var camera = document.getElementById("camera");
//This will take the snapshot and create the image in html for the user to see.
function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">'
    });

}
//Function save is to save the image and download image
function save(){
    var link=document.getElementById("link");
    var image = document.getElementById("selfie_image").src;    
    link.href=image;
    link.click();
}