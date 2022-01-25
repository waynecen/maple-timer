// timer logic

/* 
run timer constantly ticks down when start run is pressed
    'next fma in' also starts ticking down at the same time

if p1, reduce FMAtimer by 150s
if p2, reduce FMAtimer by 120s
if p3, reduce FMAtimer by 100s
Next FMA in resets back to 150/120/100s after reaching 0s depending on phase selected
*/

/* add active state to phase buttons */
/* create running timers */
/* create resetfunction for reset button */

let currentPhase = "phaseOne";

let runTimer = document.getElementById("timer__runTimer");
let timeInSeconds = 149;
let runTimerSec = 1781;

let nextFMA = document.getElementById("timer__nextFMA");

function startTimer() {
	//Next FMA Timer in
	let p1Interval = setInterval(function () {
		let nextFMAMin = Math.floor(timeInSeconds / 60); //2
		let nextFMASeconds = timeInSeconds - nextFMAMin * 60; //30
		nextFMA.innerText = nextFMAMin + "m" + nextFMASeconds + "s";
		if (timeInSeconds == 0) clearInterval(p1Interval);
		--timeInSeconds;
	}, 1000);

	let runInterval = setInterval(function () {
		let minConversion = Math.floor(runTimerSec / 60);
		let secConversion = runTimerSec - minConversion * 60;
		runTimer.innerText = minConversion + "m" + secConversion + "s";
		if (runTimerSec == 0) clearInterval(runInterval);
		--runTimerSec;
	}, 1000);

	//swap button for Reset button
	let startButtonText = document.getElementById("startRun");
	startButtonText.innerText = "Reset Run";
}

function reducePhaseOne() {
	if (currentPhase === "phaseOne" && timeInSeconds == 0) {
		let FMAtime = document.getElementById("timer__FMAtime");
		FMAtime.innerText = "25:20";
	}
}
reducePhaseOne();

function resetTimer() {
	currentPhase = "phaseOne";
	timeInSeconds = 149;
	runTimerSec = 1781;
	clearInterval(runInterval);
	clearInterval(p1Interval);
}
