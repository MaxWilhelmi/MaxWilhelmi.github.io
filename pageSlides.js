$(document).ready(function() {

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

