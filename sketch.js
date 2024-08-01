function setup() {
    createCanvas(400, 400);
    background('rgb(152,152,235)');
  
  }
  
  function draw() {
  
    
    stroke('orange');
    fill('yellow')
    
    
    //console.log(mouseIsPressed);
    
     if(mouseIsPressed)
     circle(mouseX , mouseY , 10 , 15);
    
      
  
  } 
  