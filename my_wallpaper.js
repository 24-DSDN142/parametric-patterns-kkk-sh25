//your parameter variables go here!
// let rect_width  = 20;
// let rect_height = 20;
let draw_width = 200
let draw_height = 200
let centerX = draw_width / 2;//drawing position
let centerY = draw_height/ 2;//drawing position
let ellipse_Width = 100; // Width of the ellipse
let ellipse_Height = 50; // Height of the ellipse
let size = 70; // Size of the diamond

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
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  // fox
  fill(235, 122, 52);

  noStroke();

  // Upper triangle
  triangle(centerX, centerY - size, centerX + size, centerY, centerX - size, centerY);
  
  // Lower triangle
  triangle(centerX, centerY + size, centerX + size, centerY, centerX - size, centerY);

  //left ears
  triangle(centerX-size-5, centerY - size*1.3, centerX - size/6, centerY-centerY/1.7, centerX - 55, centerY)
  
  //rght ears
  triangle(centerX+size+10, centerY- size*1.3, centerX + size-15, centerY, centerX + size/5.8, centerY-58);

  fill(240, 245, 241);
  arc(centerX+size/2, centerY+size/2, ellipse_Width-40, ellipse_Height+40, 135,-45);//right cheek
  
  arc(centerX-size/2, centerY+size/2, ellipse_Width-40, ellipse_Height+40, 225, 50);//left cheek
  
  fill(0);
  triangle(centerX-size+5, centerY - 75, centerX - size/4, centerY-centerY/2, centerX - 50, centerY-size/3.5);//left ear
  
  triangle(centerX+size-5, centerY-75, centerX + size/4, centerY-centerY/2, centerX + 50, centerY-size/3.5);//right ear
  
  //nose
  triangle(centerX, centerY+size, centerX+size/7, centerY+size-10, centerX-10, centerY+size-10);

  ///left eye
  //circle(centerX-centerX/7, centerY+20, 10);
  
  // right eye
  //circle(centerX+centerX/7, centerY+20, 10);
  
  triangle(centerX+20, centerY+20, centerX +40, centerX, centerX +20, centerY+10)//left eye
  
  triangle(centerX-20, centerY+20, centerX -40, centerX, centerX -20, centerY+10)

  //left eye
  fill(225)
  circle(centerX-24, centerY+12, 3);

  //right eye
  fill(225)
  circle(centerX+24, centerY+12, 3);

}
