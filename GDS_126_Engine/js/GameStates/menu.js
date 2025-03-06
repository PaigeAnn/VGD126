/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({x:500, y:256});
startButton.img.src="images/startbutton.jpg"
startButton.width=200;
startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/startscreen.jpg"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
		}

		//Hover Effect Graffic
		startButton.img.src = "images/startbutton2.jpg"
	}
	else
	{
		//Default Button Graphic
		startButton.img.src = "images/startbutton.jpg"
	}
	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage();
	//startButton.render()
}
	
	
