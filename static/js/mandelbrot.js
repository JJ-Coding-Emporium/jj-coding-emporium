function draw() {
	var canvas = document.getElementById('myCanvas');
	if (!canvas.getContext) {
	  return;
	}

	var ctx = canvas.getContext('2d');
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(0,0,150,150);
	console.log("this code runs!");
}