window.addEventListener('load', function(e){

	var b = document.getElementById("crush-it");
	var el = document.getElementById("missioninteger");
	
	if (! b){
	    return false;
	}

	if (! el){
	    return false;
	}

	b.onclick = function(){

	    var on_success = function(i){

		el.style.display = "block";
		el.innerText = i;

		b.removeAttribute("disabled");
	    };
	    
	    var on_error = function(rsp){
		alert("OH NO...");

		b.removeAttribute("disabled");
	    };

	    missionintegers.api.integer(on_success, on_error);

	    b.setAttribute("disabled", "disabled");
	    el.style.display = "none";

	    return false;
	};
});