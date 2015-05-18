$(function(){
document.getElementById('submit').addEventListener("click", function(e) {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;



  if(setName(name) && setEmail(email) && setMessage(message)){

  }else{
		e.preventDefault();
		if(!setName(name)){
			document.getElementById('name').className =  "danger" ;
		}else{
			document.getElementById('name').className =  "success" ;
		}

		if(!setEmail(email)){
			document.getElementById( "email" ).className =  "danger" ;
		}else{
			document.getElementById( "email" ).className = "success";
		}

    if(!setMessage(message)){
      document.getElementById( "message" ).className =  "danger" ;
    }else{
      document.getElementById( "message" ).className = "success";
    }
	}
});

var setName = function(str){
	var pattern = /[a-zA-Z- ]+$/i;
	if(str.match(pattern)){
		return true;
	}
	return false;
};

var setEmail =  function(str){
	var pattern = /(\b[a-zA-Z0-9-_~!$&'()*+,;=:.]+[^.,])@(\b[^-_][a-zA-Z0-9-_]*[^_-])\.(\b[a-zA-Z0-9]{2,63})/;
		//var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(str.match(pattern)){ //evt bruk pattern.test(str); <- antakeligvis bedre
			return true;
		}
		return false;
	};

  var setMessage =  function(str){
  		if(str.length > 0){
  			return true;
  		}
  		return false;
  	};
  });//onready
