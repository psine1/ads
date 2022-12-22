
//PRELOAD DE IMG
this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
//ACA HAY QUE CARGAR LAS IMAGENES QUE SE USEN
var imageArray = new Array( "images/frame.png");

function preloadImages(e) {
    for (var i = 0; i < imageArray.length; i++) {
        var tempImage = new Image();
        tempImage.addEventListener("load", trackProgress, true);
        tempImage.src = imageArray[i];
    }
}

function trackProgress() {
    loadedImages++;
    if (loadedImages == imageArray.length) {
        imagesLoaded();
    }
}

function imagesLoaded() {
    
    document.getElementById('loader-container').style.display = 'none';
    document.getElementById('banner_content').style.display = 'block';
    

    initHandlers();
    initAnimations();

}

/* PARA DETECTAR SI ES IOs */
var is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (is_Mac == true || iOS == true) {
     
}



/* PARA DETECTAR SI ES IE */
if(navigator.userAgent.indexOf('MSIE')!==-1
|| navigator.appVersion.indexOf('Trident/') > 0){
  
}


// VARIABLES GLOBALES
var bars = document.querySelectorAll(".barWav");

    var tl_Global = gsap.timeline();
    tl_Global
    .add(fr0(), 0)
    .add(fr1(), 2)
 //   .add(fr4(), 12)    
    ;

function fr0(){
    var tl_fr0 = gsap.timeline();
    tl_fr0
        .set(".posLat", {y: -100}, 0)            
        .from("[id*='txt-1-']", {duration: 1, y: 10, autoAlpha: 0, stagger: 0.2, ease: "power3.out"}, 0)
        .from("[id*='prod-1']", {duration: 1, autoAlpha: 0, scale: 1.2, ease: "power3.out"}, 0.3)
        ;
    return tl_fr0  
    } 


function fr1(){
    var tl_fr1 = gsap.timeline();
    tl_fr1
        .to("[id*='prod-1'], [id*='txt-1']", {duration: 1, autoAlpha: 0, ease: "power3.out"}, 0)    
        .from("[id*='txt-2-']", {duration: 1, y: 10, autoAlpha: 0, stagger: 0.2, ease: "power3.out"}, 0.7)
        .from("#btn-1", {duration: 1, autoAlpha: 0, scale: 0.5, ease: "power3.out"}, 1.2)        
        .from("#btn-2", {duration: 1, autoAlpha: 0, scale: 0.5, ease: "power3.out"}, 1.3)        
        .from("#btn-3", {duration: 1, autoAlpha: 0, scale: 0.5, ease: "power3.out"}, 1.4)        
        .from("#btn-4", {duration: 1, autoAlpha: 0, scale: 0.5, ease: "power3.out"}, 1.5)                                
        ;
    return tl_fr1  
    }   

    var tl_correct = gsap.timeline({paused: true});
    tl_correct
        .to("#btn-4", {duration: 0.5, backgroundColor: "#1b6cb5", cursor:"default"}, 0)            
        .to("#btn-1, #btn-2, #btn-3, #btn-4", {duration: 0.7, autoAlpha: 0, ease: "power3.out"}, 0)
        .from("#correct", {duration: 0.7, autoAlpha: 0, scale: 1.2, ease: "power3.out"}, 0.5)
        .to("#prod-1", {duration: 0.7, autoAlpha: 1, scale: 1.05, ease: "power3.out"}, 0.5)        
        .from("[id*='confettiCanvas']", {duration: 1, autoAlpha: 0, scale: 0, ease: "power3.out"}, 0.8)

        .to("#correct", {duration: 0.7, autoAlpha: 0, scale: 0.5, ease: "power3.out"}, 2.5)
        .from("#txt-correct", {duration: 0.7, autoAlpha: 0,  ease: "power3.out"}, 2.7)
        .to("[id*='txt-2']", {duration: 0.7, autoAlpha: 0,  ease: "power3.out"}, 2.5)

        .set("[id*='prod-']", {zIndex: 999999})  

        .to("[id*='txt-1']", {duration: 0.01, autoAlpha: 0, scale: 0.7, x: -50, y: -18, ease: "power3.out"}, 2.5)  

        .to("#prod-1", {duration: 0.7, autoAlpha: 1, scale: 0.85, y: -100, x: 100, ease: "power3.out"}, 2.5)        
        .from("#prod-2", {duration: 1, autoAlpha: 0, x: 100, ease: "power3.out"}, 3)
        .from("#prod-3", {duration: 1, autoAlpha: 0, x: -100, ease: "power3.out"}, 3)
        .to("[id*='txt-1']", {duration: 1, autoAlpha: 1, ease: "power3.out"}, 3)  

        .to("[id*='confettiCanvas']", {duration: 1, autoAlpha: 0, ease: "power3.out"}, 3.5)


        .fromTo("#btn-learnMore", {autoAlpha: 0, scale: 0.6}, {duration: 0.7, autoAlpha: 1, scale: 1,  ease: "power3.out"}, 2.8)
        .fromTo("#btn-playAgain", {autoAlpha: 0, scale: 0.6}, {duration: 0.7, autoAlpha: 1, scale: 1,  ease: "power3.out"}, 3)
        ;


    var tl_incorrect = gsap.timeline({paused: true});
    tl_incorrect
        .to("#btn-1, #btn-2, #btn-3, #btn-4", {duration: 0.7, autoAlpha: 0, ease: "power3.out"}, 0)
        .from("#inCorrect", {duration: 0.7, autoAlpha: 0, scale: 1.2, ease: "power3.out"}, 0.5)
        .to("[id*='txt-2']", {duration: 0.7, autoAlpha: 0,  ease: "power3.out"}, 0)


        .fromTo("#btn-learnMore", {autoAlpha: 0, scale: 0.6}, {duration: 0.7, autoAlpha: 1, scale: 1,  ease: "power3.out"}, 0.7)
        .fromTo("#btn-playAgain", {autoAlpha: 0, scale: 0.6}, {duration: 0.7, autoAlpha: 1, scale: 1,  ease: "power3.out"}, 0.9)
        ;        
           
        

for (let i = 0; i < bars.length; i++) {
  var tl_wav = gsap.timeline({delay: i * 0.1, repeat: -1});
  tl_wav.to(bars[i], {duration: 0.5, scaleY: 0.5, repeat: -1, yoyo: true, ease: "power1.out"}, randomNumb());
}        

function randomNumb() {
    return Math.random()*(0.8)-0.2
}



function initAnimations(){
    tl_Global.timeScale(1); 



}


//HANDLERS
function initHandlers() {

var clicktag = document.getElementById('clickTag');
var btn_1 = document.getElementById('btn-1');
var btn_2 = document.getElementById('btn-2');
var btn_3 = document.getElementById('btn-3');
var btn_4 = document.getElementById('btn-4');
var btn_1 = document.getElementById('btn-1');
var btn_2 = document.getElementById('btn-2');
var btn_3 = document.getElementById('btn-3');

var btn_learnMore = document.getElementById('btn-learnMore');
var btn_playAgain = document.getElementById('btn-playAgain');

    clicktag.addEventListener('mouseup', function(event) {                 
        window.open(window.clickTag,'_blank');                  
    });

    btn_learnMore.addEventListener('mouseup', function(event) {                 
        window.open(window.clickTag,'_blank');                  
    });    

  btn_1.addEventListener('mouseenter', function (e) {
      a.enter("#btn-1", "#eeeeee");
  });

  btn_1.addEventListener('mouseleave', function (e) {
      a.leave("#btn-1", "#ffffff");
  });

  btn_2.addEventListener('mouseenter', function (e) {
      a.enter("#btn-2", "#eeeeee");
  });

  btn_2.addEventListener('mouseleave', function (e) {
      a.leave("#btn-2", "#ffffff");
  });  

  btn_3.addEventListener('mouseenter', function (e) {
      a.enter("#btn-3", "#eeeeee");
  });

  btn_3.addEventListener('mouseleave', function (e) {
      a.leave("#btn-3", "#ffffff");
  });    

  btn_4.addEventListener('mouseenter', function (e) {
      a.enter("#btn-4", "#eeeeee");
  });

  btn_4.addEventListener('mouseleave', function (e) {
      a.leave("#btn-4", "#ffffff");
  });    


  /**/
  btn_learnMore.addEventListener('mouseenter', function (e) {
      a.enter("#btn-learnMore", "#31712b");
      console.log("hola");
  });

  btn_learnMore.addEventListener('mouseleave', function (e) {
      a.leave("#btn-learnMore", "#419639");
  });  


  btn_playAgain.addEventListener('mouseenter', function (e) {
      a.enter("#btn-playAgain", "#eeeeee");
  });

  btn_playAgain.addEventListener('mouseleave', function (e) {
      a.leave("#btn-playAgain", "#ffffff");
  }); 

  /**/


  btn_4.addEventListener('mouseup', function (e) {
      tl_correct.restart();
      $('#btn-4').html('<img src="images/btn-4-correct.png">');
  });

  btn_1.addEventListener('mouseup', function (e) {
      tl_incorrect.restart();
  });

  btn_2.addEventListener('mouseup', function (e) {
      tl_incorrect.restart();
  });

  btn_3.addEventListener('mouseup', function (e) {
      tl_incorrect.restart();
  });      



  btn_playAgain.addEventListener('mouseup', function (e) {
      tl_Global.pause(5);
      tl_correct.pause(0);
      tl_incorrect.pause(0);
      $('#btn-4').html('<img src="images/btn-4.png">');
  });        



function hover(elem, color){
      var tl_hover = gsap.timeline({ paused:false,
        defaults: { duration: 0.5, ease: 'easeInOut' }, });
      tl_hover
      .to(elem, {duration: 0.5, backgroundColor: color, scale: 1.03, rotation: 0.1, ease: "power3.out"}, 0)
return tl_hover;
}

function out(elem, color){
      var tl_out = gsap.timeline({ paused:false,
        defaults: { duration: 0.5, ease: 'easeInOut' }, });
      tl_out
      .to(elem, {duration: 0.5, backgroundColor: color, scale: 1, rotation: 0, ease: "power3.out"}, 0)
return tl_out;
}


  var a = {
    enter: function (elem, color) {
    var tl_hover = hover(elem, color);
    },
    leave: function (elem, color) {
    var tl_out = out(elem, color);
    },
  };






}






(function () {
    // globals
    var canvas;
    var ctx;
    var canvas2;
    var ctx2;
    var W;
    var H;
    var mp = 40; //max particles
    var particles = [];
    var angle = 0;
    var tiltAngle = 0;
    var confettiActive = true;
    var animationComplete = true;
    var deactivationTimerHandler;
    var reactivationTimerHandler;
    var animationHandler;

    // objects

    var particleColors = {
        colorOptions: ["#94badc", "#b3cee6", "#cedfef", "#4688c3", "#508ec6", "#8cb5da"],
        colorIndex: 0,
        colorIncrementer: 0,
        colorThreshold: 10,
        getColor: function () {
            if (this.colorIncrementer >= 10) {
                this.colorIncrementer = 0;
                this.colorIndex++;
                if (this.colorIndex >= this.colorOptions.length) {
                    this.colorIndex = 0;
                }
            }
            this.colorIncrementer++;
            return this.colorOptions[this.colorIndex];
        }
    }

    function confettiParticle(color) {
        this.x = Math.random() * W; // x-coordinate
        this.y = (Math.random() * H) - H; //y-coordinate
        this.r = RandomFromTo(10, 30); //radius;
        this.d = (Math.random() * mp) + 4; //density;
        this.color = color;
        this.tilt = Math.floor(Math.random() * 10) - 10;
        this.tiltAngleIncremental = (Math.random() * 0.07) + .05;
        this.tiltAngle = 0;

        this.draw = function () {
            ctx.beginPath();
            ctx.lineWidth = this.r / 2;
            ctx.strokeStyle = this.color;
            ctx.moveTo(this.x + this.tilt + (this.r / 4), this.y);
            ctx.lineTo(this.x + this.tilt, this.y + this.tilt + (this.r / 4));
          
            ctx2.beginPath();
            ctx2.lineWidth = this.r / 2;
            ctx2.strokeStyle = this.color;
            ctx2.moveTo(this.x + this.tilt + (this.r / 4), this.y);
            ctx2.lineTo(this.x + this.tilt, this.y + this.tilt + (this.r / 4));
          
            return ctx.stroke(), ctx2.stroke();

        }
        
        /*
        this.draw = function () {
            ctx2.beginPath();
            ctx2.lineWidth = this.r / 2;
            ctx2.strokeStyle = this.color;
            ctx2.moveTo(this.x + this.tilt + (this.r / 4), this.y);
            ctx2.lineTo(this.x + this.tilt, this.y + this.tilt + (this.r / 4));
            return ctx2.stroke();
        }
        
        */
        
    }

$(document).on('ready', function(){
 
  /*$('#confettiCanvas').html('<div id="anim1"><canvas id="canvas"></canvas></div>');  */
  $('#confettiCanvas').html('<div id="anim2"><canvas id="canvas"></canvas></div>');  
  $('#confettiCanvas2').html('<div id="animPort"><canvas id="canvas2"></canvas></div>');  

    setTimeout(function(){

            SetGlobals();
        InitializeButton();
        InitializeConfetti();
    
    }, 0)

        $(window).resize(function () {
            W = 300;
            H = 250;
            canvas.width = 300;
            canvas.height = 250;
             canvas2.width = 300;
            canvas2.height = 250;
        });

  

  
    });

    function InitializeButton() {
        $('#stopButton').click(DeactivateConfetti);
        $('#startButton').click(RestartConfetti);
    }

    function SetGlobals() {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
      
        canvas2 = document.getElementById("canvas2");
        ctx2 = canvas2.getContext("2d");
      
        W = 300;
        H = 250;
        canvas.width = 300;
        canvas.height = 250;
        canvas2.width = 300;
        canvas2.height = 250;
      
    }

    function InitializeConfetti() {
        particles = [];
        animationComplete = false;
        for (var i = 0; i < mp; i++) {
            var particleColor = particleColors.getColor();
            particles.push(new confettiParticle(particleColor));
        }
        StartConfetti();
    }

    function Draw() {
        ctx.clearRect(0, 0, W, H);
        ctx2.clearRect(0, 0, W, H);

        var results = [];
        for (var i = 0; i < mp; i++) {
            (function (j) {
                results.push(particles[j].draw());
            })(i);
        }
        Update();

        return results;
    }

    function RandomFromTo(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }


    function Update() {
        var remainingFlakes = 0;
        var particle;
        angle += 0.01;
        tiltAngle += 0.1;

        for (var i = 0; i < mp; i++) {
            particle = particles[i];
            if (animationComplete) return;

            if (!confettiActive && particle.y < -15) {
                particle.y = H + 20;
                continue;
            }

            stepParticle(particle, i);

            if (particle.y <= H) {
                remainingFlakes++;
            }
            CheckForReposition(particle, i);
        }

        if (remainingFlakes === 0) {
            StopConfetti();
        }
    }

    function CheckForReposition(particle, index) {
        if ((particle.x > W + 20 || particle.x < -20 || particle.y > H) && confettiActive) {
            if (index % 5 > 0 || index % 2 == 0) //66.67% of the flakes
            {
                repositionParticle(particle, Math.random() * W, -10, Math.floor(Math.random() * 10) - 20);
            } else {
                if (Math.sin(angle) > 0) {
                    //Enter from the left
                    repositionParticle(particle, -20, Math.random() * H, Math.floor(Math.random() * 10) - 20);
                } else {
                    //Enter from the right
                    repositionParticle(particle, W + 20, Math.random() * H, Math.floor(Math.random() * 10) - 20);
                }
            }
        }
    }
    function stepParticle(particle, particleIndex) {
        particle.tiltAngle += particle.tiltAngleIncremental;
        particle.y += (Math.cos(angle + particle.d) + 3 + particle.r / 2) / 2;
        particle.x += Math.sin(angle);
        particle.tilt = (Math.sin(particle.tiltAngle - (particleIndex / 3))) * 15;
    }

    function repositionParticle(particle, xCoordinate, yCoordinate, tilt) {
        particle.x = xCoordinate;
        particle.y = yCoordinate;
        particle.tilt = tilt;
    }

    function StartConfetti() {
        W = 300;
        H = 250;
        canvas.width = W;
        canvas.height = H;
        canvas2.width = W;
        canvas2.height = H;
      
        (function animloop() {
            if (animationComplete) return null;
            animationHandler = requestAnimFrame(animloop);
            return Draw();
        })();
    }

    function ClearTimers() {
        clearTimeout(reactivationTimerHandler);
        clearTimeout(animationHandler);
    }

    function DeactivateConfetti() {
        confettiActive = false;
        ClearTimers();
    }

    function StopConfetti() {
        animationComplete = true;
        if (ctx == undefined) return;
        ctx.clearRect(0, 0, W, H);
        ctx2.clearRect(0, 0, W, H);

    }

    function RestartConfetti() {
        ClearTimers();
        StopConfetti();
        reactivationTimerHandler = setTimeout(function () {
            confettiActive = true;
            animationComplete = false;
            InitializeConfetti();
        }, 100);

    }

    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame || 
        window.oRequestAnimationFrame || 
        window.msRequestAnimationFrame || 
        function (callback) {
            return window.setTimeout(callback, 1000 / 60);
        };
    })();
})();