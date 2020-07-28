// new CountdownTimer({
// 	selector: '#timer-1',
// 	targetDate: new Date('Jul 17, 2019'),
// });
const endDate = new Date("August 28, 2020 13:12:00").getTime();


const timer = () => {
	const now = new Date().getTime();
	const time = endDate - now;
	const days = Math.floor(time / (1000 * 60 * 60 * 24));
	const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
	const secs = Math.floor((time % (1000 * 60)) / 1000);
	document.querySelector('[data-value="days"]').innerHTML = days;
	document.querySelector('[data-value="hours"]').innerHTML = hours;
	document.querySelector('[data-value="mins"]').innerHTML = mins;
	document.querySelector('[data-value="secs"]').innerHTML = secs;
	if (time < 0) {
		clearInterval(timerFilter);
		document.querySelector('.end-text').innerHTML = 'Time Expired';
		document.querySelector('[data-value="days"]').innerHTML = '0';
		document.querySelector('[data-value="hours"]').innerHTML = '0';
		document.querySelector('[data-value="mins"]').innerHTML = '0';
		document.querySelector('[data-value="secs"]').innerHTML = '0';
	}
}
const timerFilter = setInterval(timer, 1000);
timer()