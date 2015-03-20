var student = {
	accessrights : 1,
	active : false,
	idnr : 1,
	email : "",
	phonenr : "",
	address : "",
	postnr : "",
	postadr : "",
	coursesSubscribed : [],
	studie : "",
	username : "",
	password : "",
/* Herregud! sett alle felles metoder for adm,teach,stud i egen fil, og heller send med objektet. */
	setEmail : function(str){
		var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(str.match(pattern)){ //evt bruk pattern.test(str); <- antakeligvis bedre
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
	subscribeClass : function(course){
		return this.coursesSubscribed.push(course);
	},
	unsubscribeClass : function(course){
		if(this.coursesSubscribed.length > 0){
			for(var i = 0; i < this.coursesSubscribed.length; i++){
				if(this.coursesSubscribed[i] == course){
					this.coursesSubscribed.splice(i, 1); //usikker med splice metoden.. SKJEKK UT SENERE!!!!!!!!11
					return true;
				}
			}
		}
		return false;
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
};// student class
