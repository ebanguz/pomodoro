import '../scss/custom.scss';
import * as bootstrap from 'bootstrap';

const d = document;

function countDown(minutes) {
	let seconds = Number(minutes) * 60;
	const $timeText = d.getElementById(minutes);
	const btn = d.querySelector(`[data-time='${minutes}']`);

	setInterval(() => {
		const tempMinutes = Math.floor(seconds / 60);
		let tempSeconds = seconds % 60;
		if (tempSeconds < 10) tempSeconds = `0${tempSeconds}`;

		if (seconds >= 0) {
			btn.disabled = true;
			seconds--;
			$timeText.innerText = `${tempMinutes}:${tempSeconds}`;
		} else btn.disabled = false;
	}, 1000);
}

addEventListener('click', (e) => {
	if (e.target.matches('.btn-success')) {
		countDown(e.target.dataset.time);
	}
});
