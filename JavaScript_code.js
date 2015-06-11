/*----------------- Detect phone and redirect -------------------------*/
if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) 
{
	/*iPhone/iPod*/
	if(navigator.userAgent.match('CriOS'))
	{}
	else
	{
		location.replace("http://YOUR-MOBILE-SITE.com");
	}
}
else if ((navigator.userAgent.match(/Android/i))) 
{
	/*Android*/
	location.replace("http://YOUR-MOBILE-SITE.com");
}
else if ((navigator.userAgent.match(/Windows Phone/i))) 
{
	/*Windows Phone*/
	location.replace("http://YOUR-MOBILE-SITE.com");
}

/*----------------- Pause button click handler -----------------------*/
function clickHandler()
{ 
	var v = document.getElementById("vidfullscreen");
	var pauseButton = document.getElementById("vidpause");
	
	if(v.paused)
	{
		v.play();
		pauseButton.innerHTML = "PAUSE  BACKGROUND";
		pauseButton.style.fontWeight = 'bold';
	}
	else
	{
		v.pause();
		pauseButton.innerHTML = "PLAY  BACKGROUND";
		pauseButton.style.fontWeight = 'bold';
	}	
}
