

function show() {
	var records = [
		{
		"name": "Hari", 
		"SSN": "848-12-8376",
		"age": "45",
		"driversLicenseNumber": "27-239-9387",
		"pointsOnRecord": "12",
		"state": "Colorado"
		},
		{
		"name": "Jon",
		"SSN": "214-12-8376",
		"age": "26",
		"driversLicenseNumber": "03-539-9387",
		"pointsOnRecord": "12",
		"state": "Colorado"
		},
		{
		"name": "Rob",
		"SSN": "789-32-8376",
		"age": "33",
		"driversLicenseNumber": "98-139-4387",
		"pointsOnRecord": "12",
		"state": "Colorado"
		},
		{
		"name": "Nick",
		"SSN": "211-19-4576",
		"age": "31",
		"driversLicenseNumber": "78-339-9737",
		"pointsOnRecord": "12",
		"state": "Colorado"
		}
	];
	var out = "<table border='6'><thead><th>Name</th><th>SSN</th><th>Age</th><th>Drivers License Number</th><th>Points on Record</th><th>State</th></thead>";

	for (var i = 0; i < records.length; i++) {
		out += "<tr><td>"+ records[i].name +
		"</td><td>"+ records[i].SSN +
		"</td><td>"+ records[i].age +
		"</td><td>"+ records[i].driversLicenseNumber +
		"</td><td>"+ records[i].pointsOnRecord +
		"</td><td>"+ records[i].state +
		"</td></tr>";
	}
	out +="</table>";
	document.getElementById('table').innerHTML= out;
}
