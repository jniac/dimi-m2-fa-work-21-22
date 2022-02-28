            let parallax = function () {
          
            let sun = document.getElementById('sun');
            let mountain = document.getElementById('mountain');
            let stars = document.getElementById('stars');
            let text = document.getElementById('text');
            
            window.addEventListener('scroll', function(){
              let value = window.scrollY;
              stars.style.left = value * 0.25 + 'px';
              sun.style.top = value * 1.05 + 'px';
              mountain.style.top = value * 0.05 + 'px';
              text.style.left = value * 1 + 'px'; }
            );
            };

            parallax() ;
           