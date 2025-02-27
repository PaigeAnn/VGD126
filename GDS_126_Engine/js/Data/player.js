/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		//src:`images/snale.png`
		src: `images/wizard.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:186, height:162, startX:0, startY:108},
				{width:186, height:162, startX:186, startY:108},
				{width:186, height:162, startX:372, startY:108},
				{width:186, height:162, startX:558, startY:108},
				{width:186, height:162, startX:744, startY:108},
				{width:186, height:162, startX:930, startY:108},
				{width:186, height:162, startX:1116, startY:108},
				{width:186, height:162, startX:1302, startY:108},
				{width:186, height:162, startX:1488, startY:108},
				{width:186, height:162, startX:1674, startY:108},
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:1,
			cycle:true,
			frames:
			[
				//{width:186, height:178, startX:0, startY:1150},
				{width:186, height:178, startX:186, startY:1150},
				{width:186, height:178, startX:372, startY:1150},
				{width:186, height:178, startX:558, startY:1150},
				{width:186, height:178, startX:744, startY:1150},
				{width:186, height:178, startX:930, startY:1150},
				{width:186, height:178, startX:1116, startY:1150},
				{width:186, height:178, startX:1302, startY:1150},
				{width:186, height:178, startX:1488, startY:1150},
				//{width:186, height:178, startX:1674, startY:1150},
			]
		},
		//The jump animation 
		jump:
		{
			fps:20,
			cycle:false,
			frames:
			[
				//{width:186, height:497, startX:0, startY:655},
				//{width:186, height:497, startX:186, startY:655},
				//{width:186, height:497, startX:372, startY:655},
				//{width:186, height:497, startX:558, startY:655},
				//{width:186, height:497, startX:744, startY:655},
				//{width:186, height:497, startX:930, startY:655},
				{width:186, height:228, startX:0, startY:924},
				//{width:186, height:497, startX:1302, startY:655},
				//{width:186, height:497, startX:1488, startY:655},
				//{width:186, height:497, startX:1674, startY:655},
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:15,
			cycle:true,
			frames:
			[
				//{width:186, height:382, startX:0, startY:272},
				//{width:186, height:382, startX:186, startY:272},
				//{width:186, height:382, startX:372, startY:272},
				//{width:186, height:382, startX:558, startY:272},
				//{width:186, height:382, startX:744, startY:272},
				//{width:186, height:382, startX:930, startY:272},
				//{width:186, height:382, startX:1116, startY:272},
				//{width:186, height:382, startX:1302, startY:272},
				{width:186, height:166, startX:1488, startY:489},
				//{width:186, height:382, startX:1674, startY:272},
				//{width:186, height:382, startX:1860, startY:272},
				//{width:186, height:382, startX:2046, startY:272},
				//{width:186, height:382, startX:2232, startY:272},
				//{width:186, height:382, startX:2418, startY:272},
				//{width:186, height:382, startX:2604, startY:272},
				//{width:186, height:382, startX:2790, startY:272},
				//{width:186, height:382, startX:2970, startY:272},
				//{width:186, height:382, startX:3162, startY:272},
			]
		},
		//The attack animation 
		attack:
		{
			fps:3,
			cycle:false,
			//width:300,
			frames:
			[
				//{width:186, height:380, startX:0, startY:1330},
				//{width:186, height:380, startX:186, startY:1330},
				{width:186, height:167, startX:372, startY:1542},
				{width:186, height:167, startX:558, startY:1542},
				{width:186, height:167, startX:744, startY:1542},
				{width:186, height:167, startX:930, startY:1542},
				{width:186, height:167, startX:1116, startY:1542},
				{width:186, height:167, startX:1302, startY:1542},
				{width:186, height:167, startX:1488, startY:1542},
				//{width:186, height:380, startX:1674, startY:1330}
				
				
			]
		},
		bullet:
		{
			fps:4,
			cycle:true,
			//width:300,
			frames:
			[
				{width:186, height:155, startX:3186, startY:1554},
				{width:186, height:155, startX:0, startY:1924},
				{width:186, height:155, startX:186, startY:1924},
				{width:186, height:155, startX:372, startY:1924},
				
				
				
			]
		}
	}
		
}