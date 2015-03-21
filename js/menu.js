document.getElementById("pull").addEventListener("click", function(e) {
	var liQuery = document.getElementById("nav-bar-ul").getElementsByTagName("li");
	
	for (var i = 0; i < liQuery.length; i++) {
		if (liQuery[i].className == "drop") {
			liQuery[i].className = "";
		} else {
			liQuery[i].className = "drop";
		}
	}
});