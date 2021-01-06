Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_quality: 90,

    constraints:{
        facingMode:"environment"
    }
});
camera = document.getElementById("cam");
Webcam.attach(camera);

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= "<img id='captured_img' src=" + data_uri +">";
    });
}

console.log("ml5 version", ml5.version)
classifier = ml5.imageClassifier('MobileNet', modelloaded())

function modelloaded(){
    console.log("modelloaded!! it works!!");  
}

function check(){
    image = document.getElementById("captured_img");
    classifier.classify(image, gotresult)
}

function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML= results[0].label;
    }    
}