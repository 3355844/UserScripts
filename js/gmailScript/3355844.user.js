// ==UserScript==
// @name 3355844
// @description first WACh script
// @author Ponomarenko A.M.
// @license SomeOne
// @version 3.0.16
// @include https://mail.google.com/mail/u/0/
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==
'use strict';
$(document).ready(function () {
    var tr_classes = document.getElementsByClassName('zA');
    var count = 1;
    for (var i = 0; i < tr_classes.length; i++) {
        if (count === 3) {
            // tr_classes[i].style.display = 'none';
            tr_classes[i].innerHTML = '<a>Julia</a>';
            count = 0;
        }
        count++;
    }
    var write_button = document.getElementsByClassName('T-I-KE');
    if (write_button[0] !== undefined ) {
        for (var i = 0; i < write_button.length; i++) {
            write_button[i].style.backgroundColor = '#7FFF00';
            write_button[i].style.backgroundImage = 'none';
        }
    }
});

/*
* Script : for change every 3-d letter in Gmail or hide
* and chang color 'Write' button
* */