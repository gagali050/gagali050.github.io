//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = 360 - e.alpha;
        }

        if(compassHeading > 330 || compassHeading < 45) {
                text_area.textContent = "港区小学校";

        }

        if(compassHeading > 45 && compassHeading < 90) {
                text_area.textContent = "sunset";

        }

        if(compassHeading > 90 && compassHeading < 120) {
                text_area.textContent = "1-2";

        }
         

        if(compassHeading > 120 && compassHeading < 135) {
                text_area.textContent = "お台場海浜公園";

        }

        if(compassHeading > 135 && compassHeading < 180) {
                text_area.textContent = "park";

        }

        if(compassHeading > 180 && compassHeading < 225) {
                text_area.textContent = "wars";

        }

        if(compassHeading > 225 && compassHeading < 240) {
                text_area.textContent = "wharf";

        }

         if(compassHeading > 240 && compassHeading < 270) {
                text_area.textContent = "sunset";

        }

        if(compassHeading > 270 && compassHeading < 300) {
                text_area.textContent = "tokyo tower";

        }

        if(compassHeading > 300 && compassHeading < 330) {
                text_area.textContent = "rainbow bridge";

        }
        //calls function to alter content based on heading
       // myOrientation();
    }

//device orientation that can track orientation on space
    window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
    }




