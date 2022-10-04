//https://teachablemachine.withgoogle.com/models/d12wbMpCr/
//https://teachablemachine.withgoogle.com/models/d12wbMpCr/
//https://teachablemachine.withgoogle.com/models/d12wbMpCr/
var prediction_1 = "";
var prediction_2 = "";

Webcam.set({
    height:300,
    width:350,
    image_format : 'png',
    png_quality : 90
})
camera = document.getElementById("camera");
Webcam.attach('#camera');


function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/d12wbMpCr/model.json', modelLoaded);

function modelLoaded()
{
    console.log("Model loaded");
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "The second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
if (error) {
    console.error(error);
}else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();
    if(results[0].label == "sad")
    {
        document.getElementById("update_emoji").innerHTML = "&#128542"
    }
    if(results[0].label == "happy")
    {
        document.getElementById("update_emoji").innerHTML = "&#128512"
    }
    if(results[0].label == "Laughing")
    {
        document.getElementById("update_emoji").innerHTML = "&#128514"
    }
    if(results[0].label == "tired")
    {
        document.getElementById("update_emoji").innerHTML = "&#128560"
    }
    if(results[0].label == "Cry")
    {
        document.getElementById("update_emoji").innerHTML = "&#128557"
    }




    if(results[1].label == "sad")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128542"
    }
    if(results[1].label == "happy")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128512"
    }
    if(results[1].label == "Laughing")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128514"
    }
    if(results[1].label == "tired")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128560"
    }
    if(results[1].label == "Cry")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128557"
    }
}
}