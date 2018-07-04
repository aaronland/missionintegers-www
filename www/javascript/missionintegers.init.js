window.addEventListener('load', function(e){

	var el = document.getElementById("crush-it");

	if (! el){
	    return false;
	}

	var f = document.getElementById("feedback");

	if (! f){
	    return false;
	}

	var on_success = function(rsp){
	    el.style.display = "block";

	    whosonfirst.html.css.remove_class(f, "spinner");
	    f.innerHTML = "";	    
	};

	var on_error = function(rsp){
	    console.log("unable to /ping the mission integers API... ", rsp);
	};

	missionintegers.api.call("/ping", {}, on_success, on_error);
});