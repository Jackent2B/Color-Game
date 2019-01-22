
var sq=document.querySelectorAll(".square");
var colours= generate(6);
var boom=boo();
var boole=false;
var but3=document.querySelector("#hard");
but3.addEventListener("click",function(){
		but2.classList.remove("selected");
		but3.classList.add("selected");
		h1.style.background="steelblue";
		
		colours= generate(6);
		boom=boo();
		span.textContent=boom;
		for(var i=0;i<sq.length;i++){
		sq[i].style.background=colours[i];
		boole=false;
		content.textContent="";

}
});




var but1=document.querySelector("#button");
but1.addEventListener("click",function(){
		h1.style.background="steelblue";

		if(boole)
			{a=3;}
		else
			{a=6;}

		colours= generate(a);
		boom=boo();
		span.textContent=boom;
		for(var i=0;i<sq.length;i++){
			if(colours[i])
			{
			sq[i].style.background=colours[i];
			}
			else
			{
			sq[i].style.background="#232323";
			// or we could have used sq[i].style.display="none" to remove bottom three squares
		   	}
			but1.textContent="New Game";
			content.textContent="";
			content.style.color="steelblue";

}
});

var but2=document.querySelector("#easy");
but2.addEventListener("click",function(){
		h1.style.background="steelblue";

		colours= generate(3);
		boom=boo();
		span.textContent=boom;
		for(var i=0;i<sq.length;i++){
			if(colours[i])
			{
			sq[i].style.background=colours[i];
			}
			else
			{
			sq[i].style.background="#232323";
			// or we could have used sq[i].style.display="none" to remove bottom three squares
			}
			but2.classList.add("selected");
			but3.classList.remove("selected");
			boole=true;
}
});




span.textContent=boom;
for(var i=0;i<sq.length;i++){
	sq[i].style.background=colours[i];

sq[i].addEventListener("click",function(){
	var clickedc = this.style.background;
	console.log(clickedc,boom)
	if(clickedc === boom)
		{
			content.textContent="correct";
			content.style.color=clickedc;
			colourSelected(boom);
			h1.style.background=boom;
			but1.textContent="Play Again"
		}

	else
		{ 
		this.style.background="#232323";
		content.textContent="Try again!";
		}
});
};


function colourSelected(c){
	for(var i=0;i<colours.length;i++)
	{
		sq[i].style.background=c;

	}
}


function boo(){
	var yo=Math.floor(Math.random()*colours.length );
    return colours[yo];
}


function generate(num){
	var array=[];
	for(var i=0;i<num;i++)

	{
		array.push(gc());
	}


	return array;
}



function gc(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	var calar="rgb("+r+", "+g+", "+b+")";  
	return calar;
} 