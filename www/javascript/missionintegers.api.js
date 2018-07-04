var missionintegers = missionintegers || {};

missionintegers.api = (function(){

	var self = {

	    'call': function(method, data, on_success, on_error){
		
		var dothis_onsuccess = function(rsp){
		
		    if (on_success){
			on_success(rsp);
		    }
		};
		
		var dothis_onerror = function(rsp){
		    
		    console.log("API error", rsp);
		    
		    if (on_error){
			on_error(rsp);
		    }
		};
				
		var form_data = data;
		
		if (! form_data.append){
		    
		    form_data = new FormData();
		    
		    for (key in data){
			form_data.append(key, data[key]);
		    }
		}
				
		var onload = function(rsp){
		    
		    var target = rsp.target;
		    
		    if (target.readyState != 4){
			return;
		    }
		    
		    var status_code = target['status'];
		    var status_text = target['statusText'];
		    
		    var data = target['responseText'];
		    
		    dothis_onsuccess(data);
		    return true;
		};
		
		var onprogress = function(rsp){
		    // console.log("progress");
		};
		
		var onfailed = function(rsp){
		    
		    dothis_onerror(rsp);
		};
		
		var onabort = function(rsp){
		    
		    dothis_onerror(rsp);
		};
		
		// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data
		
		try {
		    var req = new XMLHttpRequest();
		    
		    req.addEventListener("load", onload);
		    req.addEventListener("progress", onprogress);
		    req.addEventListener("error", onfailed);
		    req.addEventListener("abort", onabort);
		    		    
		    var endpoint = "https://www.missionintegers.com/api" + method;

		    req.open("POST", endpoint, true);
		    req.send(form_data);
		    
		} catch (e) {
		    
		    dothis_onerror(rsp);
		    return false;
		}
		
		return false;
	    }
	};

	return self;
})();
