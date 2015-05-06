// Select the burger element with id 'pull'
document.getElementById("pull").addEventListener("click", function(e) {
	
	if (this.className == "pull") {
		this.className = "pull active"
	} else {
		this.className = "pull"
	}
	var liQuery = document.getElementById("nav-bar-ul").getElementsByTagName("li");
	var active;
	for (var i = 0; i < liQuery.length; i++) {
// Check what li element is the 'active' page.
		if (liQuery[i].hasClass("active")) {
			active = liQuery[i];
		}

// if the li element has the class 'drop' then remove the drop and make the menu normal again. 	
		if (liQuery[i].hasClass("drop")) {
			if (liQuery[i] == active) {
				liQuery[i].className = "active";
			} else {
				liQuery[i].className = "";
			}
// if the li element is normal then make it drop down for mobile view. 
		} else {
			if (liQuery[i] == active) {
				liQuery[i].className = "drop active";
			} else {
				liQuery[i].className = "drop";
			}
		}
	}
});

//Shorthand if statement, check if the element has the chosen class
HTMLElement.prototype.hasClass = function(cls) {
	return (this.className).indexOf(cls) > -1 ? true : false;
}

