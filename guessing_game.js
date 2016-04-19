<!DOCTYPE html>
<html>
<head>
	<title>color guessing game</title>
	
</head>
<body onload="do_game()">

<script >

	
var count;
	
var target_index;
var color = ["Blue","Aqua","Red","Brown" ,"Cyan","Gold" ,"Orange","Yellow", "Green"];
var finished=false;
var guess_color;
var target_color;



function do_game()
{
	count=0;
	target_index=Math.floor(Math.random()*9);
	

	
	target_color=color[target_index];
	//alert("target color is "+ target_color  );
	f
	
	 
	while(!finished)
	{

		
		

	
		 
		 guess_color=prompt("I am thinking one of these colors \n\n"+ (color.join() ) + "\n\nWhat color am i thinking of?");
		finished=check_guess();
		count++;

		
		
		




	}alert("You are right! You took  "+count +" guesses!");
	
	

}
function check_guess()
{
 
if (color.indexOf(guess_color)==-1)
  {
  	alert("I did not recognize that color! please enter the color from given list ");
  	return false;


  }
  if (guess_color>target_color) 
  {
  	 alert("guessed color is alphabetically higher");
  	 return false;
  }
   if (guess_color<target_color) 
  {
  	 alert("guessed color is alphabetically lower");
  	 return false;
  }
if (target_color==guess_color)
		 {myBody=document.getElementsByTagName("body")[0];
		 	myBody.style.background=target_color;

		 	return true;
		 	

		 }
		
		 	

}

</script>
</body>

</html>