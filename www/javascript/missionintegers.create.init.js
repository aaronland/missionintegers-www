window.addEventListener('load', function(e){

	var messages = {
	    "warmup": "warming up",
	    "prep": "all mission integers are prepared serverless-to-table",
	    "fetch": "fetching your integer",
	    "trouble": "OH NO!!!!! There was a problem creating your integer!",
	};

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
	
	var int2emoji = function(i){

	    var lookup = {
		'0': '0️⃣',
		'1': '1️⃣',
		'2': '2️⃣',
		'3': '3️⃣',
		'4': '4️⃣',
		'5': '5️⃣',
		'6': '6️⃣',
		'7': '7️⃣',
		'8': '8️⃣',
		'9': '9️⃣',
	    };

	    var emoji = "";

	    var parts = String(i).split("");
	    var count = parts.length;

	    for (var i=0; i < count; i++){
		emoji += lookup[parts[i]];
	    }

	    return emoji;
	};

	var create = function(){
	    
	    b.onclick = function(){
		
		m.innerHTML = "&#160;";
		f.innerText = messages["fetch"];

		whosonfirst.html.css.append_class(f, "spinner");
		
		var on_success = function(i){
		    
		    whosonfirst.html.css.remove_class(f, "spinner");
		    
		    m.style.display = "block";
		    m.innerText = int2emoji(i);
		    
		    var int = document.createElement("strong");
		    int.appendChild(document.createTextNode(i));

		    var next = document.createElement("strong");
		    next.appendChild(document.createTextNode("take it to the next level"));

		    next.onclick = function(){
			m.innerText = "";
			f.innerText = messages["prep"],
			b.style.display = "block";
			return false;
		    };

		    var msg = document.createElement("span");
		    msg.appendChild(int);
		    msg.appendChild(document.createTextNode(" is a crazy special integer! "));
		    msg.appendChild(document.createTextNode("Do you want to "));
		    msg.appendChild(next);
		    msg.appendChild(document.createTextNode("?"));		    

		    f.innerHTML = "";
		    f.appendChild(msg);
		};
		
		var on_error = function(rsp){
		    f.innerText = messages["trouble"];
		};
		
		missionintegers.api.call("/integer", {}, on_success, on_error);
		
		b.style.display = "none";
		return false;
	    };
	};

	var on_success = function(){
	    b.style.display = "block";
	    f.innerText = messages["prep"];
	    create();
	};

	var on_error = function(rsp){
	    console.log("ERROR", rsp);
	};

	missionintegers.api.call("/ping", {}, on_success, on_error);	
});