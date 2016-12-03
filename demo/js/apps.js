var tangram = [
	{p:[{x:0, y:0}, {x:800, y:0}, {x:400, y:400}], color:"#caff67"},
	{p:[{x:0, y:0}, {x:400, y:400}, {x:0, y:800}], color:"#67becf"},
	{p:[{x:800, y:0}, {x:800, y:400}, {x:600, y:600}, {x:600, y:200}], color:"#ef3d61"},
	{p:[{x:600, y:200}, {x:600, y:600}, {x:400, y:400}], color:"#f9f51a"},
	{p:[{x:400, y:400}, {x:600, y:600}, {x:400, y:800}, {x:200, y:600}], color:"#a594c0"},
	{p:[{x:200, y:600}, {x:400, y:800}, {x:0, y:800}], color:"#fa8ecc"},
	{p:[{x:800, y:400}, {x:800, y:800}, {x:400, y:800}], color:"#f6ca29"},
]
	
window.onload = function() {
	var canvas = document.getElementById("canvas");
	
	canvas.width = 800; //根据W3C标准,建议用这样的方式设置canvas的属性;因为这里包括了一些像素相关的定义.
	canvas.height = 800;
	
	var context = canvas.getContext("2d");
	
	/*
	context.moveTo(100, 100); //拿起画笔;
	context.lineTo(700, 700); //划到另一个点，还可以多加一个点;这是我们的构思;
	
	context.stroke(); //胸有成竹了，就该stroke一起合成画好它了!
	*/
	
	for ( var i = 0; i < tangram.length; i++ )
		draw( tangram[i], context)
}

function draw( piece, cxt ) {
	
	cxt.beginPath();  //由于canvas是基于状态的,当有fill()和stroke()等同时存在的时候,他们的状态是相同的.
	cxt.moveTo( piece.p[0].x, piece.p[0].y);
	for ( var i = 1; i < piece.p.length; i++ )
		cxt.lineTo( piece.p[i].x, piece.p[i].y);
	cxt.closePath(); //begin和close很重要;
	
	cxt.fillStyle = piece.color;
	cxt.fill();
	
	cxt.strokeStyle = "white"
	cxt.lineWidth = 2;
	cxt.stroke();
}