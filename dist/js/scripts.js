/*!
 * Start Bootstrap - SB Admin v6.0.0 (https://startbootstrap.com/templates/sb-admin)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-sb-admin/blob/master/LICENSE)
 */
(function($) {
    "use strict";

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
        if (this.href === path) {
            $(this).addClass("active");
        }
    });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
})(jQuery);




// Matt's Js


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}




$(document).ready(function() {
    $('.js-example-basic-multiple').select2();
});





$(document).ready(function() {
    $("#deleteBtn3").click(function() {
        $("#user1").remove();
    });
});




$(document).ready(function() {
    $('#filter').hide();
    $('#btnFilter').click(function() {
        $('#filter').toggle();
    });
});


function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
});

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function time() {
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();

    mm = checkTime(mm);
    ss = checkTime(ss);
    document.getElementById('datebtn').innerHTML = hh + "h" + mm;
}


function myFunction() {
    document.getElementById('addBranch').innerHTML = '';
}

$(document).ready(function() {
    $("#deleteBtn2").click(function() {
        $("#empresa1").remove();
    });
});