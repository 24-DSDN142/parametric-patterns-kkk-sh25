//your parameter variables go here!
let canvas_width = 200; // canvas width
let canvas_height = 200; // canvas height
let centerX = canvas_width/2;//drawing position
let centerY = canvas_height/2;//drawing position


//CAT VARIABLES
let cat_head = 45; // Size of the cat head
let eye_Size = 18; // size of the eyes
let pupil_width = 9; // size of the pupil 
let pupil_height = 5; // height size of the pupil
let mouth_Size = 10; // mouth size

let star = 29.5; // Star Size
let moon_size = 55; // Moon size
let heart_size = 70;

//COLOURS
let cloudColor = [96, 168, 219];
let circleColor = [212, 107, 102];
let heartColor = [217, 129, 56];
let eyeColor = [232, 220, 116];
let pupilColor = [66, 64, 64];
let mouth_color = [225];
let moon_cover = [219, 210, 204];
let star_color = [230, 198, 96];

//IF Statements
// Symbol type (1 for stars and circle, 2 for heart and circles, 3 for heart and stars)
let symbolType = 2; // Change this to switch  between stars,circles, and heart

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);//GRID_WALLPAPER DEVELOP_GLYPH
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}
function wallpaper_background() {
  background(219, 210, 204); //light honeydew green colour
}
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  // Draw heart
  function drawHeart(centerX, centerY, heart_size) {
    fill(heartColor);
    noStroke();
    beginShape();
    vertex(centerX, centerY);
    bezierVertex(centerX - heart_size / 2, centerY - heart_size / 2, centerX - heart_size / 2, centerY + heart_size / 2, centerX, centerY + heart_size / 2);
    bezierVertex(centerX + heart_size / 2, centerY + heart_size / 2, centerX + heart_size / 2, centerY - heart_size / 2, centerX, centerY);
    endShape(CLOSE);
  }

  // Draw moon
  function drawMoon(centerX, centerY, moon_size) {
    fill(circleColor);
    noStroke();
    ellipse(centerX, centerY, moon_size, moon_size);
  }

  //cat head
  noStroke();
  fill(66, 64, 64);
  square(centerX-23, centerY-35, cat_head,cat_head - 25);

  //Body
  triangle(centerX-1, centerY-20, centerX+centerX/4.3, centerY+centerY/1.7, centerX-centerX/4.3, centerY+centerY/1.7);
  
  // Draw red collar
  fill(179, 82, 79);
  noStroke();
  rect(centerX - 10, centerY + 11, cat_head - 26, 5); // Collar
  fill(star_color);
  circle(centerX, centerY+13.5, 4);

  //ears
  fill(66, 64, 64);
  triangle(centerX-centerX/3.5,centerY-centerY/2,centerX-10,centerY-centerY/3,centerX-23,centerY-15); //left ear
  triangle(centerX+centerX/3.5,centerY-centerY/2,centerX+9,centerY-centerY/3,centerX+22,centerY-15);//right ear
  fill(179, 82, 79)
  triangle(centerX+centerX/4.5,centerY-centerY/2.5,centerX+13,centerY-centerY/3.3,centerX+21,centerY-20);
  triangle(centerX-centerX/4.5 ,centerY-centerY/2.5,centerX-13,centerY-centerY/3.3,centerX-21,centerY-20);

  //eyes
  fill(eyeColor);
  noStroke();
  circle(centerX-10, centerY-15,eye_Size);//left eye
  circle(centerX+10, centerY-15,eye_Size);//right eye
  fill(pupilColor);
  ellipse(centerX-8, centerY-15,pupil_height,pupil_width);//left pupil
  ellipse(centerX+8, centerY-15,pupil_height,pupil_width);//right pupil


  //whiskers
  strokeWeight(1);
  stroke(66, 64, 64);
  //left whisker
  line(centerX-30, centerY-4, centerX-5, centerY-3);
  line(centerX-30, centerY+2, centerX-5, centerY-3);
  line(centerX-30, centerY+8, centerX-5, centerY-3);
  //right whiskers
  line(centerX+30, centerY-4, centerX+5, centerY-3);
  line(centerX+30, centerY+2, centerX+5, centerY-3);
  line(centerX+30, centerY+8, centerX+5, centerY-3);
  
  //nose
  fill(225);
  triangle(centerX-2,centerY-8,centerX,centerY-4,centerX+2,centerY-8)

  //mouth
  fill(mouth_color);
  arc(centerX, centerY-2, mouth_Size, mouth_Size, 360, 180);

  if (symbolType === 1) { // star and circles
  // Draw stars at the corners
  noStroke();
  // Middle Left
  fill(star_color);
  ellipse(centerX - 73, centerY - 60, star + 15, star + 18); // Star
  fill(moon_cover);
  ellipse(centerX - 89, centerY - 80, star + 4, star + 13); // Cover
  ellipse(centerX - 89, centerY - 40, star + 4, star + 13); // Cover
  ellipse(centerX - 56, centerY - 80, star + 4, star + 13); // Cover
  ellipse(centerX - 56, centerY - 40, star + 4, star + 13); // Cover
    
 // Bottom Right
  fill(star_color);
  ellipse(centerX + 73, centerY + 63, star + 20, star + 25); // Star
  fill(moon_cover);
  ellipse(centerX + 92, centerY + 85, star + 8, star + 16); // Cover
  ellipse(centerX + 92, centerY + 41, star + 8, star + 16); // Cover
  ellipse(centerX + 55, centerY + 84, star + 8, star + 16); // Cover
  ellipse(centerX + 55, centerY + 41, star + 8, star + 16); // Cover
  
  // Top Right
  fill(star_color);
  ellipse(centerX + 50, centerY - 75, star, star); // Star
  fill(moon_cover);
  ellipse(centerX + 35, centerY - 90, star, star); // Cover
  ellipse(centerX + 65, centerY - 60, star, star); // Cover
  ellipse(centerX + 35, centerY - 60, star, star); // Cover
  ellipse(centerX + 65, centerY - 90, star, star); // Cover
    
  // Mid Left
  fill(star_color);
  ellipse(centerX - 70, centerY - 10, star, star); // Star
  fill(moon_cover);
  ellipse(centerX - 85, centerY - 25, star, star); // Cover
  ellipse(centerX - 85, centerY + 5, star, star); // Cover
  ellipse(centerX - 55, centerY - 25, star, star); // Cover
  ellipse(centerX - 55, centerY + 5, star, star); // Cover
  
  // Bottom Left
  fill(star_color);
  ellipse(centerX - 50, centerY + 50, star + 10, star + 15); // Star
  fill(moon_cover);
  ellipse(centerX - 65, centerY + 35, star, star + 10); // Cover
  ellipse(centerX - 38, centerY + 35, star, star + 10); // Cover
  ellipse(centerX - 38, centerY + 70, star, star + 10); // Cover
  ellipse(centerX - 65, centerY + 70, star, star + 10); // Cover
  
  // Mid Right
  fill(star_color);
  ellipse(centerX + 70, centerY - 20, star, star); // Star
  fill(moon_cover);
  ellipse(centerX + 85, centerY - 35, star, star); // Cover
  ellipse(centerX + 85, centerY - 5, star, star); // Cover
  ellipse(centerX + 55, centerY - 35, star, star); // Cover
  ellipse(centerX + 55, centerY - 5, star, star); // Cover

  drawMoon(centerX - 10, centerY - 70, moon_size / 2);
  drawMoon(centerX - 85, centerY + 80, moon_size / 3);
  drawMoon(centerX - 50, centerY + 10, moon_size / 3);
  drawMoon(centerX + 90, centerY - 70, moon_size / 4);
  drawMoon(centerX + 90, centerY + 40, moon_size / 4)
  drawMoon(centerX + 50, centerY - 35, moon_size / 4);   
  drawMoon(centerX - 50, centerY - 50, moon_size / 5);
  drawMoon(centerX - 60, centerY + 90, moon_size / 6);
  drawMoon(centerX - 75, centerY + 40, moon_size / 6);

  }

  if (symbolType === 2) { // circles and heart
    drawHeart(centerX - 10, centerY - 70, heart_size / 2);
    drawHeart(centerX - 85, centerY + 80, heart_size / 3);
    drawHeart(centerX - 50, centerY + 10, heart_size / 3);
    drawHeart(centerX + 90, centerY - 70, heart_size / 4);
    drawHeart(centerX + 90, centerY + 40, heart_size / 4);
    drawHeart(centerX + 50, centerY - 35, heart_size / 4);
    drawHeart(centerX - 50, centerY - 50, heart_size / 5);
    drawHeart(centerX - 60, centerY + 90, heart_size / 6);
    drawHeart(centerX - 75, centerY + 40, heart_size / 6);

    drawMoon(centerX - 73, centerY - 70, moon_size / 2);
    drawMoon(centerX - 70, centerY + 70, moon_size / 5);
    drawMoon(centerX + 70, centerY - 20, moon_size / 3);
    drawMoon(centerX - 50, centerY + 50, moon_size / 4);
    drawMoon(centerX + 50, centerY - 75, moon_size / 2);
    drawMoon(centerX + 73, centerY + 63, moon_size / 4);
    drawMoon(centerX - 90, centerY - 40, moon_size / 5);
    drawMoon(centerX + 70, centerY + 30, moon_size / 5);
    drawMoon(centerX - 75, centerY + 20, moon_size / 3);
  }

  else if (symbolType ===3) { // star and circles
  // Draw stars in the corners
  noStroke();
  // Middle Left
  fill(star_color);
  ellipse(centerX - 73, centerY - 60, star + 15, star + 18); // Star
  fill(moon_cover);
  ellipse(centerX - 89, centerY - 80, star + 4, star + 13); // Cover
  ellipse(centerX - 89, centerY - 40, star + 4, star + 13); // Cover
  ellipse(centerX - 56, centerY - 80, star + 4, star + 13); // Cover
  ellipse(centerX - 56, centerY - 40, star + 4, star + 13); // Cover
    
    // Bottom Right
  fill(star_color);
  ellipse(centerX + 73, centerY + 63, star + 20, star + 25); // Star
  fill(moon_cover);
  ellipse(centerX + 92, centerY + 85, star + 8, star + 16); // Cover
  ellipse(centerX + 92, centerY + 41, star + 8, star + 16); // Cover
  ellipse(centerX + 55, centerY + 84, star + 8, star + 16); // Cover
  ellipse(centerX + 55, centerY + 41, star + 8, star + 16); // Cover
  
  // Top Right
  fill(star_color);
  ellipse(centerX + 50, centerY - 75, star, star); // Star
  fill(moon_cover);
  ellipse(centerX + 35, centerY - 90, star, star); // Cover
  ellipse(centerX + 65, centerY - 60, star, star); // Cover
  ellipse(centerX + 35, centerY - 60, star, star); // Cover
  ellipse(centerX + 65, centerY - 90, star, star); // Cover
    
  // Mid Left
  fill(star_color);
  ellipse(centerX - 70, centerY - 10, star, star); // Star
  fill(moon_cover);
  ellipse(centerX - 85, centerY - 25, star, star); // Cover
  ellipse(centerX - 85, centerY + 5, star, star); // Cover
  ellipse(centerX - 55, centerY - 25, star, star); // Cover
  ellipse(centerX - 55, centerY + 5, star, star); // Cover
  
  // Bottom Left
  fill(star_color);
  ellipse(centerX - 50, centerY + 50, star + 10, star + 15); // Star
  fill(moon_cover);
  ellipse(centerX - 65, centerY + 35, star, star + 10); // Cover
  ellipse(centerX - 38, centerY + 35, star, star + 10); // Cover
  ellipse(centerX - 38, centerY + 70, star, star + 10); // Cover
  ellipse(centerX - 65, centerY + 70, star, star + 10); // Cover
  
  // Mid Right
  fill(star_color);
  ellipse(centerX + 70, centerY - 20, star, star); // Star
  fill(moon_cover);
  ellipse(centerX + 85, centerY - 35, star, star); // Cover
  ellipse(centerX + 85, centerY - 5, star, star); // Cover
  ellipse(centerX + 55, centerY - 35, star, star); // Cover
  ellipse(centerX + 55, centerY - 5, star, star); // Cover

  drawHeart(centerX - 10, centerY - 70, heart_size / 2);
  drawHeart(centerX - 85, centerY + 80, heart_size / 3);
  drawHeart(centerX - 50, centerY + 10, heart_size / 3);
  drawHeart(centerX + 90, centerY - 70, heart_size / 4);
  drawHeart(centerX + 90, centerY + 40, heart_size / 4)
  drawHeart(centerX + 50, centerY - 35, heart_size / 4);   
  drawHeart(centerX - 50, centerY - 50, heart_size / 5);
  drawHeart(centerX - 60, centerY + 90, heart_size / 6);
  drawHeart(centerX - 75, centerY + 40, heart_size / 6);

  }
  //tail
  noFill();
  stroke(66, 64, 64);
  strokeWeight(4);
  curve(
    centerX - 30, centerY + 20,    // Start point
    centerX + 15, centerY + 55,    // Control point 1
    centerX + 50, centerY,    // Control point 2
    centerX + 250, centerY + 0     // End point
  );
  curve( //tail2
    centerX, centerY,    // Start point
    centerX + 50, centerY + 20,    // Control point 1
    centerX + 51, centerY,    // Control point 2
    centerX - 200, centerY     // End point
  );

  //Clouds
  noStroke();
  fill(cloudColor);
  ellipse(centerX, centerY +70, centerX - 45, centerY - 45);//main part of the cloud
  ellipse(centerX - 20,centerY + 50,centerX / 4.8, centerY / 6);
  ellipse(centerX + 20,centerY + 50,centerX / 5, centerY / 6,);
  ellipse(centerX - 20,centerY + 63,centerX - 54, centerY - 78);
  ellipse(centerX - 25,centerY + 78,centerX - 30, centerY - 70);
  ellipse(centerX - 20,centerY + 90,centerX / 5, centerY / 9);
  ellipse(centerX + 20,centerY + 63,centerX - 54, centerY - 70);
  ellipse(centerX + 25,centerY + 78,centerX - 30, centerY - 70);
  ellipse(centerX + 25,centerY + 90,centerX / 3, centerY / 9);
  
 }

