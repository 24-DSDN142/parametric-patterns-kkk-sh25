//your parameter variables go here!
let canvas_width = 200; // canvas width
let canvas_height = 200; // canvas height
let centerX = canvas_width/2;//drawing position
let centerY = canvas_height/2;//drawing position
let ellipse_Width = 100; // Width of the ellipse
let ellipse_Height = 60; // Height of the ellipse
let cat_head = 45; // Size of the cat head

let eye_Size = 18; // size of the eyes
let pupil_Size = 5; // size of the pupil
let mouth_Size = 10; // mouth size

let star = 29.5; // Star Size
let moon_size = 40; // Moon size
let heart_size = 50;
let useHearts = true; // Change to false to draw moons

let cloudColor = [109, 171, 209];

// Symbol type (1 for stars, 2 for moons)
let symbolType = 2; // Change this to switch between stars and moons

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);//GRID_WALLPAPER DEVELOP_GLYPH
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(219, 210, 204); //light honeydew green colour
   // Draw diagonal lines
}

function drawHeart(x, y, size) {
  fill(168, 60, 50);
  noStroke();
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size / 2, y + size / 2, x, y + size / 2);
  bezierVertex(x + size / 2, y + size / 2, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

function drawMoon(x, y, size) {
  fill(242, 185, 78);
  noStroke();
  ellipse(x, y, size, size);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
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
  fill(252, 189, 15);
  circle(centerX, centerY+13.5, 4);

  //ears
  fill(66, 64, 64);
  triangle(centerX-centerX/3.5,centerY-centerY/2,centerX-10,centerY-centerY/3,centerX-23,centerY-15); //left ear
  triangle(centerX+centerX/3.5,centerY-centerY/2,centerX+9,centerY-centerY/3,centerX+22,centerY-15);//right ear
  fill(179, 82, 79)
  triangle(centerX+centerX/4.5,centerY-centerY/2.5,centerX+13,centerY-centerY/3.3,centerX+21,centerY-20);
  triangle(centerX-centerX/4.5 ,centerY-centerY/2.5,centerX-13,centerY-centerY/3.3,centerX-21,centerY-20);

  //whiskers
  strokeWeight(1);
  stroke(66, 64, 64);
  //stroke(225);
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
  //noStroke();
  //circle(centerX, centerY+8,9);
  triangle(centerX-2,centerY-8,centerX,centerY-4,centerX+2,centerY-8)

  //eyes
  fill(232, 220, 116);
  noStroke();
  circle(centerX-10, centerY-15,eye_Size);//left eye
  circle(centerX+10, centerY-15,eye_Size);//right eye
  fill(66, 64, 64);
  ellipse(centerX-8, centerY-15,5,9);//left pupil
  ellipse(centerX+8, centerY-15,5,9);//right pupil

  //mouth
  fill(225);
  arc(centerX, centerY-2, mouth_Size, mouth_Size, 360, 180);
  if (symbolType === 1) {
    // Draw stars at the corners
   
  fill(252, 189, 15);

    // Middle Left
  ellipse(centerX - 73, centerY - 60, star + 15, star + 18); // Star
  fill(219, 210, 204);
  ellipse(centerX - 89, centerY - 80, star + 4, star + 13); // Cover
  ellipse(centerX - 89, centerY - 40, star + 4, star + 13); // Cover
  ellipse(centerX - 56, centerY - 80, star + 4, star + 13); // Cover
  ellipse(centerX - 56, centerY - 40, star + 4, star + 13); // Cover
    
    // Bottom Right
  fill(252, 189, 15);
  ellipse(centerX + 73, centerY + 63, star + 20, star + 25); // Star
  fill(219, 210, 204);
  ellipse(centerX + 92, centerY + 85, star + 8, star + 16); // Cover
  ellipse(centerX + 92, centerY + 41, star + 8, star + 16); // Cover
  ellipse(centerX + 55, centerY + 84, star + 8, star + 16); // Cover
  ellipse(centerX + 55, centerY + 41, star + 8, star + 16); // Cover
  
    // Top Right
  fill(252, 189, 15);
  ellipse(centerX + 50, centerY - 75, star, star); // Star
  fill(219, 210, 204);
  ellipse(centerX + 35, centerY - 90, star, star); // Cover
  ellipse(centerX + 65, centerY - 60, star, star); // Cover
  ellipse(centerX + 35, centerY - 60, star, star); // Cover
  ellipse(centerX + 65, centerY - 90, star, star); // Cover
    
    // Mid Left
  fill(252, 189, 15);
  ellipse(centerX - 70, centerY - 10, star, star); // Star
  fill(219, 210, 204);
  ellipse(centerX - 85, centerY - 25, star, star); // Cover
  ellipse(centerX - 85, centerY + 5, star, star); // Cover
  ellipse(centerX - 55, centerY - 25, star, star); // Cover
  ellipse(centerX - 55, centerY + 5, star, star); // Cover
  
    // Bottom Left
  fill(252, 189, 15);
  ellipse(centerX - 50, centerY + 50, star + 10, star + 15); // Star
  fill(219, 210, 204);
  ellipse(centerX - 65, centerY + 35, star, star + 10); // Cover
  ellipse(centerX - 38, centerY + 35, star, star + 10); // Cover
  ellipse(centerX - 38, centerY + 70, star, star + 10); // Cover
  ellipse(centerX - 65, centerY + 70, star, star + 10); // Cover
  
    // Mid Right
  fill(252, 189, 15);
  ellipse(centerX + 70, centerY - 20, star, star); // Star
  fill(219, 210, 204);
  ellipse(centerX + 85, centerY - 35, star, star); // Cover
  ellipse(centerX + 85, centerY - 5, star, star); // Cover
  ellipse(centerX + 55, centerY - 35, star, star); // Cover
  ellipse(centerX + 55, centerY - 5, star, star); // Cover
  }
  else if (symbolType === 2) {
    drawMoon(centerX - 73, centerY - 70, moon_size / 2);
    drawMoon(centerX - 73, centerY + 80, moon_size / 3);
    drawMoon(centerX - 50, centerY + 10, moon_size / 3);
    drawMoon(centerX + 90, centerY - 70, moon_size / 4);
    drawMoon(centerX + 90, centerY + 40, moon_size / 4);
    drawMoon(centerX + 50, centerY - 35, moon_size / 4);
    drawMoon(centerX - 50, centerY - 50, moon_size / 5);
    drawMoon(centerX - 60, centerY + 90, moon_size / 6);
    drawMoon(centerX - 75, centerY + 40, moon_size / 6);
  }
  //tail
  noFill();
  stroke(66, 64, 64);
  strokeWeight(4);
  curve(
    centerX-30, centerY+20,    // Start point
    centerX+15, centerY+55,    // Control point 1
    centerX + 50, centerY,    // Control point 2
    centerX + 250, centerY + 0     // End point
  );
  curve(
    centerX, centerY,    // Start point
    centerX+50, centerY+20,    // Control point 1
    centerX + 51, centerY,    // Control point 2
    centerX-200, centerY     // End point
  );//tail2

  //Clouds
  noStroke();
  fill(cloudColor);
  ellipse(centerX,centerY+70,centerX-45,centerY-45);//main part of the cloud
  ellipse(centerX-20,centerY+50,centerX/4.8,centerY/6);
  ellipse(centerX+20,centerY+50,centerX/5,centerY/6,);
  ellipse(centerX-20,centerY+63,centerX-54,centerY-78);
  ellipse(centerX-25,centerY+78,centerX-30,centerY-70);
  ellipse(centerX-20,centerY+90,centerX/5,centerY/9);
  ellipse(centerX+20,centerY+63,centerX-54,centerY-70);
  ellipse(centerX+25,centerY+78,centerX-30,centerY-70);
  ellipse(centerX+25,centerY+90,centerX/3,centerY/9);
  
  
    // Moons or Hearts
  if (useHearts) {
    drawHeart(centerX - 10, centerY - 70, heart_size / 2);
    drawHeart(centerX - 85, centerY + 80, heart_size / 3);
    drawHeart(centerX - 50, centerY + 10, heart_size / 3);
    drawHeart(centerX + 90, centerY - 70, heart_size / 4);
    drawHeart(centerX + 90, centerY + 40, heart_size / 4);
    drawHeart(centerX + 50, centerY - 35, heart_size / 4);
    drawHeart(centerX - 50, centerY - 50, heart_size / 5);
    drawHeart(centerX - 60, centerY + 90, heart_size / 6);
    drawHeart(centerX - 75, centerY + 40, heart_size / 6);
  } else {
    drawMoon(centerX - 10, centerY - 70, moon_size / 2);
    drawMoon(centerX - 85, centerY + 80, moon_size / 3);
    drawMoon(centerX - 50, centerY + 10, moon_size / 3);
    drawMoon(centerX + 90, centerY - 70, moon_size / 4);
    drawMoon(centerX + 90, centerY + 40, moon_size / 4);
    drawMoon(centerX + 50, centerY - 35, moon_size / 4);
    drawMoon(centerX - 50, centerY - 50, moon_size / 5);
    drawMoon(centerX - 60, centerY + 90, moon_size / 6);
    drawMoon(centerX - 75, centerY + 40, moon_size / 6);
  }

 }

