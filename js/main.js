var navtop = document.querySelector('.nav-top');

var $btnShowHide1 = $('.btn-show-hide1');
var $box1 = $('.box1');

var $btnShowHide2 = $('.btn-show-hide2');
var $box2 = $('.box2');

var $btnShowHide3 = $('.btn-show-hide3');
var $box3 = $('.box3');

var $btnShowHide4 = $('.btn-show-hide4');
var $box4 = $('.box4');


document.querySelector('.nav-btn').addEventListener('click', function (e) {
    e.preventDefault();
    if (navtop.getAttribute('data-state') == 'expanded') {
    navtop.setAttribute('data-state', 'collapsed');
    this.setAttribute('data-state', 'inactive');
  } else {
    navtop.setAttribute('data-state', 'expanded');
    this.setAttribute('data-state', 'active');
  }
});

$btnShowHide1.on('click', function () {
    $box1.toggleClass('js-box-expand1');
});

$btnShowHide2.on('click', function () {
    $box2.toggleClass('js-box-expand2');
});


$btnShowHide3.on('click', function () {
    $box3.toggleClass('js-box-expand3');
});

$btnShowHide4.on('click', function () {
    $box4.toggleClass('js-box-expand3');
});

$.localScroll({
  target: '.page'
});

var $flash = $('.Camera');

$flash.waypoint(function (direction){ // two equals signs = soft compare and three equal signs is hard compare
  
  if (direction == 'down'){
    $flash.addClass('js-active');
} else {
    $flash.removeClass('js-active');
}
 
console.log('Here');
}, {offset: '60%', context: '.page'});