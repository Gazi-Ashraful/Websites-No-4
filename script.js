(function($) { "use strict";
	// Cursor
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
		t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });

    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
	// Cursor
	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});

	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});

	
	//Services_section
	
	$(".services").on('click', function () {
		$("body").addClass("services-on");
	});
	$(".services-close").on('click', function () {
		$("body").removeClass("services-on");
	});

	
	//testimonial page
	
	$(".testimonial").on('click', function () {
		$("body").addClass("testimonial-on");
	});
	$(".testimonial-close").on('click', function () {
		$("body").removeClass("testimonial-on");
	});

	
	// portfolio page
	$(".portfolio").on('click', function () {
		$("body").addClass("portfolio-on");
	});
	$(".portfolio-close").on('click', function () {
		$("body").removeClass("portfolio-on");
	});


				// Contact_Section 
	$(".sing-in-1").on('click', function () {
	$("body").addClass("about-onon");
	});
			
	$(".sing-up-1").on('click', function () {
	$("body").removeClass("about-onon");
	});
				// Contact_Section 
				//Contact_Section Responsive
	$(".as-a2").on('click', function () {
	$("body").addClass("about-onon");
	});

	$(".as-a1").on('click', function () {
		$("body").removeClass("about-onon");
	});
			  //Contact_Section Responsive



})(jQuery);



// Testimonial_section

var as1 = 1;
as2(as1);

function as3button(n) {
  as2(as1 += n);}

function as2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {as1 = 1}    
  if (n < 1) {as1 = x.length}
  for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";  }
  
  x[as1 -1].style.display = "block"; 

}

//   Testimonial_section




