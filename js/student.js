var student = {
	accessrights : 1,
	active : true,
	idnr : 10,
	email : "snerk@snerk.snerk",
	phonenr : "+4747343090",
	address : "jklasdljkasd 32"
	postnr : "8329",
	postadr : "asdoila",
	coursesSubscribed = [],
	studie = "",
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
	unsubscribeClass : function(course){
		if(this.coursesSubscribed > -1){
			for(var i = 0; i < this.coursesSubscribed.length; i++){
				if(this.coursesSubscribed[i] == course){
					this.coursesSubscribed.splice(i, 1) //usikker med splice metoden.. SKJEKK UT SENERE!!!!!!!!11
					return true;
				}
			}			 
		}
		return false;
	},
	deleteAccount : function(){
		return this.active = false;
	},
	activateAccount : function(){
		return this.active = true;
	},
	setUsername : function(str){
		this.username = str;
	},
	setPassword : function(str){
		this.password = str;
	}
}// studen class