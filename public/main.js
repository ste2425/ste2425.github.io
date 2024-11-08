const pages = {
	'https://ste2425.github.io/psp-bluetooth': 'https://ste2425.github.io/PSP-Bluetooth'
}

document.addEventListener('DOMContentLoaded', () => {
	const url = window.location.href;

	if (url in pages) {
		const container = document.querySelector('#redirect-container');

		container.querySelector('em').textContent = pages[url];
		container.querySelector('a').setAttribute('href', pages[url]);

		window.location = pages[url];
	} else {
		document.querySelector('#links-container').classList.remove('d-none');
	}
});