const endDate = "4 December 2024 00:00:00 AM"

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input")

// const clock = () => {
// }

// 1st jan 1997 to sofar(abtak)--- endDate covert millisecond(new Date)
function clock() {
    const end = new Date(endDate)
    const now = new Date()

	// console.log(end);
	// console.log(now);

	// const diff = (end - now);
	// console.log(diff);

    const diff = (end - now) / 1000;

	// -me nhi aayega
    if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
	// day
    inputs[1].value = Math.floor(diff / 3600) % 24;
	// hrs
    inputs[2].value = Math.floor(diff / 60) % 60;
	// mins
    inputs[3].value = Math.floor(diff) % 60;
	// sec
}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
*/

// 1sec(1000) in call clock()
setInterval(
    () => {
        clock()
    },
    1000
)