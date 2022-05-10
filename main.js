function startClassifying()
{
    navigator.mediaDevices.getUserMedia({ audio:true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/z00mZuhVr/model.json', readyModel);
}
 

function readyModel()
{
    classifier.classify(gotResult);
}

function gotResult(error, result) {
    if (result) {
        console.log(result);
    }
}