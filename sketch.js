let spaceData;

function setup() {
  createCanvas(600, 600);
  loadJSON('http://api.open-notify.org/astros.json', gotData, 'jsonp');
}

function gotData(data) {
  spaceData = data;
}

function draw() {
  background(0);

  fill(255)
  text("How many people are in space right now?", 100,100)
  if (spaceData) {
    text(spaceData.number, 150,150)
  }
  
  let texty = 250;
  text("What are their names?", 100,200)
  if (spaceData) {
    for(let n=0;n<10; n++){
      text(spaceData.people[n].name, 150,texty)
      texty += 20
      
    }
    
  }

}