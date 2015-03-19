var teacher = {
	accessrights : 3,
	active : true,
	idnr : 12,
	email : "snerk@snerk.snerk",
	phonenr : "+4747343090",
	address : "jklasdljkasd 32"
	postnr : "8329",
	postadr : "asdoila",
	coursesAdmin = [],
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
	}
}// studen class