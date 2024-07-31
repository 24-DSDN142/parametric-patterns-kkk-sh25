//your parameter variables go here!
let rect_width  = 14;
let rect_height = 11;
let draw_width = 200
let draw_height = 200
let centerX = draw_width/2;//drawing position
let centerY = draw_height/2;//drawing position
let ellipse_Width = 100; // Width of the ellipse
let ellipse_Height = 60; // Height of the ellipse
let head = 45; // Size of the cat head



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(219, 210, 204); //light honeydew green colour
}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  //cat head
  noStroke();
  fill(66, 64, 64);
  square(centerX-23, centerY-35, head,20);

  //Body
  triangle(centerX-1, centerY-20, centerX+centerX/4.3, centerY+centerY/1.7, centerX-centerX/4.3, centerY+centerY/1.7);

  //ears
  triangle(centerX-centerX/3,centerY-centerY/2,centerX-10,centerY-centerY/3,centerX-23,centerY-15); //left ear
  triangle(centerX+centerX/3,centerY-centerY/2,centerX+9,centerY-centerY/3,centerX+22,centerY-15);//right ear
  fill(179, 82, 79)
  triangle(centerX+centerX/3.8,centerY-centerY/2.5,centerX+13,centerY-centerY/3.3,centerX+21,centerY-20);
  triangle(centerX-centerX/3.8,centerY-centerY/2.5,centerX-13,centerY-centerY/3.3,centerX-21,centerY-20);
  
  
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
  circle(centerX-10, centerY-15,18);//left eye
  circle(centerX+10, centerY-15,18);//right eye
  fill(66, 64, 64);
  ellipse(centerX-8, centerY-15,5,9);//left pupil
  ellipse(centerX+8, centerY-15,5,9);//right pupil

  //mouth
  fill(225);
  arc(centerX, centerY-2, 10, 10, 360, 180);
  
  //Clouds
  fill(225);
  ellipse(centerX,centerY+70,centerX-45,centerY-45);//main part of the cloud
  ellipse(centerX-20,centerY+50,centerX/4.8,centerY/6);
  ellipse(centerX+20,centerY+50,centerX/5,centerY/6,);
  ellipse(centerX-20,centerY+63,centerX-54,centerY-78);
  ellipse(centerX-25,centerY+78,centerX-30,centerY-70);
  ellipse(centerX-20,centerY+90,centerX/5,centerY/9);
  ellipse(centerX+20,centerY+63,centerX-54,centerY-70);
  ellipse(centerX+25,centerY+78,centerX-30,centerY-70);
  ellipse(centerX+25,centerY+90,centerX/3,centerY/9);

  //moon
  fill(245, 218, 86);
  ellipse(centerX,centerY-70,centerX/2.5,centerY/2.5);//moon part
  fill(219, 210, 204)
  ellipse(centerX+15,centerY-70,centerX/2.5,centerY/2.5);//cover
 
  //
  

}