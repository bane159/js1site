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
var ddlFormObjs = [
    {
        value: "0",
        service: "Select a service",
        isSelected: true
    },
    {
        value: "2",
        service: "Service 1",
        isSelected: false
    },
    {
        value: "3",
        service: "Service 2",
        isSelected: false
    },
    {
        value: "4",
        service: "Service 3",
        isSelected: false
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

function makeFeature(feature)
{
    let featureHTML = `<div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s"><div class="d-flex align-items-center justify-content-evenly mb-2"><div class="d-flex align-items-center justify-content-center bg-light" style="width: 60px; height: 60px;"><i class="fa ${feature.icon} fa-2x text-primary"></i></div><h1 class="display-1 text-black-50 mb-0">${feature.number}</h1></div><h5 class = "text-center">${feature.text}</h5></div>`;
    return featureHTML;
}
var featureEl = document.querySelector("#dinamicFeatures");
console.log(featureEl);
if(featureEl)
{
    for(let feature of FeatureObjs)
    {
       featureEl.innerHTML += makeFeature(feature);
    }
}

//dynamic select ispis
                                    // <select class="form-select form-height">
                                    //     <option selected value="0">Select A Service</option>
                                    //     <option value="1">Service 1</option>
                                    //     <option value="2">Service 2</option>
                                    //     <option value="3">Service 3</option>
                                    // </select>


function ddlFormMaker(ddl)
{
    return `<option ${ddl.isSelected ? "selected = 'selected'" : ""} value="${ddl.value}">${ddl.service}</option>`;
}
let ddlhtml = `<select class="form-select form-height" id = "selectForm">`;
for(ddl of ddlFormObjs)
{
    ddlhtml += ddlFormMaker(ddl);
}
document.querySelector("#select-holder").innerHTML = ddlhtml;

let select = document.querySelector("#selectForm");
var k = select.options[select.selectedIndex];
console.log(k);
select.addEventListener("change", function(){
    k = select.options[select.selectedIndex];
    console.log(k);
    
})
var allErrors = {
    nameErrors: [],
    emailErrors: [],
    mobErrors: []
}
var errorNameCounter = 0;
// form validation before hitting the submit button




//#region variables

    




//#endregion

// function uradiNesto(event){
//     if(!this.value)
//     {
//         if (this. = "name-input"){
//             errorText.classList.remove("invisible")
//             error("This field is required",errorText.id);
//         }
//     }
// }
function isEmpty(){
    if(!this.value){
        error("This field is required", `field-${this.id}`)
    }
}

    
window.onload = function()
{
    // postavi focus dogadjaj na svaki element forme (text(ime), email i mobile(text))
    var elementi = document.getElementsByTagName("input");
    for(let el of elementi){
        if(el.getAttribute("type") == "text" || el.getAttribute("type") == "email")
            el.addEventListener("focus", isEmpty);
    }
    
    const nameRegEx = /^[A-Z][a-z]{1,}$/;
    let name = document.querySelector("#name");
    let errorText = document.querySelector("#field-name");
    

    //name check of ui/ux
    
    // name.addEventListener("focus", function(){
    //  if(!name.value){
    //         // errorText.classList.remove("invisible")
    //         error("This field is required",errorText.id);
    //     }
    //  });
    // name.addEventListener("focus", isEmpty);


    //  name.addEventListener("keyup", function()
    //  {
    //     if(!name.value)
    //     {    
    //         danger(name);
    //         error("This field is required",errorText.id);
    //     }
    //     if(nameRegEx.test(name.value))
    //     {
    //         success(name);
    //         errorDisable(errorText.id);
    //     }
    //     if(name.value && !nameRegEx.test(name.value)){
    //         danger(name);
    //         error("Enter a valid name",errorText.id);
    //     }
    //  });
     


    name.addEventListener("blur", function(){
        if(!name.value){
            name.classList.remove("border-danger");
            name.classList.remove("border-success");
            errorDisable(errorText.id);
            // allErrors.emailErrors.push("This field is required");
            
        }
        if(!nameRegEx.test(name.value)){
            error("Name must be first uppercase")
            // allErrors.emailErrors.push("Enter a valid email: username@domen.com");
           
        }

        if(nameRegEx.test(name.value)){
            success(name);
            
            //do success code for blur name
        }
     });






        //email check for ui/ux
    const emailRegEx = /^[a-z]{2,}\.[a-z]{2,}\.[1-9][0-9]{0,3}\.([1][0-9]|[2][0123])(@ict\.edu\.rs)$/;
    let email = document.querySelector("#email");
    let errorTextMail = document.querySelector("#field-email");
    // email.addEventListener("focus", function(){
    //     if(!email.value){
    //         // errorTextMail.classList.remove("invisible")
    //         error("This field is required",errorTextMail.id);
            
    //     }
    //  });
     email.addEventListener("keyup", function()
     {
        if(!email.value)
        {    
            danger(email);
            error("This field is required",errorTextMail.id);
        }
        
        if(emailRegEx.test(email.value))
        {
            success(email);
            errorDisable(errorTextMail.id);
            

        }
        if(email.value && !emailRegEx.test(email.value)){
            danger(email);
            error("Enter a valid Email Adress",errorTextMail.id);
           

        }      
     });
    email.addEventListener("blur", function(){
        if(!email.value){
            email.classList.remove("border-danger");
            email.classList.remove("border-success");
            errorDisable(errorTextMail.id);
            // allErrors.emailErrors.push("This field is required");
        }
        if(!emailRegEx.test(email.value)){
            

            // allErrors.emailErrors.push("Please enter a valid name")
        }
        if(emailRegEx.test(email.value)){
            success(email);
            

            //do success code for blur email
        }
     });



    //mobile check
    const mobRegex = /^[0-9]{9,10}$/;
    let mob = document.querySelector("#mobile");
    let errorTextMob = document.querySelector("#field-mobile");
    // mob.addEventListener("focus",function(){
    //     if(!mob.value){
    //         error("This field is required", errorTextMob.id);
            
    //     }
    // });
    // mob.addEventListener("focus",isEmpty);
    mob.addEventListener("keyup", function()
     {
        if(!mob.value)
        {    
            danger(mob);
            error("This field is required",errorTextMob.id);
            
        }
        if(mobRegex.test(mob.value))
        {
            success(mob);
            errorDisable(errorTextMob.id);
            
        }
        if(mob.value && !mobRegex.test(mob.value)){
            danger(mob);
            error("Enter a valid Mobile Number",errorTextMob.id); 
            
        }
     });

    mob.addEventListener("blur", function(){
        if(!mob.value){
            mob.classList.remove("border-danger");
            mob.classList.remove("border-success");
            errorDisable(errorTextMob.id);
            // allErrors.mobErrors.push("This field is required");
        }
        if(!mobRegex.test(mob.value)){
            // danger(mob);
            // allErrors.mobErrors.push("Entar a valid mobile number");
            
        }
        if(mobRegex.test(mob.value)){
            success(mob);
            
            //do success code
        }

     });

     let form = document.querySelector("#form");
        
        form.addEventListener("submit",validateForm);
        function validateForm(event){
            console.log(email)
            event.preventDefault();
            if(nameRegEx.test(name.value)){
                form.submit();
            }
        }
        



}

// let form = document.querySelector("#form");

//         form.addEventListener("submit",validateForm);
//         function validateForm(event){
            
//             event.preventDefault();
//             if(nameRegEx.test(name.value)){
//                 form.submit();
//             }
//         }

// form.onsubmit = function() {

//     let name = document.querySelector("#name-input");
//     let email = document.querySelector("#email-input");
//     let mob = document.querySelector("#mobile-input");
//     if(!nameRegEx.test(name.value) || !emailRegEx.test(email.value) || !mobRegex.test(mob.value)) 
//         return false;
// }

































function danger(element)
{
    element.classList.remove("border-success");
    element.classList.add("border-danger");
}
function success(element)
{
    element.classList.remove("border-danger");
    element.classList.add("border-success");
}
function error(i,element){
    document.querySelector("#" + element.toString()).innerHTML = i;
    document.querySelector("#" + element.toString()).classList.remove("invisible");
}
function errorDisable(element){
    document.querySelector("#" + element.toString()).classList.add("invisible");
}
