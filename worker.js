function getImage() {
	console.log("running")
	var maxDimension = 0;
	var maxImage = null;

	// Iterate through all the images.
	var imgElements = document.getElementsByTagName('img');
	for (var index in imgElements) {
		var img = imgElements[index];
		var currDimension = img.width * img.height;
		if (currDimension > maxDimension) {
			maxDimension = currDimension
			maxImage = img;
		}
	}
	console.log(maxImage)
	// Check if an image has been found.
	if (maxImage)
		return maxImage.src;
	else
		return null;
}
