var timerDuration = 0;

// $(function(){
// 	var myVar = setInterval(myTimer, 1000);
// });

function myTimer() {
    var d = new Date();
    // $("#demo").innerHTML = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

function adjustTimer(id){
	var timerText = $('#timerText').text();
	if (id === "timerDown"){
		if (parseInt(timerText.slice(0,2)) > 1){
			var newTime = parseInt(timerText.slice(0,2)) - 1;
			$("#timerText").text(("0" + newTime.toString() + ":00").slice(-5));
		}
	}

	else{
		var newTime = parseInt(timerText.slice(0,2)) + 1;
		$("#timerText").text(("0" + newTime.toString() + ":00").slice(-5));
	}
}