

let weatherdays=[]; //in dieses Array füllen wir die Wettervorschau der kommenden Tage
let key='968bb7ef5bf24b8cb7a92147191101';
let input, button;
let temp;
let place;
let country;
let time;
let description;
let icon="";


let d=600;





function preload() {
  myFont = loadFont('assets/SanFranciscoDisplay-Bold.otf');
  myFont = loadFont('assets/SanFranciscoDisplay-Medium.otf');
  myFont = loadFont('assets/SanFranciscoDisplay-Light.otf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);


    let url = 'https://api.apixu.com/v1/forecast.json?key='+key+'&q=Zürich&days=7';

    input = createInput();
    input.position(width/2-85, 100);
    button = createButton('search');
    button.position(input.x + input.width, 100,);
    button.mousePressed(reloadJson);


  loadJSON(url, gotWeather);//nachdem das json File geladen ist, rufen wir die Funktion gotWeather auf
}



function draw() {
//background(0,0);
clear();
fill(255);
drawTime();
    fill(170)
    textFont('SanFranciscoDisplay-Light');
    textSize(13);
    text(time+"", width/2,height/2-260);
drawPlace();
    fill(255);
    textFont('SanFranciscoDisplay-Medium');
    textSize(30);
    text(place+", "+country, width/2,height/2-230);
drawIcon();
    //textSize(10);
    //text(icon+"", width/2,height/2);
drawTemperature();
    textSize(150);
    textFont('SanFranciscoDisplay-Medium');
    text(temp+"°", width/2+50,height/2+20);
drawDescription();
    textSize(20);
    textFont('SanFranciscoDisplay-Light');
    text(description+"", width/2+50,height/2+100);

}

function text() {

}



 function gotWeather(weather) {
    weatherdays=weather.forecast.forecastday;
    place=weather.location.name;
    country=weather.location.country;
    time=weather.location.localtime;
    temp=weather.current.temp_c;
    description=weather.current.condition.text;

    let iconUrl=weather.current.condition.icon;
   icon=createImg(iconUrl);
  //console.log(iconUrl);

}


function reloadJson(){

    let ort = input.value();
    let url = 'https://api.apixu.com/v1/forecast.json?key='+key+'&q='+ort+'&days=7';

    loadJSON(url, gotWeather);
}



function drawTemperature() {

    let days=weatherdays.length;
    let angle=360/days;

    push();//wir speichern das Koordinatensystem ab
    fill(150,4,20)
    translate(width/2, height/2);//wir verschieben das Koordinatensystem in die Mitte
    rotate(-90); //wir drehen die Canvas um bei 12:00 mit zeichnen zu beginnen


    fill(0);
    for(let s=0;s<days;s++){
        let minTemp = weatherdays[s].day.mintemp_c;
        let maxTemp = weatherdays[s].day.maxtemp_c;


    }

    pop();//wir setzen das Koordinatensystem zurück


}

function drawPlace(){

  let days=weatherdays.length;
  let angle=360/days;

  push();//wir speichern das Koordinatensystem ab
  fill(150,4,20);
  translate(width/2, height/2,);//wir verschieben das Koordinatensystem in die Mitte

  fill(0);
  for(let s=0;s<days;s++){
      let minTemp = weatherdays[s].day.mintemp_c;
      let maxTemp = weatherdays[s].day.maxtemp_c;


  }

  pop();//wir setzen das Koordinatensystem zurück

}

function drawCountry(){

  let days=weatherdays.length;
  let angle=360/days;

  push();//wir speichern das Koordinatensystem ab
  fill(150,4,20);
  translate(width/2, height/2,);//wir verschieben das Koordinatensystem in die Mitte

  fill(0);
  for(let s=0;s<days;s++){
      let minTemp = weatherdays[s].day.mintemp_c;
      let maxTemp = weatherdays[s].day.maxtemp_c;


  }

  pop();//wir setzen das Koordinatensystem zurück

}

function drawTime(){

  let days=weatherdays.length;
  let angle=360/days;

  push();//wir speichern das Koordinatensystem ab
  fill(150,4,20);
  translate(width/2, height/2,);//wir verschieben das Koordinatensystem in die Mitte

  fill(0);
  for(let s=0;s<days;s++){
      let minTemp = weatherdays[s].day.mintemp_c;
      let maxTemp = weatherdays[s].day.maxtemp_c;


  }

  pop();//wir setzen das Koordinatensystem zurück

}

function drawDescription(){

  let days=weatherdays.length;
  let angle=360/days;

  push();//wir speichern das Koordinatensystem ab
  fill(150,4,20);
  translate(width/2, height/2,);//wir verschieben das Koordinatensystem in die Mitte

  fill(0);
  for(let s=0;s<days;s++){
      let minTemp = weatherdays[s].day.mintemp_c;
      let maxTemp = weatherdays[s].day.maxtemp_c;


  }

  pop();//wir setzen das Koordinatensystem zurück

}

function drawIcon(){

  let days=weatherdays.length;
  let angle=360/days;

  push();//wir speichern das Koordinatensystem ab
  fill(150,4,20);
  translate(width/2, height/2,);//wir verschieben das Koordinatensystem in die Mitte
if(icon!=""){
  image(icon, -170, -170, 130, 130);
}

  fill(0);
  for(let s=0;s<days;s++){
      let minTemp = weatherdays[s].day.mintemp_c;
      let maxTemp = weatherdays[s].day.maxtemp_c;


  }

  pop();//wir setzen das Koordinatensystem zurück

}
