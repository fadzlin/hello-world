(function(){

	// the minimum version of jQuery we want
	var v = "1.3.2";

	// check for jQuery. if it exists, verify it's not too old.
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}

	function initMyBookmarklet() {
		(window.myBookmarklet = function() {


			function getURL()
			{
				var curHost = window.location.hostname;
				//var curArr = curURL.split('.');
				//alert(curHost);

				if (curHost == "www.zalora.com.my")
					curURL = "https://googledrive.com/host/0B9vIlFk4tv0WUGRITEVuYVl3WjQ";
				else if (curHost == "www.lazada.com.my")
					curURL = "https://googledrive.com/host/0B9vIlFk4tv0WUHl3LTFUczFoNEU";
				else
					alert("No Terms & Conditions available currently for: "+curHost);

				return curURL;
			}
			if ($("#wikiframe").length == 0) {
				var s = "";
				s = getURL();
				if (s == "") {
					//var s = prompt("Forget something?");
					alert("Hostname Not Detected")
				}

				if ((s != "") && (s != null)) {
					$("body").append("\
					<div id='wikiframe'>\
						<div id='wikiframe_veil' style=''>\
							<p>Processing...</p>\
						</div>\
						<iframe src="+s+" onload=\"$('#wikiframe iframe').slideDown(500);\">Enable iFrames.</iframe>\
						<style type='text/css'>\
							#wikiframe_veil { display: none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(255,255,255,.25); cursor: pointer; z-index: 900; }\
							#wikiframe_veil p { color: black; font: normal normal bold 20px/20px Helvetica, sans-serif; position: absolute; top: 50%; left: 50%; width: 10em; margin: -10px auto 0 -5em; text-align: center; }\
							#wikiframe iframe { display: none; position: fixed; top: 10%; left: 10%; width: 80%; height: 80%; z-index: 999; border: 10px solid rgba(0,0,0,.5); margin: -5px 0 0 -5px; }\
						</style>\
					</div>");
					$("#wikiframe_veil").fadeIn(750);
				}
			} else {
				$("#wikiframe_veil").fadeOut(750);
				$("#wikiframe iframe").slideUp(500);
				setTimeout("$('#wikiframe').remove()", 750);
			}
			$("#wikiframe_veil").click(function(event){
				$("#wikiframe_veil").fadeOut(750);
				$("#wikiframe iframe").slideUp(500);
				setTimeout("$('#wikiframe').remove()", 750);
			});
		})();
	}

})();
