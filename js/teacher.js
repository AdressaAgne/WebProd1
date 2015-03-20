var teacher = {
	accessrights : 2,
	active : false,
	idnr : 2,
	email : "",
	phonenr : "",
	address : "",
	postnr : "",
	postadr : "",
	coursesTeacher : [],
	username : "",
	password : "",


	setEmail : function(str){
		var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(str.match(pattern)){
			this.email = str;
			return true;
		}
		return false;
	},
	setPhonenr : function(str){
		var pattern = /^\d{3}-?\d{3}-?\d{2}$/g;
		if(str.match(pattern)){
			this.phonenr = str;
			return true;
		}
		return false;
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
	deleteAccount : function(){
		if(this.active){
			this.active = false;
			return true;
		}
		return false;
	},
	activateAccount : function(){
		if(!this.active){
			this.active = true;
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
		this.coursesTeacher.push(course);
	},
	removeCourse : function(course){
		if(this.coursesTeacher > -1){
			for(var i = 0; i < this.coursesTeacher.length; i++){
				if(this.coursesTeacher[i] == course){
					this.coursesTeacher.splice(i, 1); //usikker med splice metoden.. SKJEKK UT SENERE!!!!!!!!11
					return true;
				}
			}
		}
	return false;
	},
};// teacher class
