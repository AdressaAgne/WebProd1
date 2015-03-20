var teacher = {
	accessrights : 3,
	active : true,
	idnr : 3,
	email : "",
	phonenr : "",
	address : "",
	postnr : "",
	postadr : "",
	coursesAdmin : [],
	username : "",
	password : "",
	students : [],
	teachers : [],
	allPersons : students.concat(teachers),

	setEmail : function(str){
		var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(str.match(pattern)){
			this.email = str;
			return true;
		}
		return false;
	},
	setPhonenr : function(str){
		var pattern = /^\d{8}$/g;
		if(str.match(pattern)){
			this.phonenr = str;
			return true;
		}
		return false;
	},
	setAdr : function(str){
		var pattern = /^[a-z0-9 ]+$/i;
		if(str.match(pattern)){
			this.address = str;
			return true;
		}
		return false;
	},
	setPostnr : function(str){
		var pattern = /^\d{4}$/;
		if(str.match(pattern)){
			this.postnr = str;
			return true;
		}
		return false;
	},
	setPostadr : function(str){
		var pattern = /^[a-z]+$/i;
		if(str.match(pattern)){
			this.postadr = str;
			return true;
		}
		return false;
	},
	deleteAccount : function(person){
		if(person.active){
			person.active = false;
			return true;
		}
		return false;
	},
	activateAccount : function(person){
		if(!person.active){
			person.active = true;
			return true;
		}
		return false;
	},
	setUsername : function(str){
		var pattern = /^[a-z0-9]+$/i;
		if(str.match(pattern)){
			this.username = str;
			return true;
		}
		return false;
	},
	setPassword : function(str){
		if(str.length > 7){
			this.password = str;
			return true;
		}
		return false;
	},
	addCourse : function(course){
		this.coursesAdmin.push(course);
	},
	removeCourse : function(course){
		if(this.coursesAdmin.length > 0){
			for(var i = 0; i < this.coursesAdmin.length; i++){
				if(this.coursesAdmin[i] == course){
					this.coursesAdmin.splice(i, 1); //usikker med splice metoden.. SKJEKK UT SENERE!!!!!!!!11
					return true;
				}
			}
		}
	return false;
	},
	setAccessrights : function(person, accessright){
		for(var i = 0; i < allPersons.length; i++){
			if(allPersons[i].idnr == person.idnr){
				allPersons[i].accessrights = accessright;
				return true;
			}
		}
		return false;
	}
};// admin class
