//your parameter variables go here!
// let rect_width  = 20;
// let rect_height = 20;
let draw_width = 200
let draw_height = 200
let centerX = draw_width /2;//drawing position
let centerY = draw_height/2;//drawing position
let ellipse_Width = 100; // Width of the ellipse
let ellipse_Height = 50; // Height of the ellipse
let cat_size = 30; // Size of the diamond

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
  
  noStroke();
  fill(0);
  square(centerX/2.6, centerY+10, cat_size, 17);//cat head

  triangle(centerX/2.5, centerY+centerY-25, centerX/1.9, centerY+20, centerX-30, centerY+centerY-25);


}
