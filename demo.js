var numCircles = 200,
	circleVect = new Array(),
	scaleOffsets = new Array(),
	increment = 0,
	place = 0;
var offset = 500, colorNum = 0 ;

function rectMove(s){
	return (Math.cos(s * Math.PI / 180)*100)
}

var rect2 = two.makeRectangle(offset+300, offset-100 ,200,100), place = 0;
rect2.fill = "#00FF00";

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

for (x = 0; x < numCircles; x++){
circle = two.makeCircle(Math.random()*1400 + 100, Math.random()*700 + 100, Math.random()*75+10);
circle.fill = getRandomColor();
circleVect[x] = circle;
scaleOffsets[x] = Math.random()*360;
}





two.bind("update", function (frameCount){
	var pos = rectMove((place++)*5);
	
	rect2.translation.x = pos + offset + 300;
    rect2.translation.y = offset - 100;
    rect2.rotation = rectMove(place)/10;
	
	for (x = 0; x < numCircles; x++){
	circleVect[x].scale = Math.cos((scaleOffsets[x] + increment++/100.0)*(Math.PI / 180)*10);
	circleVect[x].fill = getRandomColor();
	}
	rect2.scale = 10 + Math.cos((increment/50.0)*(Math.PI / 180)*80);
	colorNum++;
	if (colorNum == 20){
		rect2.fill = getRandomColor();
		colorNum = 0;
		}
	
	});

	two.play()