var student = {
	accessrights : 1,
	activeStudent : true,
	idnr : 10,
	email : "snerk@snerk.snerk",
	phonenr : "+4747343090",
	address : "jklasdljkasd 32"
	postnr : "8329",
	postadr : "asdoila",
	coursesSubscribed = [],
	studie = "",

	changeEmail : function(str){
		this.email = str;
	},
	changePhonenr : function(str){
		this.phonenr = str;
	},
	changeAdr : function(str){
		this.address = str;
	},
	changePostnr : function(str){
		this.postnr = str;
	},
	changePostadr : function(str){
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
		return this.activeStudent = false;
	},
	activateAccount : function(){
		return this.activeStudent = true;
	}
}// studen class