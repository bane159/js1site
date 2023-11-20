//TEMPLATE JS
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar  JQuery promeni kasnije
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button JQuery promeni kasnije
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter JQuery promeni kasnije
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel karosel library owl
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel karosel library owl
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter filter za tip projekta
    // var portfolioIsotope = $('.portfolio-container').isotope({
    //     itemSelector: '.portfolio-item',
    //     layoutMode: 'fitRows'
    // });
    // $('#portfolio-flters li').on('click', function () {
    //     $("#portfolio-flters li").removeClass('active');
    //     $(this).addClass('active');

    //     portfolioIsotope.isotope({filter: $(this).data('filter')});
    // });
    
})(jQuery);

//DINAMICKI ISPIS

//objekti
// delay, fa-icon, broj, text 

var FeatureObjs = [
    {
        text: 'Creative Designers',
        number: '01',
        icon: 'fa-user-check'
    },
    {
        text: 'Quality Products',
        number: '02',
        icon: 'fa-check'
    },
    {
        text: 'Free Consultation',
        number: '03',
        icon: 'fa-drafting-compass'
    },
    {
        text: 'Customer Support',
        number: '04',
        icon: 'fa-headphones'
    }
];

//<div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
//                   <div class="d-flex align-items-center justify-content-around mb-2">
//                        <div class="d-flex align-items-center justify-content-center bg-light" style="width: 60px; height: 60px;">
//                            <i class="fa fa-user-check fa-2x text-primary"></i>
//                        </div>
//                        <h1 class="display-1 text-black-50 mb-0">01</h1>
//                    </div>
//                   <h5 class= "">Creative Designers</h5>
//    </div>

function makeFeature(feature){
    let featureHTML = `<div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s"><div class="d-flex align-items-center justify-content-evenly mb-2"><div class="d-flex align-items-center justify-content-center bg-light" style="width: 60px; height: 60px;"><i class="fa ${feature.icon} fa-2x text-primary"></i></div><h1 class="display-1 text-black-50 mb-0">${feature.number}</h1></div><h5 class = "text-center">${feature.text}</h5></div>`;
    return featureHTML;
}
var featureEl = document.querySelector("#dinamicFeatures");
console.log(featureEl);
if(featureEl){
    for(let feature of FeatureObjs){
       featureEl.innerHTML += makeFeature(feature);
    }
}





// form valid

window.onload = function(){

    //start name field validation
    const nameRegEx = /^[A-Z][a-z]{1,}$/;
    var name = document.querySelector("#name-input");
    var reqTxt = document.querySelector("#required-field-name");
    var incTxt = document.querySelector("#incorrect-field-name");
    name.addEventListener("focus", function(){
        if(!name.value){
            reqTxt.classList.remove("invisible")
        }
    })
    name.addEventListener("keyup", function(){
        //is it empty?
        if(name.value){    
            name.classList.remove("border-success");
            name.classList.add("border-danger");
            reqTxt.classList.add("invisible");
        }
            //if not empty show req field
        else { 
            name.classList.remove("border-success");
            name.classList.add("border-danger");
            reqTxt.classList.remove("invisible");
        } 
        //if regex true then success
        if(nameRegEx.test(name.value)){
            name.classList.remove("border-danger");
            name.classList.add("border-success");
            incTxt.classList.add("d-none");
        }
        //if regex false then danger
        else{
            name.classList.remove("border-success");
            name.classList.add("border-danger");
            incTxt.classList.remove("d-none");

        }
    })
    name.addEventListener("blur", function(){
        if(nameRegEx.test(name.value)){
            name.classList.remove("border-danger");
            name.classList.add("border-success");
            incTxt.classList.add("d-none");
        }
        else{
            name.classList.remove("border-success");
            name.classList.add("border-danger");
            incTxt.classList.remove("d-none");
        }
        //if there is no value in the box, remove all errors
        if(!name.value){
            incTxt.classList.add("d-none");
            reqTxt.classList.add("invisible");
            name.classList.remove("border-success");
            name.classList.remove("border-danger");
        }
    })
    //end name field validation
}