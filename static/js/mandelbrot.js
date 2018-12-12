function draw() {
	const canvas = document.getElementById('myCanvas');
	if (!canvas.getContext) {
	  return;
	}

	const ctx = canvas.getContext('2d');
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(0,0,500,500);
	console.log("this code runs!");

	const height = 100
	const width = 100
	const imageData = ctx.createImageData(height, width);

	// Iterate through every pixel
	// for (let i = 0; i < imageData.data.length; i += 4) {
	// 	// Modify pixel data
	// 	imageData.data[i + 0] = i%255;  // R value
	// 	imageData.data[i + 1] = i%255;  // G value
	// 	imageData.data[i + 2] = i%255;  // B value
	// 	imageData.data[i + 3] = i%255;  // A value
	// }

	console.log("length:", imageData.data.length)

	const multiplier = 10
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			let its = mandelbrot(i/multiplier, j/multiplier)
			// console.log(i/multiplier, j/multiplier, its)

			console.log(its)
			imageData.data[i*4 + j*4 + 0] = its%255;  // R value
			imageData.data[i*4 + j*4 + 1] = its%255;  // G value
			imageData.data[i*4 + j*4 + 2] = its%255;  // B value
			imageData.data[i*4 + j*4 + 3] = 255;  // A value
		}
	}

	// Draw image data to the canvas
	ctx.putImageData(imageData, 50, 50);
}

// Can we do this functionally? Probably. Map + reduce.
function mandelbrot(c_re, c_im) {
	const max_iterations = 10

	let z_real = 0
	let z_imag = 0
	for (let i = 0; i < max_iterations; i++) {
		z_real = z_real * z_real - z_imag * z_imag + c_re
		z_imag = 2 * z_real * z_imag + c_im

		if ((z_real*z_real + z_imag*z_imag) > 2 ) {
			return i
		}
	}

	return max_iterations
}