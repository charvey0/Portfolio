

/*************************************************
                    DOM VARIABLES 
**************************************************/

var title = $("#title").html("Cameron Harvey");
//var navBar = $("#navbar");
var navBrand = $("#navBrand").html("Cameron Harvey");
var nav1 = $("#nav-link-1").html("Contact");
var nav2 = $("#nav-link-2").html("Projects");
var nav3 = $("#nav-link-3").html("About Me");
var display1 = $("#display1");
var display2 = $("#display2");
var display3 = $("#display3");
var main = $("#main");
//var footer = $("#footer");
//var copyright = $("#copyright");


/*************************************************
                    VARIABLES AND CONSTANTS
**************************************************/




/*************************************************
                    HELPER FUNCTIONS
**************************************************/
// INPUT: 
// OUTPUT: 
function sampleFunction(){
//  console.log("sampleFunction() called.");     /*
        // TODO: 
    
// */
    return true;    
}
    
    

/*************************************************
                    USER INTERACTION FUNCTIONS
**************************************************/
// DISPLAYS:
// WAITING FOR:
// NEXT:
function sampleState() {
//  console.log("function sampleState() called;");   /*    
        // TODO:

// */
}

// DISPLAYS: the opening screen
// WAITING FOR: user to push the "Begin" button
// NEXT: next()
function init() {
//  console.log("function init() called;");     /*    
    $(".nav-link").removeClass("active");
    nav1.addClass("active");
    display1.show();
    display2.hide();
    display3.hide();
//        next();
// */
}

/*************************************************
                    Nav Link Listeners
**************************************************/

nav1.on("click", function(e) {
     $(".nav-link").removeClass("active");
     display1.show();
     display2.hide();
     display3.hide();
     nav1.addClass("active");
});

nav2.on("click", function(e) {
    $(".nav-link").removeClass("active");
    display1.hide();
    display2.show();
    display3.hide();
    nav2.addClass("active");
});

nav3.on("click", function(e) {
    $(".nav-link").removeClass("active");
    display1.hide();
    display2.hide();
    display3.show();
    nav3.addClass("active");
});

navBrand.on("click", function(e) {
    init();
});