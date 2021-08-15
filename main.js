function setup(){
    canvas = createCanvas(215, 100)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/o8OBLEdY4/model.json', modelLoaded)
}
function modelLoaded(){
console.log("Model Loaded!")
}
function draw(){
image(video, 0, 0, 215, 100)

}
