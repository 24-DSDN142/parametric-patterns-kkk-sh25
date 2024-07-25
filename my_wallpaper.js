//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


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
 //origami fox
 fill(235, 122, 52);
 triangle(40, 80, 100, 180, 160, 80);//head
 triangle(40, 80, 70, 20, 90, 80);//left ear
 triangle(160, 80, 130, 20, 110,80);//right ear
 
 triangle(112, 160, 88, 160);
 
 
}
