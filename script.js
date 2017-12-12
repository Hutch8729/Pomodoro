var timerDuration = 0;

$(function(){
	var myVar = setInterval(myTimer, 1000);
});

function myTimer() {
    var d = new Date();
    // $("#demo").innerHTML = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

function adjustTimer(){
	console.log("adjusting Timer");
	if (this.id === timerDown){
		console.log("down");
		if (parseInt($('#timerText').text.slice(0,2)) > 1){
			var newTime = parseInt($('#timerText').text.slice(0,2)) - 1;
			console.log(newTime);
			$("#timerText").text(("0" + newTime.toString() + ":00").slice(-5));
		}
	}
}