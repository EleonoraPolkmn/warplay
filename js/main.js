const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: true
  });



  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    
    class Scroll {

      constructor({element, top, unit}) {
        if(typeof element == 'string') {
            this.el = document.querySelector(element)
        }else if(element instanceof HTMLElement) {
            this.el = element
        } 
        this.el.style.position = 'fixed';
        this.range = top;
        this.unit = unit;
        this.el.style.top = this.scrollUnit() + 'px';
        
        window.addEventListener('scroll', () => this.move())
        window.addEventListener('resize', () => this.move())
      }
    
      move() {
        // scrollY - берет нам расстояние  сверху до нашего скрола
        
        this.scrollValue = this.scrollUnit();
        
        if(this.scrollValue - scrollY > 0) {
            this.el.style.top = this.scrollValue - scrollY + 'px'
        }else {
            this.el.style.top = 0;
        }
    }
    scrollUnit() {
        if(this.unit == 'px') {
            return this.range >= 0 ? this.range : 0;
        }else if(this.unit == '%' || this.unit == undefined) {
            //this.el.style.position = 'static';
            
            return this.calc(window.innerHeight, this.range) - this.el.clientHeight;
        }
    }
    calc(height, range) {
        return height / 100 * range
    }
    
    }
    
    
    let myScroll = new Scroll({
      element: '.menu',
      top: 100,
      unit: '%'
    })

  })
