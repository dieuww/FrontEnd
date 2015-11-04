/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true,
white: true*/

var radioClick = document.querySelectorAll('form > fieldset > label > input[type="radio"]');
for(var i = 0; i < radioClick.length; i++) {
    radioClick[i].onclick = function() {
        //Verwijder de .showfield class van alle fieldsets
        [].forEach.call(document.querySelectorAll('fieldset'), function(elem) {
            elem.classList.remove('showfield');
        });

        //voeg de class .showfield toe aan de gewenste fieldset
        document.querySelector('fieldset[id="'+ this.id +'"]').classList.add('showfield');
    };
}
 i
