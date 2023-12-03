//BIO TEMPLATE JS SADA JE VECINOM PROMENJEN  - zakomentatisan
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
    // new WOW().init();


    // Sticky Navbar 
    //  $(window).scroll(function () {
    //     if ($(this).scrollTop() > 300) {
    //         $('.sticky-top').addClass('shadow-sm').css('top', '0px');
    //     } else {
    //         $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
    //     }
    // });
    
    
    // Back to top button JQuery promeni kasnije
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 300) {
    //         $('.back-to-top').fadeIn('slow');
    //     } else {
    //         $('.back-to-top').fadeOut('slow');
    //     }
    // });
    // $('.back-to-top').click(function () {
    //     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    //     return false;
    // });


    // Facts counter JQuery promeni kasnije
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel karosel library owl
    // $(".header-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1500,
    //     items: 1,
    //     dots: true,
    //     loop: true,
    //     nav : true,
    //     navText : [
    //         '<i class="bi bi-chevron-left"></i>',
    //         '<i class="bi bi-chevron-right"></i>'
    //     ]
    // });


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


//jQUERY

//nakon sto se skrola malo dole doda se nav
$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $('#nav').addClass('show-nav');
    } else {
        $('#nav').removeClass('show-nav');
    }
});


//back to top dugme
$("#bck-top").click(function(){
    scroll({
            top: 0,
            left: 100,
            behavior: "smooth",
        });
});

//demo slider
var slide = document.querySelector(".slide");
console.log(slide)
$("#slidetoggle").click(function(){
    $(".slide").fadeOut();
});

let pics = ['img/carousel-1.jpg','img/carousel-2.jpg','img/carousel-3.jpg'];
var ijk = 1;
setInterval(function(){
    
    slide.src = pics[ijk++];
    if(ijk >= pics.length) ijk = 0; 
    console.log("set interval!");

},5000);













//DINAMICKI ISPIS

//objekti
// delay, fa-icon, broj, text 

//#region Objekti Za Dinamicki Ispis
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
        service: "Select a service *",
        isSelected: true
    },
    {
        value: "2",
        service: "Setups",
        isSelected: false
    },
    {
        value: "3",
        service: "Cable Menagment",
        isSelected: false
    },
    {
        value: "4",
        service: "System Optimization",
        isSelected: false
    }
];
var servicesObj = [
    {
        img: { 
            src: 'img/non-template-img/pc-repair.jpg',
            alt: 'pc repair image'
            },
        text:{
            caption: 'PC Repair Services',
            paragraph: 'ByteBlend excels in diagnosing and fixing PC issues, ensuring smooth operation with expert hardware and software solutions.',
            link: 'Reach out now!'
        }
    },
    {
        img: { 
            src: 'img/non-template-img/gpu.jpg',
            alt: 'gpu'
            },
        text:{
            caption: 'Hardware Components Sales',
            paragraph: 'Explore top-notch hardware components at ByteBlend, where quality meets expertise for your computing needs.',
            link: 'Coming Out Soon!'
        }
    },
    {
        img: { 
            src: 'img/non-template-img/pccase.jpg',
            alt: 'pccase'
            },
        text:{
            caption: 'Custom PC Assembly',
            paragraph: 'ByteBlend crafts tailored desktops, guaranteeing high performance with customized configurations.',
            link: 'Reach out now!'
        }
    },
    {
        img: { 
            src: 'img/non-template-img/software.jpg',
            alt: 'software'
            },
        text:{
            caption: 'Software Installation',
            paragraph: 'ByteBlend ensures seamless software setup and updates, optimizing your system for peak performance.',
            link: 'Reach out now!'
        }
    },
    {
        img: { 
            src: 'img/non-template-img/systemOpt.jpg',
            alt: 'systemOpt'
            },
        text:{
            caption: 'Software Optimization',
            paragraph: 'ByteBlend enhances system speed and efficiency through expert tuning and maintenance services.',
            link: 'Reach out now!'
        }
    },
    {
        img: { 
            src: 'img/non-template-img/network.jpg',
            alt: 'network'
            },
        text:{
            caption: 'Network Solutions',
            paragraph: 'ByteBlend delivers reliable wired and wireless network setups with troubleshooting and robust security measures.',
            link: 'Reach out now!'
        }
    },

];
var projectsObjs = [
    {
        img: {
            src: 'img/non-template-img/project-1.jpg', 
            alt:'First Project'
        },
        caption: 'Programming Setups',
        text: 'We take special care for programming rigs.'
    },
    {
        img: {
            src: 'img/non-template-img/project-2.jpg', 
            alt:'Second Project'
        },
        caption: 'Home setups',
        text: 'We make sure that you enjoy your everyday surfing.'
    },
    {
        img: {
            src: 'img/non-template-img/project-3.jpg', 
            alt:'Third Project'
        },
        caption: 'Server cable menagment',
        text: 'We are here to do even the dirty work!'
    },
    {
        img: {
            src: 'img/non-template-img/project-4.jpg', 
            alt:'Forth Project'
        },
        caption: 'System Optimization',
        text: 'If your PC is running poorly we are here to fix it.'
    },
    {
        img: {
            src: 'img/non-template-img/project-5.jpg', 
            alt:'Fifth Project'
        },
        caption: 'Gaming Setups',
        text: 'Who doesn`t like making gaming setups? We sure like it!'
    },
    {
        img: {
            src: 'img/non-template-img/project-6.jpg', 
            alt:'Sixth Project'
        },
        caption: 'User Experiance',
        text: 'We care about how you feel. '
    }
   
];
var teamObjs = [
    {
        img:{
            // src:'img/team-1.jpg',
            src:'img/non-template-img/josh.jpg',
            alt:'Josh'
        },
        link:{
            yt:{ link: 'https://www.youtube.com/watch?v=85hQhUMu0_M&ab_channel=10hoursofShitposting'},
            x: 'https://twitter.com',
            ig: 'https://www.instagram.com/'
        },
        name: 'Josh Hutcherson',
        proffesion: 'Actor/Musitian'
    },
    {
        img:{
            src:'img/team-2.jpg',
            // src:'img/non-template-img/srecko.jpg',

            alt:'Andreja'
        },
        link:{
            yt:{ link: 'https://www.youtube.com/watch?v=85hQhUMu0_M&ab_channel=10hoursofShitposting'},
            x: 'https://twitter.com',
            ig: 'https://www.instagram.com/'
        },
        name: 'Andreja Sreckovic',
        proffesion: 'Proffesional Class Skipper'
    },
    {
        img:{
            src:'img/team-3.jpg',
            // src:'img/team-3.jpg',
            alt:'Sanja'
        },
        link:{
            yt:{ link: 'https://www.youtube.com/watch?v=85hQhUMu0_M&ab_channel=10hoursofShitposting'},
            x: 'https://twitter.com',
            ig: 'https://www.instagram.com/'
        },
        name: 'Sanja Pavlovic',
        proffesion: 'Voli milanka'
    },
    {
        img:{
            src:'img/team-4.jpg',
            // src:'img/non-template-img/misa.jpg',
            alt:'Milos'
        },
        link:{
            yt:{ link: 'https://www.youtube.com/watch?v=85hQhUMu0_M&ab_channel=10hoursofShitposting'},
            x: 'https://twitter.com',
            ig: 'https://www.instagram.com/'
        },
        name: 'Milos Milinkovic',
        proffesion: 'Muffin Baker'
    }
];
//#endregion



//#region Dynamic ispis Team member
function makeTeamMember(member){

    return `<div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    <div class="team-item">
        <div class="overflow-hidden position-relative">
            <img class="img-fluid" src="${member.img.src}" alt="${member.img.alt}" />
            <div class="team-social">
                <a class="btn btn-square" href="${member.link.yt.link}" target="_blank"><i class="fab fa-youtube"></i></a>
                <a class="btn btn-square" href="${member.link.x}" target="_blank"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-square" href="${member.link.ig}" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        <div class="text-center border border-5 border-light border-top-0 p-4">
            <h5 class="mb-0">${member.name}</h5>
            <small>${member.proffesion}</small>
        </div>
    </div>
</div>`;
}

var teamHTML = '';
for(let member of teamObjs){
    teamHTML += makeTeamMember(member)
}
document.querySelector('#team-holder').innerHTML = teamHTML;

//#endregion

//#region dinamic ispis projects
function makeProject(project){
    return `<div class="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
    <div class="rounded overflow-hidden">
        <div class="position-relative overflow-hidden">
            <img class="img-fluid w-100" src="${project.img.src}" alt="${project.img.alt}" />
            <!-- <div class="portfolio-overlay">
                <a class="btn btn-square btn-outline-light mx-1" href="img/portfolio-6.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                <a class="btn btn-square btn-outline-light mx-1" href=""><i class="fa fa-link"></i></a>
            </div> -->
        </div>
        <div class="border border-5 border-light border-top-0 p-4">
            <p class="text-primary fw-medium mb-2">${project.caption}</p>
            <h5 class="lh-base mb-0">${project.text}</h5>
        </div>
    </div>
</div>`;
}
var projectHold = document.querySelector('#projects-holder');
var projectHTML = '';
for(let project of projectsObjs)
{

    projectHTML += makeProject(project);

}
projectHold.innerHTML = projectHTML;
//#endregion


//#region dinamic ispis services
function makeService(service)
{
    return `<div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div class="service-item">
                    <div class="overflow-hidden">
                        <img class="img-fluid"src="${service.img.src}" alt="${service.img.alt}" /></div><div class="p-4 text-center border border-5 border-light border-top-0"><h4 class="mb-3">${service.text.caption}</h4><p>${service.text.paragraph}</p>
                        <a class="fw-medium text-primary" href="#form-hold">${service.text.link}
                        <i class="fa fa-arrow-right ms-2 text-primary"></i></a>
                    </div>
                </div>
            </div>`
}

var serviceHTML = ``;
var serviceHolder = document.querySelector("#services-holder");
for(let service of servicesObj){
    serviceHTML += makeService(service);

}
console.log(serviceHolder);
serviceHolder.innerHTML = serviceHTML;

//#endregion

//#region dinamic ispis Featured
function makeFeature(feature)
{
    let featureHTML = `<div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s"><div class="d-flex align-items-center justify-content-evenly mb-2"><div class="d-flex align-items-center justify-content-center bg-light" style="width: 60px; height: 60px;"><i class="fa ${feature.icon} fa-2x text-primary"></i></div><h1 class="display-1 text-black-50 mb-0">${feature.number}</h1></div><h5 class = "text-center">${feature.text}</h5></div>`;
    return featureHTML;
}
var featureEl = document.querySelector("#dinamicFeatures");

if(featureEl)
{
    for(let feature of FeatureObjs)
    {
       featureEl.innerHTML += makeFeature(feature);
    }
}

//#endregion

//#region dynamic select ispis
var selectHolder = document.querySelector("#select-holder");

var smallSlct = document.createElement('small');
smallSlct.classList.add('form-text');
smallSlct.classList.add('text-danger');
smallSlct.setAttribute('id','field-service');



function createOption(opt){
    let option = document.createElement('option');
    if(opt.isSelected) option.setAttribute('selected', 'selected');
    option.setAttribute('value', `${opt.value}`);
    option.text = opt.service;
    return option;
}

var slctEl = document.createElement('select');
slctEl.classList.add('form-select');
slctEl.classList.add('form-height');
slctEl.setAttribute('id','selectForm');
selectHolder.appendChild(slctEl);
let arrayOption = new Array();
for (let opt of ddlFormObjs)
{
    arrayOption.push(createOption(opt));
}
for(let opt of arrayOption){

    slctEl.appendChild(opt);
}

selectHolder.appendChild(smallSlct);

//#endregion







//#region Ceo kod za Forme - Provera, ispis gresaka, provera za slanje na server(zaustavlja submit ako nije sve lepo uneto i izbaci greske u suprotnom podaci se salju na .php).



//Ako je empty printuj error u odgovarajuce small polje
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
    
    const nameRegEx = /^[A-Z][a-z]{1,10}$/;
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


     name.addEventListener("keyup", function()
     {
        if(!name.value)
        {    
            danger(name);
            error("This field is required",errorText.id);
        }
        else errorDisable(errorText.id);
        
        if(nameRegEx.test(name.value))
        {
            success(name);
            errorDisable(errorText.id);
        }
        // if(name.value && !nameRegEx.test(name.value)){
        //     danger(name);
        //     error("Enter a valid name",errorText.id);
        // }
     });
     


    name.addEventListener("blur", function(){
        if(!name.value){
            name.classList.remove("border-danger");
            name.classList.remove("border-success");
            errorDisable(errorText.id);
            // allErrors.emailErrors.push("This field is required");
            
        }
        // else if(!nameRegEx.test(name.value)){
        //     error("Example: Josh", errorText.id)
        //     // allErrors.emailErrors.push("Enter a valid email: username@domen.com");
        // }
        if(nameRegEx.test(name.value)){
            success(name);
            
            //do success code for blur name
        }
     });




     

        //email check for ui/ux
    const emailRegEx = /^[A-z0-9]{2,30}@(gmail|yahoo)\.(com|rs)$/;
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
        else errorDisable(errorTextMail.id);
        
        // if(emailRegEx.test(email.value))
        // {
        //     success(email);
        //     errorDisable(errorTextMail.id);
            

        // }
        // if(email.value && !emailRegEx.test(email.value)){
        //     danger(email);
        //     error("Enter a valid Email Adress",errorTextMail.id);
           

        // }      
     });
    email.addEventListener("blur", function(){
        if(!email.value){
            email.classList.remove("border-danger");
            email.classList.remove("border-success");
            errorDisable(errorTextMail.id);
            // allErrors.emailErrors.push("This field is required");
        }
        // if(!emailRegEx.test(email.value)){
            

        //     // allErrors.emailErrors.push("Please enter a valid name")
        // }
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
            
        }else  errorDisable(errorTextMob.id);
        if(mobRegex.test(mob.value))
        {
            success(mob);
            errorDisable(errorTextMob.id);
            
        }
        // if(mob.value && !mobRegex.test(mob.value)){
        //     danger(mob);
        //     error("Enter a valid Mobile Number",errorTextMob.id); 
            
        // }
     });

    mob.addEventListener("blur", function(){
        if(!mob.value){
            mob.classList.remove("border-danger");
            mob.classList.remove("border-success");
            errorDisable(errorTextMob.id);
            // allErrors.mobErrors.push("This field is required");
        }
        // if(!mobRegex.test(mob.value)){
        //     // danger(mob);
        //     // allErrors.mobErrors.push("Entar a valid mobile number");
            
        // }
        if(mobRegex.test(mob.value)){
            success(mob);
            errorDisable(errorTextMob.id);
            //do success code
        }

    });




        //Checking if smt selected from ddl
     var k = 0;
     let select = document.querySelector("#selectForm");
    
    select.addEventListener("change", function(){
        
        k = parseInt(select.options[select.selectedIndex].value);
        
        if(k != 0) {
            errorDisable(errorTextService.id);
            select.classList.remove("border-danger");
            select.classList.remove("border-success");
            success(select)
        }
        else danger(select)
        console.log(k);
         
     });
     select.addEventListener("blur", function(){

        if(k == 0) {
            select.classList.remove("border-danger");
            select.classList.remove("border-success");
        }
        console.log(k);

     });
     



        //should i subit or no? Also errors prinhting if not sending

            let form = document.querySelector("#form");
            // let errorTextService = querySelector("#field-service");
            let errorTextService = document.querySelector("#field-service");
            
            
        form.addEventListener("submit",validateForm);
        function validateForm(event)
        {
            
            event.preventDefault();
            if(nameRegEx.test(name.value) && mobRegex.test(mob.value) && emailRegEx.test(email.value) && k != 0){
                form.submit();
            }
            if(!nameRegEx.test(name.value)) 
            {
                error(`Enter a valid name: "Josh"`,errorText.id);
                // scroll({
                //     top: 4900,
                //     left: 100,
                //     behavior: "auto",
                //   });

            }
            if(!emailRegEx.test(email.value))    {
                error(`Invalid email: "username@gmail.com"`,errorTextMail.id);
                // scroll({
                //     top: 4900,
                //     left: 100,
                //     behavior: "auto",
                //   });
            }
            if(!mobRegex.test(mob.value))        
            {
                error(`Invalid mobile number: "0641234567"`,errorTextMob.id);
            // scroll({
            //     top: 4900,
            //     left: 100,
            //     behavior: "auto",
            //   });
            }

            if(k == 0)                          
            {
                error(`Please select a service"`,errorTextService.id);
            //     scroll({
            //     top: 4900,
            //     left: 100,
            //     behavior: "auto",
            //   });
            }
        }
        



}
//#endregion



//#region  Metode Za Rad Sa Formom
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
//#endregion