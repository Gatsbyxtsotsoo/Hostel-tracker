const reportsSection = document.getElementById("reports");

const refreshBtn = document.getElementById("refresh");
localStorage.reports;

refreshBtn.addEventListener("click", (e) => {
	e.preventDefault();

	let reports = localStorage.reports;
	reports = reports.slice(9);
	console.log(reports);
	reports = [{...JSON.parse(reports)}];
	
 
	console.log(reports)
	reports.map(entry => { 
		let datep = document.createElement('p')
		datep.textContent = `Date: ${entry.date}`; 
		let timep = document.createElement('p')
		timep.textContent  = `time: ${entry.time}`;
		let personName = document.createElement('p')
		personName.textContent = `name: ${entry.personName}`;
		let personID = document.createElement('p')
		personID.textContent  =  `ID: ${entry.personID}`;
		let title = document.createElement('p')
		title.textContent = `Title: ${entry.title}`;
		let message = document.createElement('p')
		message.textContent = `message: ${entry.message}`

		const div = document.createElement('div');
		div.appendChild(datep)
		div.appendChild(timep)
		div.appendChild(personName)
		div.appendChild(personID)
		div.appendChild(title)
		div.appendChild(message)
		div.appendChild(document.createElement('hr'))

		reportsSection.appendChild(div)

	})

	console.log(reports);
});
