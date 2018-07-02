window.addEventListener('load', function(e){

	var on_success = function(rsp){
	    console.log("SUCCESS", rsp);
	};

	var on_error = function(rsp){
	    console.log("ERROR", rsp);
	};

	missionintegers.api.call("/ping", {}, on_success, on_error);
});