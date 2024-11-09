const pages = {
	'https://ste2425.github.io/psp-bluetooth/blog/': 'https://ste2425.github.io/blog/',
	'https://ste2425.github.io/psp-bluetooth/cv/': 'https://ste2425.github.io/CV/',
	'https://ste2425.github.io/psp-bluetooth/': 'https://ste2425.github.io/PSP-Bluetooth/',
}

document.addEventListener('DOMContentLoaded', () => {
	let url = window.location.href.toLowerCase();

	if (!url.endsWith('/'))
		url += '/';

	for (const page in pages) {
		if (url.startsWith(page)) {
			const container = document.querySelector('#redirect-container');
	
			const redirectURL = url.replace(page, pages[page])
	
			container.querySelector('em').textContent = redirectURL;
			container.querySelector('a').setAttribute('href', redirectURL);
	
			console.log('REDIRECTING TO', redirectURL);

			window.location.href = redirectURL;

			break;
		}
	}
});