window.addEventListener('load', function(e){

	// needs CORS... (20180628/thisisaaronland)
	// missionintegers.api.call("/ping", {});

	var b = document.getElementById("crush-it");
	var m = document.getElementById("missioninteger");
	var f = document.getElementById("feedback");
	
	if (! b){
	    console.log("Can't find crush-it button");
	    return false;
	}

	if (! m){
	    console.log("Can't find mission integer target");
	    return false;
	}

	if (! f){
	    console.log("Can't find feedback target");
	    return false;
	}

	b.onclick = function(){

	    m.innerHTML = "&#160;";
	    f.innerText = "fetching your integer";

	    var on_success = function(i){

		m.style.display = "block";
		m.innerText = i;

		f.innerText = "Your new integer is " + i + "! What a great integer!";

		b.removeAttribute("disabled");
	    };
	    
	    var on_error = function(rsp){
		f.innerText = "OH NO!!!!! There was a problem creating your integer!";
		b.removeAttribute("disabled");
	    };

	    missionintegers.api.call("/integer", {}, on_success, on_error);

	    b.setAttribute("disabled", "disabled");
	    return false;
	};
});