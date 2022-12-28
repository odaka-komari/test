"use strict";


(() => {
	const devicePixelRatioElement = document.getElementById("device_pixel_ratio");
	const screenWidthElement = document.getElementById("screen_width");
	const screenHeightElement = document.getElementById("screen_height");
	const windowWidthElement = document.getElementById("window_width");
	const windowHeightElement = document.getElementById("window_height");

	devicePixelRatioElement.textContent = window.devicePixelRatio;
	screenWidthElement.textContent = `${window.screen.width}px`;
	screenHeightElement.textContent = `${window.screen.height}px`;
	windowWidthElement.textContent = `${window.innerWidth}px`;
	windowHeightElement.textContent = `${window.innerHeight}px`;
})();