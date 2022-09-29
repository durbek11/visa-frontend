new WOW().init();

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 3000) {
            $(`.navbar`).addClass(`sticky`);
        } else {
            $(`.navbar`).removeClass(`sticky`);
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });
    $(".scroll-up-btn").click(function () {
        $('html').animate({ scrollTop: 0 });
    })

    $(`.scroll-btn`).click(function () {
        $('html').animate({ scrollTop: 0 })
    });
    //toog;r navbar
    $(`.menu-btn`).click(function () {
        $(`.navbar`).toggleClass(`active`);
        $(`.menu-btn i`).toggleClass(`active`);
    });
});





var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}


function card1(x) {
    x = document.getElementById(`act-line`).style.left = `0`;
    x = document.getElementById(`act2-line`).style.top = `0`;
}

function card2(x) {
    x = document.getElementById(`act-line`).style.left = `25%`;
    x = document.getElementById(`act2-line`).style.top = `20%`;
}

function card3(x) {
    x = document.getElementById(`act-line`).style.left = `48%`;
    x = document.getElementById(`act2-line`).style.top = `40%`;
}

function card4(x) {
    x = document.getElementById(`act-line`).style.left = `67%`
    x = document.getElementById(`act-line`).style.width = `17%`;
    x = document.getElementById(`act2-line`).style.top = `55%`;
}

function card5(x) {
    x = document.getElementById(`act-line`).style.left = `83%`;
    x = document.getElementById(`act-line`).style.width = `17%`;
    x = document.getElementById(`act2-line`).style.top = `70%`;
}