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
		this.email = str;
	},
	setPhonenr : function(str){
		this.phonenr = str;
	},
	setAdr : function(str){
		this.address = str;
	},
	setPostnr : function(str){
		this.postnr = str;
	},
	setPostadr : function(str){
		this.postadr = str;
	},
	subscribeClass : function(course){
		return this.coursesSubscribed.push(course);
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
		this.username = str;
	},
	setPassword : function(str){
		this.password = str;
	},
	addCourse : function(course){
		this.coursesAdmin.push(course);
	},
	removeCourse : function(course){
		if(this.coursesAdmin > -1){
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
