$(document).ready(function () {
    let mode = localStorage.getItem('darkMode');
    if(mode === "enabled"){
        enableDarkMode();
    }
    $(".theme-toggle-btn").click(function(){
        mode = localStorage.getItem('darkMode');
        if(mode !== "enabled"){
            enableDarkMode();
            localStorage.setItem('darkMode', "enabled");
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', null);
        }
    });
});


function enableDarkMode(){
    $("body").css("background-color", "#dfe0e4");
    $(".big-container").css("background-color", "#f6f6f6");
    $("p").css("color", "#343a40");
    $(".duration-date, .company-uni-link, h5").css("color", "black");
    $(".social-btn, .company-uni-link:hover").css("color", "#bf937e");
    $(".social-btn:hover").css({"color": "#bf937e", "border-color": "#bf937e"});
    $(".navbar").removeClass("navbar-dark, bg-dark").css("background-color", "#5c7482");

    $(".theme-toggle-btn").html("<i class=\"fas fa-moon\"></i> Dark Mode");

    $(".table").removeClass("table-dark");
    $(".table a").removeClass("view-proj-link");
    $("thead th").css("color", "black");
}

function disableDarkMode(){
    $("body").css("background-color", "#222222");
    $(".big-container").css("background-color", "#303030");
    $("p").css("color", "#fff");
    $(".duration-date, h5").css("color", "white");
    $("h1, h2,.company-uni-link:hover").css("color", "#bf937e");
    $(".social-btn, .company-uni-link").css("color", "#ece0b9");
    $(".social-btn:hover").css({"color": "#bf937e", "border-color": "#bf937e"});
    $(".navbar").addClass("navbar-dark, bg-dark")

    $(".theme-toggle-btn").html("<i class=\"fas fa-sun\"></i> Light Mode");

    $(".table").addClass("table-dark");
    $(".table a").addClass("view-proj-link");
    $("thead th").css("color", "#ece0b9");
}