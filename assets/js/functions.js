// sticky header
/*$(window).scroll(function() {    
var scroll = $(window).scrollTop();
//>=, not <=
if (scroll >= 300) {
//clearHeader, not clearheader - caps H
$("header").addClass("stickyheader");
} else {
$("header").removeClass("stickyheader");  
}
});*/
// sticky header end

// wow start
new WOW().init();
// wow end

// sticky social
$(document).scroll(function () {
	"use strict";
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.sticky-container').fadeIn();
    } else {
        $('.sticky-container').fadeOut();
    }

}); 
// sticky social end

$(document).ready(function() {
"use strict";

// Active Current Page
var str=location.href.toLowerCase();
$(".nav-area-full a").each(function() {
if (str.indexOf(this.href.toLowerCase()) > -1) {
$(".active").removeClass("active");
$(this).parent().addClass("active");
}
});	
// Active Current Page end

   //*****************************
    // Mobile Navigation
    //*****************************
    $('.mobile-nav-btn').click(function() {
        $('.mobile-nav-btn, .mobile-nav, .app-container').toggleClass('active');
    });   

    $('.firstlevel li a').click(function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).siblings('ul').slideUp();
        }else{
            $('.firstlevel li a').removeClass('active');
            $(this).addClass('active');
            $('.dropdown').slideUp();
            $(this).siblings('ul').slideDown();
        }
    });

    $('.mainnav > li > a').click(function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).parents('li').children('.firstlevel').slideUp();
        }else{
            $(this).addClass('active');
            $(this).parents('li').children('.firstlevel').slideDown();
            $(this).parents('li').siblings('li').children('a').removeClass('active');
            $(this).parents('li').siblings('li').children('.firstlevel').slideUp();
        }
    }); 
    
////// main slider
 $(".home-slider").slick({
    dots: true,
    arrows: true,
    infinite: !0,
    speed: 1000,
    slidesToShow: 1,
    autoplay: !0,
    autoplaySpeed: 4000,
    adaptiveHeight: !0,
    responsive: [
    {
      breakpoint: 767,
      settings: {
    dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });

// progress bar
 var time = 4;
 var $bar, $slick, isPause, tick, percentTime;
$slick = $('.home-slider'); 
$bar = $('.slider-progress .progress');   
$('.slider-wrapper').on({
mouseenter: function() { isPause = true; },
mouseleave: function() { isPause = false; }
});
 function startProgressbar() { resetProgressbar(); percentTime = 0; isPause = false; tick = setInterval(interval, 10); }
  function interval() {
    if(isPause === false) { percentTime += 1 / (time+0.1); $bar.css({ width: percentTime+"%" }); if(percentTime >= 100)
        { $slick.slick('slickNext'); startProgressbar(); }
    }
  }
function resetProgressbar() { $bar.css({ width: 0+'%' }); clearTimeout(tick); }
startProgressbar();  
////// main slider end

  ////// mob slider
    $(".sliderxs").slick({
        arrows: false,
        dots: true,
        autoplay: true,
		adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: "unslick"
            },
            {
              breakpoint: 767,
              settings: {
                unslick: true
              }
            }
        ]
    });
////// mob slider end

////// testimonial slider
$(".testimonials-slider-main").slick({
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  //fade: true,
  //cssEase: 'linear',    
    });  
////// testimonial slider end


$('.thumb-slider').slick({
centerMode: true,
centerPadding: '0px',
arrows: true,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [
{
breakpoint: 768,
settings: {
arrows: false,
dots:false,
centerMode: true,
centerPadding: '10px',
slidesToShow: 3
}
},
{
breakpoint: 767,
settings: {
arrows: false,
dots:false,
centerMode: false,
centerPadding: '10px',
slidesToShow: 1
}
},
{
breakpoint: 480,
settings: {
arrows: false,
dots:false,
centerMode: true,
centerPadding: '10px',
slidesToShow: 1
}
}
]
});

///// gallery simple
$('.slider-for').slick({
dots: true,
arrows:false,
infinite: true,
speed: 500,
slide: 'li',
fade: false,
cssEase: 'linear',
centerMode: true,
slidesToShow: 1,
variableWidth: true,
autoplay: true,
autoplaySpeed: 4000,
responsive: [{
	breakpoint: 800,
	settings: {
		arrows: false,
		centerMode: false,
		centerPadding: '40px',
		variableWidth: false,
		slidesToShow: 1,
		dots: true
	},
	breakpoint: 1200,
	settings: {
		arrows: false,
		centerMode: false,
		centerPadding: '40px',
		variableWidth: false,
		slidesToShow: 1,
		dots: true
	}
}],
customPaging: function (slider, i) {
	return '<button class="tab">' + $('.thumbsmain li:nth-child(' + (i + 1) + ')').html() + '</button>';
}
});
///// gallery simple end

////// gallery slider
$(".gallery-slider-main").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  cssEase: 'linear',    
   asNavFor: '.gallery-nav-main'
    });  
$('.gallery-nav-main').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  //vertical:true,
  asNavFor: '.gallery-slider-main',
  dots: true,
  //centerMode: true,
  focusOnSelect: true
});	
////// gallery slider end



////// thumb gallery slider
$(".bid-slider-gallery").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  //fade: true,
  //cssEase: 'linear',    
   asNavFor: '.bid-gallery-nav'
    });  
$('.bid-gallery-nav').slick({
  dots: false,
  arrows: false,  
  slidesToShow: 5,
  slidesToScroll: 5,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  vertical:true,
  focusOnSelect: true,
  //centerMode: true,
  asNavFor: '.bid-slider-gallery',
  responsive: [
{
breakpoint: 767,
settings: {
 vertical:false,
}
}
]
}); 
////// thumb gallery slider end

////// tabs generic (nav and tabs in main div)
$('.tab-custom .tab-custom-nav a').click(function(event){
$(this).closest('li').siblings('li').children('a').removeClass('current');
$(this).addClass('current');
$(this).closest('.tab-custom').children('div.tab-content-panel:not(:hidden)').hide();
$(this.hash).show();
event.preventDefault();
$('.sliderxs').slick('setPosition');
});
////// tabs generic end

////// tabs custom (place nav and tabs anywhere separately)
$('.tabs-custom-nav a').click(function(event){
$(this).closest('li').siblings('li').children('a').removeClass('current');
$(this).addClass('current');
$(this.hash).closest('.general').children('div.tab-content-panel:not(:hidden)').hide();
$(this.hash).show();
event.preventDefault();
$('.sliderxs').slick('setPosition');
});
////// tabs custom end

////// Accordion 
$('.accordion .quest-title.active1').addClass('active');
$('#accordion-1').slideDown(300).addClass('open');
function close_accordion_section() {
jQuery('.accordion .quest-title').removeClass('active');
jQuery('.accordion .quest-content').slideUp(300).removeClass('open');
}
jQuery('.quest-title').click(function(e) {
// Grab current anchor value
var currentAttrValue = jQuery(this).attr('href');
if(jQuery(e.target).is('.active')) {
close_accordion_section();
}else {
close_accordion_section();
// Add active class to section title
jQuery(this).addClass('active');
// Open up the hidden content panel
jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
}
e.preventDefault();
});
////// Accordion end 

////// fancybox
$('[data-fancybox="swf-file"]').fancybox({
	iframe : {
		css : {
			width : '336px',
			height : '280px'
		}
	}
});

$('[data-fancybox="video-file"]').fancybox({
	iframe : {
		css : {
			width : '580px',
			height : '340px'
		}
	}
});		
////// fancybox end


// car scroll top
var $scrolltop = jQuery('.car-top');
jQuery(window).scroll(function() {
    if (jQuery(window).scrollTop() >= 200) {
        $scrolltop.addClass("show");
        $scrolltop.addClass("car-down");
    } else {
        $scrolltop.removeClass("show");
        setTimeout(function() {
            $scrolltop.removeClass('car-down');
        }, 300);
    }
});
$scrolltop.on('click', function() {
jQuery('html,body').animate({
    scrollTop: 0
}, 800);
jQuery(this).addClass("car-run");
setTimeout(function() {
    $scrolltop.removeClass('car-run');
}, 1000);
return false;
});
// car scroll top end



}); // document ready end

 
 ////// slick gallery counter
var $gallery = $('.gallery-slider-main');
var slideCount = null;

$gallery.on('init', function(event, slick){
	"use strict";
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
});

$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
	"use strict";
  setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
	"use strict";
  var $el = $('.slide-count-wrap').find('.total');
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
	"use strict";
  var $el = $('.slide-count-wrap').find('.current');
  $el.text(currentSlide + 1);
}
////// slick gallery counter end
 
////// footer year
$(function(){
"use strict";
var theYear = new Date().getFullYear();
$('#year').html(theYear);
});	


// w3school tabs 


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


// close 

// Slick Slider 

$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
// close 

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//Navbar  scroll function 

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".main-nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// close 

function validateAndSignup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Basic Validation
  if (name === "") {
    alert("Please enter your name.");
    return;
  }
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  // Save user data (simulate backend storage)
  localStorage.setItem("Touseef", name);
  localStorage.setItem("Touseef@gmail.com", email);
  localStorage.setItem("Ahsanbashir", password);

  // Redirect to login page
  alert("Sign up successful! Redirecting to login page...");
  window.location.href = "login.html";
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}


// LOGIN PAGE 

function loginUser() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Retrieve stored user data
  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // Check if email and password are provided
  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // Check if the user is already logged in
  if (isLoggedIn === "true" && email === storedEmail) {
    alert("You are already logged in with this account.");
    return; // Prevent further login attempts
  }

  // Validate credentials
  if (email === storedEmail && password === storedPassword) {
    alert("Login successful!");

    // Store the logged-in user's status
    localStorage.setItem("isLoggedIn", "true");

    // Redirect to the homepage (or dashboard)
    window.location.href = "index.html";  // Change the URL if needed
  } else {
    alert("Invalid email or password. Please try again.");
  }
}


// 2nd 



// Login User Function
function loginUser() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Retrieve stored user data from localStorage
  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // Check if the user is already logged in
  if (isLoggedIn === "true" && email === storedEmail) {
    alert("You are already logged in with this account.");
    window.location.href = "profile.html"; // Redirect to the profile page
    return;
  }

  // Validate user credentials
  if (email === storedEmail && password === storedPassword) {
    alert("Login successful!");

    // Store the login status and the logged-in user's email
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", email);

    // Redirect to the profile or dashboard page
    window.location.href = "profile.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

// Logout User Function
function logoutUser() {
  // Clear login status and user data from localStorage
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("appointmentData");

  alert("You have been logged out.");
  window.location.href = "login.html"; // Redirect to login page
}


// Check if the user is logged in
const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn !== "true") {
  alert("Please log in to view your profile/dashboard.");
  window.location.href = "login.html"; // Redirect to login page if not logged in
}



// close 



// index page ki 
 
window.onload = function() {
  // Check if user is logged in by looking for 'isLoggedIn' in localStorage
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    const userEmail = localStorage.getItem("userEmail");

    // Check if the user profile element exists before updating it
    const userProfile = document.getElementById("userProfile");
    if (userProfile) {
      userProfile.innerText = `Welcome, ${userEmail}`;
    }

    // Hide login button and show logout button, if they exist
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    if (loginBtn) {
      loginBtn.style.display = "none";
    }
    if (logoutBtn) {
      logoutBtn.style.display = "inline-block";
    }
  }
};


function logoutUser() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userEmail");
  window.location.href = "index.html"; // Redirect to homepage
}


// close 


// local storange 

function confirmAppointment() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    const userEmail = localStorage.getItem("userEmail");
    const appointmentDetails = {
      user: userEmail,
      date: new Date().toLocaleString(), // Store current date and time as appointment time
      status: "Confirmed"
    };

    // Save the appointment data to localStorage
    localStorage.setItem("appointmentData", JSON.stringify(appointmentDetails));

    alert("Your appointment has been confirmed!");

    // Optionally, redirect to a confirmation page or show the details
    window.location.href = "dashboard.html"; 
  } else {
    alert("Please log in to confirm your appointment.");
    window.location.href = "login.html"; // Redirect to login if not logged in
  }
}



window.onload = function() {
  const appointmentData = localStorage.getItem("appointmentData");

  if (appointmentData) {
    const appointment = JSON.parse(appointmentData);
    document.getElementById("appointmentDetails").innerHTML = `
      <h3>Appointment Details</h3>
      <p>User: ${appointment.user}</p>
      <p>Appointment Date: ${appointment.date}</p>
      <p>Status: ${appointment.status}</p>
    `;
  } else {
    alert("No appointment data found.");
  }
};


// close


// Toggle btn  

// JavaScript for Toggle Button
const toggleButton = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar ul');


toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active'); // Animate toggle button
  navbar.classList.toggle('active');      // Show/hide menu
});

// Optional: Add a scroll effect for changing navbar background
window.addEventListener('scroll', () => {
  const mainNav = document.querySelector('.main-nav');
  mainNav.classList.toggle('scrolled', window.scrollY > 50);
});





// close 


// Final Login Page 


localStorage.setItem("userEmail", "Touseefbashir919@gmail.com");
localStorage.setItem("userPassword", "Touseefbashir");
localStorage.setItem("isLoggedIn", "true");  

// Initially, the user is not logged in



// close  

// NAVBAR PAGE 

document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const loggedInUser = localStorage.getItem("loggedInUser");

  if (isLoggedIn === "true" && loggedInUser) {
    document.getElementById("loginBtn").classList.add("hidden");
    document.getElementById("profileBtn").classList.remove("hidden");
    document.getElementById("logoutBtn").classList.remove("hidden");
  } else {
    document.getElementById("loginBtn").classList.remove("hidden");
    document.getElementById("profileBtn").classList.add("hidden");
    document.getElementById("logoutBtn").classList.add("hidden");
  }
});



// close 


// Confirm reservation 


  function confirmAppointment() {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      // If the user is logged in, confirm the reservation
      const userConfirmed = confirm("Are you sure you want to confirm this reservation?");
      if (userConfirmed) {
        alert("Your reservation is confirmed!");
        // Additional actions for reservation confirmation can be added here
      }
    } else {
      // If the user is not logged in, redirect to signup page
      alert("Please sign up or log in to confirm your reservation.");
      window.location.href = "signup.html"; // Change to the correct signup page URL
    }
  }



// close 



function confirmAppointment() {
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const numPeople = document.getElementById('numPeople').value;
    const comments = document.getElementById('comments').value;

    // Basic validation
    if (!userName || !userEmail || !appointmentDate || !numPeople) {
        alert("Please fill all fields.");
        return;
    }

    // Save appointment details in localStorage
    const appointmentData = {
        user: userName,
        email: userEmail,
        date: appointmentDate,
        numPeople: numPeople,
        comments: comments,
        status: "Confirmed"
    };

    localStorage.setItem("appointmentData", JSON.stringify(appointmentData));

    // Redirect to dashboard after saving appointment details
    window.location.href = "dashboard.html"; // Redirect to the dashboard page
}
