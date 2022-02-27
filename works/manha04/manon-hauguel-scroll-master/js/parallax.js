let clouds = document.getElementById("clouds");
let sun = document.getElementById("sun");
let moutains3 = document.getElementById("moutains3");
let moutains2 = document.getElementById("moutains2");
let moutains1 = document.getElementById("moutains1");

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    sun.style.left = -value *-0.3 + 'px';
    clouds.style.right = value *0.3 + 'px';
    moutains3.style.bottom = value * -0.02 + 'px';
    moutains2.style.bottom = value * -0.02 + 'px';
    moutains1.style.top = value * 0.2 + 'px';
})

