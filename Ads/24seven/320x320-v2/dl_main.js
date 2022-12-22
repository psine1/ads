
//PRELOAD DE IMG
this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
//ACA HAY QUE CARGAR LAS IMAGENES QUE SE USEN
var imageArray = new Array( "images/btnPause.png", "images/btn_appStore.png", "images/btn_googlePlay.png");

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
    .add(fr1(), 0)
    .add(fr4(), 12)    
    ;


function fr1(){
    var tl_fr1 = gsap.timeline();
    tl_fr1
        .set(".posLat", {y: -100}, 0)            
        .set("[id*='mobile']", {scale: 0.8, transformOrigin: "50% 0%", y: 25}, 0)    
        .from("[id*='contWav']", {duration: 1.5, scaleY: 0, ease: "power3.out"}, 0.6)
        .from("[id*='txt-1-']", {duration: 1, autoAlpha: 0, y: 20, stagger: 0.2, ease: "power3.out"}, 0.2)
        .to("[id*='txt-1-']", {duration: 1, autoAlpha: 0, ease: "power3.out"}, 2.5)
        .from(".overIcon1", {duration: 1.5, autoAlpha: 0, stagger: 0.1, ease: "power3.out"}, 3)
        .from(".overIcon2", {duration: 1.5, autoAlpha: 0, stagger: 0.1, ease: "power3.out"}, 3)

       // .to("[id*='mobile']", {duration: 2.5,  scale: 1, y: -5, ease: "power3.out"}, 4)    
        .to("[id*='mobile']", {duration: 4,  scale: 1.75, transformOrigin: "50% 0%", rotation: 0.01, ease: "power3.out"}, 5)    

      //  .to("[id*='contBrand']", {duration: 14, y: -200, ease: "none"}, 4)
        .to(".posCenter", {duration: 17, y: -200, rotation: 0.01, ease: "none"}, 4)        
        .to(".posLat", {duration: 17, y: 200, rotation: 0.01, ease: "none"}, 4)        

        .to("[id*='mask']", {duration: 2.2, rotation: 0.01, ease: "power3.out"}, 5)    

        .from("[id*='intiPhone']", {duration: 0.7, scale: 0.95,  opacity: 0, transformOrigin: "50% 0%", rotation: 0.01, ease: "power3.out"}, 8)  
        .from("[id*='circleGradient']", {duration: 0.7, scale: 0.95,  opacity: 0, transformOrigin: "50% 0%", rotation: 0.01, ease: "power3.out"}, 8)  

        .to("[id*='mobile']", {duration: 1, x: -114, ease: "power3.out"}, 9.5)  

        .to("[id*='circleGradient']", {duration: 0.7, scale: 1.2, repeat: 3, yoyo: true, ease: "power3.out"}, 9.5)  


        .from("[id*='btnPause']", {duration: 0.01, autoAlpha: 0, ease: "power3.out"}, 9.7)
        .to("[id*='btnPlay']", {duration: 0.01, autoAlpha: 0, ease: "power3.out"}, 9.7) 
        .from("[id*='circleColor']", {duration: 0.5, autoAlpha: 0, ease: "power1.out"}, 9.7)   
        .from("[id*='circleRed']", {duration: 0.5, autoAlpha: 0, repeat: 1, yoyo: true, ease: "power1.out"}, 9.7)   

        .from("[id*='contWav']", {duration: 1, autoAlpha: 0, ease: "power3.out"}, 10)  


        ;
    return tl_fr1  
    }   




function fr4(){
    var tl_fr4 = gsap.timeline();
    tl_fr4
        .to("[id*='fr1']", {duration: 1, autoAlpha: 0, ease: "power3.out"}, 0)
        .from("[id*='fr4']", {duration: 1, autoAlpha: 0, ease: "power3.out"}, 0.5)

        .from("[id*='txt-2-a']", {duration: 1, autoAlpha: 0, y: 20, ease: "power3.out"}, 0.7)
        .from("[id*='txt-2-b']", {duration: 1, autoAlpha: 0, y: 20, ease: "power3.out"}, 0.9)
        .from("[id*='barLogo']", {duration: 1, autoAlpha: 0, y: 20, ease: "power3.out"}, 0.9)
        

        .from("[id*='appStore']", {duration: 1, autoAlpha: 0, scale: 0.5, ease: "power3.out"}, 1.7)
        .from("[id*='googlePlay']", {duration: 1, autoAlpha: 0, scale: 0.5, ease: "power3.out"}, 1.9)

        .to("[id*='barLogo']", {duration: 1, scaleY: 0.5, y: -64/2, transformOrigin: "0% 100%", ease: "power3.out"}, 2.5)
        .to("[id*='barLogo']", {duration: 1.5, rotation: 360, transformOrigin: "0% 100%", ease: "power3.out"},3.5)
        .from("[id*='txt-white']", {duration: 1.5, autoAlpha: 0, transformOrigin: "0% 100%", ease: "power3.out"},3.5)
        .to("[id*='barLogo']", {duration: 1, scaleY: 1, y: 0, transformOrigin: "0% 100%", ease: "power3.out"}, 5)
        .to("[id*='txt-white']", {duration: 1.5, autoAlpha: 0, transformOrigin: "0% 100%", ease: "power3.out"}, 5)




        /*

        .to("[id*='barLogo']", {duration: 1, scaleY: 0.5, y: -77/2, transformOrigin: "0% 100%", ease: "power3.out"}, 6)
        .to("[id*='barLogo']", {duration: 1.5, rotation: "+=360", transformOrigin: "0% 100%", ease: "power3.out"}, 7)

        .to("[id*='txt-white']", {duration: 1.5, autoAlpha: 0, transformOrigin: "0% 100%", ease: "power3.out"}, 7)
        .to("[id*='barLogo']", {duration: 1, scaleY: 1, y: 0, transformOrigin: "0% 100%", ease: "power3.out"})

        */
        
        ;
    return tl_fr4  
    }                
        

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
var ctg_appStore = document.getElementById('ctg_appStore');
var ctg_googlePlay = document.getElementById('ctg_googlePlay');

    clicktag.addEventListener('mouseup', function(event) {                 
        window.open(window.clickTag,'_blank');                  
    })

    ctg_appStore.addEventListener('mouseup', function(event) {                 
        window.open(window.clickTag,'_blank');                  
    })

    ctg_googlePlay.addEventListener('mouseup', function(event) {                 
        window.open(window.clickTag,'_blank');                  
    })        


  ctg_appStore.addEventListener('mouseenter', function (e) {
      a.enter("#btn_appStore");
  });

  ctg_appStore.addEventListener('mouseleave', function (e) {
      a.leave("#btn_appStore");
  });


  ctg_googlePlay.addEventListener('mouseenter', function (e) {
      a.enter("#btn_googlePlay");
  });

  ctg_googlePlay.addEventListener('mouseleave', function (e) {
      a.leave("#btn_googlePlay");
  });  


function hover(elem){
      var tl_hover = gsap.timeline({ paused:false,
        defaults: { duration: 0.5, ease: 'easeInOut' }, });
      tl_hover
      .to(elem, {duration: 0.5, scale: 1.03, rotation: 0.1, ease: "power3.out"}, 0)
return tl_hover;
}

function out(elem){
      var tl_out = gsap.timeline({ paused:false,
        defaults: { duration: 0.5, ease: 'easeInOut' }, });
      tl_out
      .to(elem, {duration: 0.5, scale: 1, rotation: 0, ease: "power3.out"}, 0)
return tl_out;
}


  var a = {
    enter: function (elem) {
    var tl_hover = hover(elem);
    },
    leave: function (elem) {
    var tl_out = out(elem);
    },
  };






}

