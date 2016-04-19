$(document).ready(function() {

	var xhr = new XMLHttpRequest();

	xhr.onload = function() {

		var jsonResponse = JSON.parse(xhr.responseText);

		console.log(jsonResponse);

		var output;

		for (var i=0; i < jsonResponse.events.length; i++) {

			console.log(jsonResponse.events[i].location);

			output = "<img src='" + jsonResponse.events[i].map + "'>";
			output += "<p>" + jsonResponse.events[i].location + "</p>";
			output += "<p>" + jsonResponse.events[i].date + "</p>";
			$("#content").append("<div>" + output + "</div>");
		}

	}

	xhr.open("GET",  "data/data.json", true);
	xhr.send(null);

});