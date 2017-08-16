$(document).ready(function() {

	/**
	 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
	 *
	 * jQuery.browser.mobile will be true if the browser is a mobile device
	 *
	 **/
	(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

	if (jQuery.browser.mobile) {
		document.getElementById("mobile-css").innerHTML = "<link rel="stylesheet" href="mobile.css">";
	}

	document.write('<script src="/myJavascript.js?dev=' + Math.floor(Math.random() * 100) + '"\><\/script>');
	

	$("#showreel").fitVids();

	// var path = document.querySelector('.cls-1');
	// var length = path.getTotalLength();
	// console.log(length);

	makeTransparentFast("class","photo-overlays","photo-overlays *");
	$(".photo-overlays").addClass("height-zero");

	makeTransparentFast("id","toodSlide","treedSlide","gamesSlide","contactSlide");
	makeHalfTransparent("class","draggybutton3","draggybutton1","circlebutton1","circlebutton3","asundrbutton2","crimebutton1","crimebutton3");
	makeOpaque("class","draggybutton2","circlebutton2","asundrbutton1","crimebutton2");

	window.onresize = function(){
		var currentSlide = $(document.getElementsByClassName("center"));
		
		var slideID = (currentSlide.attr("id")).replace("Slide","");

		adjustBackgroundHeight(slideID);

		// if ( window.innerWidth < 779 ){
		// 	$("#aboutSlide").css("display","block");
		// } else if ( window.innerWidth >= 779 ){
		// 	$("#aboutSlide").css("display","flex");
		// }
	};

	adjustBackgroundHeight("about");

	//Photo Overlay Sections
	$("#toodSlide .photo-container").click(function(){
		$("#tood-overlay").removeClass("height-zero");
		$("#tood-overlay *").css("display","block");

		makeOpaque("id","tood-overlay")

		var imgID = ("overlay-" + $(this).attr('id'));

		$("#tood-overlay-bkg").fadeTo("slow", .8, function() {
			// Animation complete.
		});

		setTimeout(function() {
			makeOpaque("id",imgID)
		}, 400);
	});
	$("#tood-overlay *").click(function(){
		makeTransparent("id","tood-overlay img");

		setTimeout(function() {
			makeTransparent("id","tood-overlay","tood-overlay-bkg")
		}, 400);

		setTimeout(function(){
			$("#tood-overlay").addClass("height-zero");
			$("#tood-overlay *").css("display","none");
		}, 900);
	});

	$("#treedSlide img").click(function(){
		$("#treed-overlay").removeClass("height-zero");
		$("#treed-overlay *").css("display","block");

		makeOpaque("id","treed-overlay")

		var imgID = ("overlay-" + $(this).attr('id'));

		$("#treed-overlay-bkg").fadeTo("slow", .8, function() {
			// Animation complete.
		});

		setTimeout(function() {
			makeOpaque("id",imgID)
		}, 400);
	});
	$("#treed-overlay *").click(function(){
		makeTransparent("id","treed-overlay img");

		setTimeout(function() {
			makeTransparent("id","treed-overlay","treed-overlay-bkg")
		}, 400);

		setTimeout(function(){
			$("#treed-overlay").addClass("height-zero");
			$("#treed-overlay *").css("display","none");
		}, 900);
	});

	$("#gamesSlide img").click(function(){
		$("#games-overlay").removeClass("height-zero");
		$("#games-overlay *").css("display","block");

		makeOpaque("id","games-overlay")

		var imgID = ("overlay-" + $(this).attr('id'));

		$("#games-overlay-bkg").fadeTo("slow", .8, function() {
			// Animation complete.
		});

		setTimeout(function() {
			makeOpaque("id",imgID)
		}, 400);
	});
	$("#games-overlay *").click(function(){
		makeTransparent("id","games-overlay img");

		setTimeout(function() {
			makeTransparent("id","games-overlay","games-overlay-bkg")
		}, 400);

		setTimeout(function(){
			$("#games-overlay").addClass("height-zero");
			$("#games-overlay *").css("display","none");
		}, 900);
	});

	$(".galbutton").click(function(){
	// Saving Draggy Section
		if ($(this).hasClass('draggybutton1') && !$(this).hasClass("dragcenter")){
			$(".dragGal").removeClass("slideRight");
			$(".dragGal").addClass("slideLeft");
			classRemover("class","dragcenter","draggybutton2","draggybutton3");
			classAdder("class","dragcenter","draggybutton1");

			makeHalfTransparent("class","draggybutton3","draggybutton2");
			makeOpaque("class","draggybutton1");
		}
		if ($(this).hasClass('draggybutton2') && !$(this).hasClass("dragcenter")){
			if ($(".draggybutton1").hasClass("dragcenter")){
				$(".dragGal").removeClass("slideLeft");
			} else if ($(".draggybutton3").hasClass("dragcenter")){
				$(".dragGal").removeClass("slideRight");
			}
			classRemover("class","dragcenter","draggybutton1","draggybutton3");
			classAdder("class","dragcenter","draggybutton2");

			makeHalfTransparent("class","draggybutton1","draggybutton3");
			makeOpaque("class","draggybutton2");
		}
		if ($(this).hasClass('draggybutton3') && !$(this).hasClass("dragcenter")){
			$(".dragGal").removeClass("slideLeft");
			$(".dragGal").addClass("slideRight");
			classRemover("class","dragcenter","draggybutton1","draggybutton2");
			classAdder("class","dragcenter","draggybutton3");

			makeHalfTransparent("class","draggybutton2","draggybutton1");
			makeOpaque("class","draggybutton3");
		}
	//Circle of Fifths Section
		if ($(this).hasClass('circlebutton1') && !$(this).hasClass("circlecenter")){
			$(".circleGal").removeClass("slideRight");
			$(".circleGal").addClass("slideLeft");
			classRemover("class","circlecenter","circlebutton3","circlebutton2");
			classAdder("class","circlecenter","circlebutton1");

			makeHalfTransparent("class","circlebutton3","circlebutton2");
			makeOpaque("class","circlebutton1");
		}
		if ($(this).hasClass('circlebutton2') && !$(this).hasClass("circlecenter")){
			if ($(".circlebutton1").hasClass("circlecenter")){
				$(".circleGal").removeClass("slideLeft");
			} else if ($(".circlebutton3").hasClass("circlecenter")){
				$(".circleGal").removeClass("slideRight");
			}
			classRemover("class","circlecenter","circlebutton1","circlebutton3");
			classAdder("class","circlecenter","circlebutton2");

			makeHalfTransparent("class","circlebutton1","circlebutton3");
			makeOpaque("class","circlebutton2");
		}
		if ($(this).hasClass('circlebutton3') && !$(this).hasClass("circlecenter")){
			$(".circleGal").removeClass("slideLeft");
			$(".circleGal").addClass("slideRight");
			classRemover("class","circlecenter","circlebutton1","circlebutton2");
			classAdder("class","circlecenter","circlebutton3");

			makeHalfTransparent("class","circlebutton2","circlebutton1");
			makeOpaque("class","circlebutton3");
		}
	//Asundr Section
		if ($(this).hasClass('asundrbutton1') && !$(this).hasClass("asundrcenter")){
			$(".asundrGal").removeClass("slideLeft");
			classRemover("class","asundrcenter","asundrbutton2");
			classAdder("class","asundrcenter","circlebutton1");

			makeHalfTransparent("class","asundrbutton2");
			makeOpaque("class","asundrbutton1");
		}
		if ($(this).hasClass('asundrbutton2') && !$(this).hasClass("asundrcenter")){
			$(".asundrGal").addClass("slideLeft");
			classRemover("class","asundrcenter","asundrbutton1");
			classAdder("class","asundrcenter","asundrbutton2");

			makeHalfTransparent("class","asundrbutton1");
			makeOpaque("class","asundrbutton2");
		}
	//Crime Section
		if ($(this).hasClass('crimebutton1') && !$(this).hasClass("crimecenter")){
			$(".crimeGal").removeClass("slideRight");
			$(".crimeGal").addClass("slideLeft");
			classRemover("class","crimecenter","crimebutton3","crimebutton2");
			classAdder("class","crimecenter","crimebutton1");

			makeHalfTransparent("class","crimebutton3","crimebutton2");
			makeOpaque("class","crimebutton1");
		}
		if ($(this).hasClass('crimebutton2') && !$(this).hasClass("crimecenter")){
			if ($(".crimebutton1").hasClass("crimecenter")){
				$(".crimeGal").removeClass("slideLeft");
			} else if ($(".crimebutton3").hasClass("crimecenter")){
				$(".crimeGal").removeClass("slideRight");
			}
			classRemover("class","crimecenter","crimebutton1","crimebutton3");
			classAdder("class","crimecenter","crimebutton2");

			makeHalfTransparent("class","crimebutton1","crimebutton3");
			makeOpaque("class","crimebutton2");
		}
		if ($(this).hasClass('crimebutton3') && !$(this).hasClass("crimecenter")){
			$(".crimeGal").removeClass("slideLeft");
			$(".crimeGal").addClass("slideRight");
			classRemover("class","crimecenter","crimebutton1","crimebutton2");
			classAdder("class","crimecenter","crimebutton3");

			makeHalfTransparent("class","crimebutton2","crimebutton1");
			makeOpaque("class","crimebutton3");
		}
	});


	// Slides Section
	$(".nav-slides").click(function(){

		var thisSlideName = $(this).attr('id');

		changeNavSlideColors(thisSlideName);

		$('html, body').scrollTop(0);
		// $('html, body').animate({ scrollTop: 0 }, 'fast');

		if (thisSlideName == 'about' && !$("#aboutSlide").hasClass("center")){

			classRemover("id","slideLeft","toodSlide","treedSlide","gamesSlide");
			classAdder("id","slideRight","toodSlide","treedSlide","gamesSlide","contactSlide");

			makeTransparent("id","toodSlide","treedSlide","gamesSlide","contactSlide");
			makeOpaque("id","aboutSlide");

			$("#aboutSlide").removeClass("slideLeft");

			removeaddCenter("aboutSlide");

			// if ( window.innerWidth >= 779 ){
			// 	$("#aboutSlide").css("display","flex");
			// }
		}

		else if (thisSlideName == 'tood' && !$("#toodSlide").hasClass("center")){

			classRemover("id","slideLeft","gamesSlide","treedSlide");
			classAdder("id","slideRight","treedSlide","gamesSlide","contactSlide");
			classAdder("id","slideLeft","aboutSlide");

			makeTransparent("id","aboutSlide","treedSlide","gamesSlide","contactSlide");
			makeOpaque("id","toodSlide");

			if ($("#toodSlide").hasClass("slideRight")){
				$("#toodSlide").toggleClass("slideRight");
			} else if ($("#toodSlide").hasClass("slideLeft")){
				$("#toodSlide").toggleClass("slideLeft");
			}
			removeaddCenter("toodSlide");
		} 

		else if (thisSlideName == 'treed' && !$("#treedSlide").hasClass("center")){

			classRemover("id","slideRight","toodSlide");
			classRemover("id","slideLeft","gamesSlide");
			classAdder("id","slideRight","gamesSlide","contactSlide");
			classAdder("id","slideLeft","toodSlide","aboutSlide");

			makeTransparent("id","aboutSlide","toodSlide","gamesSlide","contactSlide");
			makeOpaque("id","treedSlide");

			if ($("#treedSlide").hasClass("slideRight")){
				$("#treedSlide").toggleClass("slideRight");
			} else if ($("#treedSlide").hasClass("slideLeft")){
				$("#treedSlide").toggleClass("slideLeft");
			}
			removeaddCenter("treedSlide");
		}

		else if (thisSlideName == 'games' && !$("#gamesSlide").hasClass("center")){

			classRemover("id","slideRight","treedSlide","toodSlide");
			classAdder("id","slideLeft","treedSlide","toodSlide","aboutSlide");
			classAdder("id","slideRight","contactSlide");

			makeTransparent("id","aboutSlide","toodSlide","treedSlide","contactSlide");
			makeOpaque("id","gamesSlide");

			if ($("#gamesSlide").hasClass("slideRight")){
				$("#gamesSlide").toggleClass("slideRight");
			} else if ($("#gamesSlide").hasClass("slideLeft")){
				$("#gamesSlide").toggleClass("slideLeft");
			}
			removeaddCenter("gamesSlide");
		}

		else if (thisSlideName == 'contact' && !$("#contactSlide").hasClass("center")){

			classRemover("id","slideRight","treedSlide","toodSlide","aboutSlide","gamesSlide");
			classAdder("id","slideLeft","treedSlide","toodSlide","aboutSlide","gamesSlide");

			makeTransparent("id","aboutSlide","toodSlide","treedSlide","gamesSlide");
			makeOpaque("id","contactSlide");

			$("#contactSlide").removeClass("slideRight");

			removeaddCenter("contactSlide");
		}

		adjustBackgroundHeight(thisSlideName);
		
	});

function changeNavSlideColors(pass) {
	var navID = ("#" + pass);

	//Changes selected slide title to grey
	$(navID).addClass("header-nav-to-grey");

	var navIDS = ["#about", "#tood", "#treed", "#games", "#contact"];

	//Ensures selected slide title doesn't change to wrong color
	for (var i = navIDS.length-1; i>=0; i--) {
		if (navIDS[i] == navID) {
			navIDS.splice(i,1);
		}
	}

	//Changes non-centered slide titles to white
	for (var i = navIDS.length-1; i>=0; i--) {
		$(navIDS[i]).removeClass("header-nav-to-grey");
	}
}

function adjustBackgroundHeight(pass) {

	var slideID = ("#" + pass + "Slide");

	$(slideID).removeClass("height-zero");

	//Adds extra height to background SVG
	var slideHeight = $(slideID).height() + 75;

	//Makes sure background SVG covers full height of window
	if ( window.innerHeight > slideHeight ) {
		slideHeight =  slideHeight + (window.innerHeight - slideHeight);
	}

	//Makes sure footer doesn't fall short on Games slide
	if (slideID == "#gamesSlide") {
		slideHeight += 30;
	} 
	//Runs check & edit to make sure footer doesn't cover page content
	if (slideID == "#contactSlide") { 
		var h = $("#contactSlide .photo-content").css("height");
		h = parseInt(h);
		if (window.innerHeight > (h + 180) ) {
			slideHeight -= 61;
		}
	} 
	//Runs check & edit to make sure footer doesn't cover page content
	// if (slideID == "#aboutSlide") { 
	// 	var h = $("#about").css("height");
	// 	h = parseInt(h);
	// 	console.log("h" + h);
	// 	console.log("window" + window.innerHeight);
	// 	if (window.innerHeight < (h + 150) ) {
	// 		slideHeight -= 61;
	// 	}
	// } 

	//Changes height of background SVG on behalf of prior computations
	$("#background-svg").height(slideHeight);

	setTimeout(function() {
		heightZeroAdder(slideID)
	}, 1000);

}

function heightZeroAdder(pass) {
	if (!$("#aboutSlide").hasClass("center")) {
		$("#aboutSlide").addClass("height-zero");
	} 
	if (!$("#toodSlide").hasClass("center")) {
		$("#toodSlide").addClass("height-zero");
	} 
	if (!$("#treedSlide").hasClass("center")) {
		$("#treedSlide").addClass("height-zero");
	} 
	if (!$("#gamesSlide").hasClass("center")) {
		$("#gamesSlide").addClass("height-zero");
	} 
	if (!$("#contactSlide").hasClass("center")) {
		$("#contactSlide").addClass("height-zero");
	} 

	$(pass).removeClass("height-zero");
}

function removeaddCenter(pass) {
	$("#aboutSlide").removeClass("center");
	$("#toodSlide").removeClass("center");
	$("#treedSlide").removeClass("center");
	$("#gamesSlide").removeClass("center");
	$("#contactSlide").removeClass("center");

	var currentSlide = $('#' + pass);
	currentSlide.toggleClass("center");
} 

function makeTransparent() {
	var i;
	var type = classIdCheck(arguments[0]);
	for (i=1; i < arguments.length; i++){
		var slide = $(type + arguments[i]);
		slide.fadeTo("slow", 0, function() {
			// Animation complete.
		});
	}
}

function makeHalfTransparent() {
	var i;
	var type = classIdCheck(arguments[0]);
	for (i=1; i < arguments.length; i++){
		var slide = $(type + arguments[i]);
		slide.fadeTo("slow", .5, function() {
			// Animation complete.
		});
	}
}

function makeTransparentFast() {
	var i;
	var type = classIdCheck(arguments[0]);
	for (i=1; i < arguments.length; i++){
		var slide = $(type + arguments[i]);
		slide.fadeTo(.1, 0, function() {
			// Animation complete.
		});
	}
}

function makeOpaque() {
	var i;
	var type = classIdCheck(arguments[0]);
	for (i=1; i < arguments.length; i++){
		var slide = $(type + arguments[i]);
		slide.fadeTo("slow", 1, function() {
			// Animation complete.
		});
	}
}

function classRemover(){
	var i;
	var type = classIdCheck(arguments[0]);
	var classy = arguments[1];
	for (i=1; i < arguments.length; i++){
		var slide = $(type + arguments[i]);
		slide.removeClass(classy);
	}
}

function classAdder(){
	var i;
	var type = classIdCheck(arguments[0]);
	var classy = arguments[1];
	for (i=1; i < arguments.length; i++){
		var slide = $(type + arguments[i]);
		slide.addClass(classy);
	}
}

function classIdCheck(pass){
	var type;
	if (pass == "id"){
		type = "#";
	} else if (pass == "class") {
		type = ".";
	}
	return type;
}

});

