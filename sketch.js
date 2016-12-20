var snowflakes = []

function setup() {
  createCanvas(360,640);
  
  //Deal with microphone
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var volume = mic.getLevel();
  
  //If the volume is not enought, re-map it (set a higher newMax).
  var newMax = 5;
  volume = map(volume,0,1,0,newMax);
  
  background(40,52,109);
	
	translate(width/2,height/2);
	var size = map(volume,0,1,width/10,width/4);

console.log(volume);
console.log(size);


	
// tronco	
	push();
//	strokeWeight(size/25);
	line(0,-280,0,100);
	pop();

	
// 1
	push(); 
	scale(size/42,1);
	noStroke();
   	fill(136,176,75);
	quad(-15,-250,15,-270,15,-240,-15,-220)
  	pop();  

// 2	
	push();
	scale(size/38,1);
	noStroke();
	fill(0,148,115);
   	quad(-30,-240,30,-230,30,-200,-30,-210)
	
  	pop();	

// 3	
	push(); 
	scale(size/36,1);
	noStroke();
   	fill(136,176,75);
	quad(-45,-200,45,-230,45,-200,-45,-170)
  	pop();	
	
// 4	
	push(); 
	scale(size/38,1);
	noStroke();
	fill(0,148,115);
   	quad(-60,-190,60,-180,60,-150,-60,-160)
  	pop();	
	
// 5	
	push(); 
	scale(size/36,1);
	noStroke();
   	fill(136,176,75);	
   	quad(-75,-150,75,-170,75,-120,-75,-100)
  	pop();	
	
// 6	
	push(); 
	scale(size/35,1);
	noStroke();
	fill(0,148,115);
   	quad(-90,-120,90,-110,90,-70,-90,-80)
  	pop();
	
// 7	
	push(); 
	scale(size/34,1);
	noStroke();
   	fill(136,176,75);	
   	quad(-105,-70,105,-80,105,-40,-105,-30)
  	pop();

// 8	
	push(); 
	scale(size/33,1);
	noStroke();
	fill(0,148,115);
   	quad(-120,-40,120,-30,120,20,-120,10)
  	pop();
	
// 9
	push(); 
	scale(size/33,1);
	noStroke();
   	fill(136,176,75);	
   	quad(-135,20,135,10,135,60,-135,70)
  	pop();
	
// 0	
	push();
	noStroke();
	fill(240,192,90);
	ellipse(0,-280,size);

	
//	fill(221,65,36);
//	ellipse(75,-145,size/3);
  	pop();	

	
	
// present
	
	if (volume>0.2){
		noStroke();
		fill(221,65,36);
		rect(50,100,100,100);
	}

	if (volume>0.1){
		noStroke();
		fill(147,169,209);
		rect(-100,100,110,100);
	}
	
	if (volume>0.3){
		noStroke();
		fill(247,202,202);
		rect(0,70,60,110);
	}
	
	if (volume>0.4){
		noStroke();
		fill(173,94,153);
		rect(-60,100,50,100);
	}	
	
//text
	
	noStroke();
    fill(200);
    textFont('Roboto Mono');
    textSize(12);
    text("Sing and receive presents",-60,270);	
//neve
	

push();
translate(-width/2,-height/2);
	
if(true){
    var amount= map(volume,0,1,0,5);
    for(i=1; i <= amount; i++) {
      var obj = {
        x: random(0,1),
        y: random(0,-height/10),
        size: random(1, amount+2)
      }
      //add snowflake to the array of snowflakes
      snowflakes.push(obj);
    }
  }
  
  
  for(var i=0; i< snowflakes.length; i++) {
    var fallingSpeed = 1;
    
    // Increase the single snowflake vertical position
    snowflakes[i].y += fallingSpeed + snowflakes[i].y*0.006; // the last piece needs to simulate gravity
    
    // Create a new ellipse using the x and y properties of the snowflake object
    fill(235,235,188)
    noStroke();
    fill(255);
    ellipse(snowflakes[i].x*width, snowflakes[i].y, snowflakes[i].size);
  }
  
  // Ideally at the end of the sketch:
  // remove elements from array when they go out of the window
  // (not a minimum requirement, just useful for better performances)
  for (var i=snowflakes.length-1; i>= 0; i--){
    if (snowflakes[i].y > height){
      snowflakes.splice(i,1);
    }
  }
 
pop();
	
	
	
}