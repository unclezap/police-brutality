document.addEventListener('DOMContentLoaded', function() {
	const req = new XMLHttpRequest();
	req.open('get', 'https://api.846policebrutality.com/api/incidents', true);

	req.send();

	req.onload = function() {
		let json = JSON.parse(req.responseText);
		let dataset = json.data;

		console.log(dataset)
	};
});