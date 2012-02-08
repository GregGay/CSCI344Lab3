/**
 * This is the entry point for our JavaScript program
 */

function main() {
    //your code goes here
    //alert("hello world!");


    //your tasks

    //1. Create a spotter and get it to insert tweets into the DOM
	
	var count = 0;
	var object_array=[];
	//var limit = false;
	var s = new Spotter("twitter.search", 
						{q: "giants", period:150},
						{buffer:true, bufferTimeout:1000}
					    );
					   
	s.register(function(tweet) {
	
	//$("#tweets").append("<p>"+tweet.text+"</p>");
	
    //2. Add profile images (tweet.profile_image_url)
	
	/*var profile_image = "<img src='"+tweet.profile_image_url+"' />";
	profile_image.hide();
	$("#tweets").prepend("<p>"+profile_image+tweet.text+"</p>");
	profile_image.slideDown();*/
	//"<li style='display:none;color:blue;background-color:white;'>"
	
	
	count++;
	
		/*if (count === 11)
		{ if (limit === false)
			{limit = true;
			}
			count = 1;
		}
		if (limit === true)
		{	
			var x = document.getElementById("tweets").getElementsByTagName("p")[9];
			
			x.parentNode.removeChild(x);
		
		}*/
		
		
	var color;

	var profile_image="<img src='"+tweet.profile_image_url+"' />";
			
	if (count % 2 === 0) {
		color = "red";
	}
	else {
		color = "blue";
	}
	
	var slide = $("<p class='"+color+" id="+count+"'>"+profile_image+tweet.text+"</p>");
		slide.hide();
		$("#tweets").prepend(slide);
		slide.slideDown();
		
		object_array.push(slide);
		
		if(object_array.length >= 11) {
			var object_to_remove = object_array.shift();
			object_to_remove.fadeOut(200, function() {
				object_to_remove.remove();
			});
		}
	});
	
	s.start();
	
    //3. Make the tweets occur so the most recent are at the top
    //4. Make the tweets slide down
    //5. Alternate the colors or the background of the tweets
    //6. Show a maximum of 10 tweets at a time (remove old tweets from the dom)

}


main();
