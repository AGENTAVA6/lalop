function setup(){
    canvas = createCanvas(300,300)
    video  = createCapture(VIDEO)
 video.hide()
 canvas.center()
 video.size(300,300)
 classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/q6orjgp3H/model.json", modelLoaded)

}
function draw(){
    image(video, 0 ,0, 300, 300)
    classifier.classify(video, gotResult);
}
function modelLoaded(){
    console.log("modellllllllllllllll")
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results)
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
    }