function draw() {
	const canvas = document.getElementById('myCanvas');
	if (!canvas.getContext) {
	  return;
	}

	const ctx = canvas.getContext('2d');
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(0,0,150,150);
	console.log("this code runs!");

	const imageData = ctx.createImageData(60, 60);

	// Iterate through every pixel
	for (let i = 0; i < imageData.data.length; i += 4) {
		// Modify pixel data
		imageData.data[i + 0] = i%255;  // R value
		imageData.data[i + 1] = i%255;    // G value
		imageData.data[i + 2] = i%255;  // B value
		imageData.data[i + 3] = i%255;  // A value
	}

	// Draw image data to the canvas
	ctx.putImageData(imageData, 50, 50);
}

function mandelbrot() {
	return;
}