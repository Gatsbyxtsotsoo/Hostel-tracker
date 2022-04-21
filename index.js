const form = document.getElementById("reportForm");

// if (localStorage.hasOwnProperty("reports")) {
// 	localStorage.reports = [];
// }

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const time = dateTime();
	const data = collectData();
	localStorage.clear();
	localStorage.reports =
		localStorage.reports + JSON.stringify({ ...time, ...data });

	reset();
	alert('Your complaint has been logged successfully')
	// console.log(collectData());
});

function dateTime() {
	let a = new Date();
	let yyyy = a.getFullYear();
	let mm = a.getMonth();
	let dd = a.getDate();

	let date = `${yyyy}-${mm}-${dd}`;
	let time = a.toLocaleTimeString();

	return { date, time };
}

function reset() {
	form.elements["name"].value = "";
	form.elements["idNumber"].value = "";
	form.elements["title"].value = "";
	form.elements["message"].value = "";
	form.elements['roomNum'].value = '';
}

function collectData() {
	const personName = form.elements["name"].value;
	const personID = form.elements["idNumber"].value;
	const title = form.elements["title"].value;
	const message = form.elements["message"].value;

	let entry = { personName, personID, title, message };

	return entry;
}
