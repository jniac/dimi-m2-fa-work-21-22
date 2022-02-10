// SMOOTH SCROLLING SECTIONS
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

/*Bienvenue*/
select = e => document.querySelector(e);
selectAll = e => document.querySelectorAll(e);

const style = getComputedStyle(document.body)
const stage = select('.stage');
const weightTarget = 400;
const stretchTarget = 80;
const body = document.body;

//paramètre split text
let mySplitText = new SplitText('.txt', {type:"chars", charsClass:"char", position: "relative" }); 
let chars = selectAll('.char');
let txt = select('.txt');

function init() {
    gsap.set(stage, { autoAlpha: 1 });
    gsap.set(chars, {
        transformOrigin: 'center bottom'
    })
    animInTxt();
}

function animInTxt() {
    let elem = document.querySelector('.char');
    let rect = elem.getBoundingClientRect();
    //parametre gsap
    gsap.from(chars, {
        y: ()=> {
            return -1*(rect.y + 500);
        },
        fontWeight: weightTarget,
        fontStretch: stretchTarget,
        scaleY: 2,
        ease: "elastic(0.2, 0.1)",
        duration: 1.5,
        delay: 0.5,
        stagger: {
            each: 0.05,
            from: 'random'
        },
    })
}

$(window).scroll(function() {
    var $window = $(window),
        $body = $('.section1'),
        $panel = $('.color-pin');
    
    var scroll = $window.scrollTop() + ($window.height() / 3);
    $panel.each(function (){
        var $this = $(this);
        if($this.position().top <= scroll &&
        $this.position().top + $this.height() > scroll) {
            $body.removeClass(function (index, css) {
                return (css.match (/(^|\s)color-\S+/g) ||
                []).join('');
            });
            $body.addClass('color-' + $(this).data('color'));
        }
    });
}); scroll();

function colorChange() {
    var $texte = $('.mycolor-txt'),
        $change = $('.change');
    
        $change.click(function(){
            var $this = $(this);
            $texte.css('color', $this.data('code'));
            navigator.clipboard.writeText($this.data('code'));
            setTimeout(function(){
                $texte.css('color', 'white'); }, 800);
        })
}

window.onload = () => {
    init();
};

/*mon taf*/
let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax-title');

const scrollInProgress = () => {
    didScroll = true
}

const raf = () => {
    if(didScroll) {
        paralaxTitles.forEach((element, index) => {
            element.style.transform = "translateX("+ window.scrollY / 10 + "%)"
        })
        didScroll = false;
    }
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)

function getRandomColor() {
    var letters = '0123456789ABCDEF',
        color1 = '#',
        color2 = '#',
        color3 = '#',
        color4 = '#',
        color5 = '#',
        color6 = '#',
        card1 = $(".card1");
        card2 = $(".card2");
        card3 = $(".card3");
        card4 = $(".card4");
        card5 = $(".card5");
        card6 = $(".card6");
        change1 = document.querySelector(".change1");
        change2 = document.querySelector(".change2");
        change3 = document.querySelector(".change3");
        change4 = document.querySelector(".change4");
        change5 = document.querySelector(".change5");
        change6 = document.querySelector(".change6");
    for (var i = 0; i < 6; i++) {
        color1 += letters[Math.floor(Math.random() * 16)];
        card1.css("background-color", color1);
        change1.dataset.code = color1;
        card1.html(color1);
        document.querySelector(":root").style.setProperty('--color-pink', color1);
    }
    for (var i = 0; i < 6; i++) {
        color2 += letters[Math.floor(Math.random() * 16)];
        card2.css("background-color", color2);
        change2.dataset.code = color2;
        card2.html(color2);
        document.querySelector(":root").style.setProperty('--color-light-pink', color2)
    }
    for (var i = 0; i < 6; i++) {
        color3 += letters[Math.floor(Math.random() * 16)];
        card3.css("background-color", color3);
        change3.dataset.code = color3;
        card3.html(color3);
        document.querySelector(":root").style.setProperty('--color-orange', color3)
    }
    for (var i = 0; i < 6; i++) {
        color4 += letters[Math.floor(Math.random() * 16)];
        card4.css("background-color", color4);
        change4.dataset.code = color4;
        card4.html(color4);
        document.querySelector(":root").style.setProperty('--color-yellow', color4)
    }
    for (var i = 0; i < 6; i++) {
        color5 += letters[Math.floor(Math.random() * 16)];
        card5.css("background-color", color5);
        change5.dataset.code = color5;
        card5.html(color5);
        document.querySelector(":root").style.setProperty('--color-green', color5)
    }
    for (var i = 0; i < 6; i++) {
        color6 += letters[Math.floor(Math.random() * 16)];
        card6.css("background-color", color6);
        change6.dataset.code = color6;
        card6.html(color6);
        document.querySelector(":root").style.setProperty('--color-puple', color6)
    }
  }