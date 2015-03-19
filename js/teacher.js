var teacher = {
	accessrights : 2,
	active : true,
	idnr : 11,
	email : "snerk@snerk.snerk",
	phonenr : "+4747343090",
	address : "jklasdljkasd 32"
	postnr : "8329",
	postadr : "asdoila",
	coursesTeacher = [],
	username : "",
	password : "",


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
	deleteAccount : function(){
		return this.activeStudent = false;
	},
	activateAccount : function(){
		return this.activeStudent = true;
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
					this.coursesTeacher.splice(i, 1) //usikker med splice metoden.. SKJEKK UT SENERE!!!!!!!!11
					return true;
				}
			}			 
		}
	return false;
	},
}// studen class