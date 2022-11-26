window.onload = ajaxInit;
function ajaxInit() 
{
	document.getElementById('tekst').onmouseover = function(evt)
	{		
	    evt.target.style.cursor='pointer';	
		obj.style.cursor = 'pointer';
	}
	var XHR = null;	
	try 
	{
		XHR = new XMLHttpRequest();
	}
	catch(e)
	{
		try
		{
			XHR = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch(e2)
		{
			try
			{
				XHR = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e3)
			{
				alert("Niestety Twoja przeglądarka nie obsługuje AJAXA");
			}
		}
	}	
	return XHR;	
}

function fileToDiv(id, URL)
{
	XHR = ajaxInit();
	
	if (XHR != null)
	{
		XHR.open("GET", URL, true);
		
		XHR.onreadystatechange = function()
		{
			if (XHR.readyState == 4)
			{
				if (XHR.status == 200)
				  document.getElementById('tekst').innerHTML = XHR.responseText;
				else
				  alert("Wystąpił błąd "+XHR.status+ " proszę o kontakt na...");
			}
		}
		
		XHR.send(null);
	}
}