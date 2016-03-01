$(document).ready(function(){
	var dateObj = new Date();
	var year = dateObj.getYear();
	var month = dateObj.getMonth();
	var classRank = "";



	if((year == 115 && month > 8) || (year == 116 && month < 8)) {
		classRank = "freshman";
	} else if ((year == 116 && month >= 8) || (year == 117 && month < 8)) {
		classRank = "sophomore";
	} else if ((year == 117 && month >= 8) || (year == 118 && month < 8)) {
		classRank = "junior";
	} else if ((year == 118 && month >= 8) || (year == 119 && month < 8)) {
		classRank = "senior"
	} else {
		classRank = "(apparently my code is broken or I haven't updated my site in a long time)";
	}

	$("#year").text(classRank);
})
