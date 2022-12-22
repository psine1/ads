
//PRELOAD DE IMG
this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
//ACA HAY QUE CARGAR LAS IMAGENES QUE SE USEN
var imageArray = new Array("images/bg.jpg");

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
var multitimeline = new TimelineMax({paused:false});
    multitimeline.addPause(15);
    multitimeline
    .add(fr1(), 0)
    .add(fr2(), 2)
    .add(fr3(), 6)
    .add(fr4(), 9);

TweenMax.set("[id*='cta-hover']", {autoAlpha:0});

function fr1(){

var tl_ = new TimelineMax();  
tl_.timeScale( 1 );  
tl_

.from("[id*='img-1-a']", 1.5, {y: 400,ease:Power2.easeInOut}, 0)
.from("[id*='img-1-b']", 1.5, {y: 400,ease:Power2.easeInOut}, 0)

.from("[id*='img-2-a']", 1.5, {y: 400,ease:Power2.easeInOut}, 0.4)
.from("[id*='img-2-b'], [id*='img-2-c']", 1.5, {y: 450, ease:Power2.easeInOut}, 0.6)
.to("[id*='img-2-c'] img", 2, {rotation: 360, repeat: -1, ease: Power0.easeNone}, 0)

.staggerFrom("[id*='img-']", 4, {ease:Power2.easeOut}, 0.2, 0)



;
return tl_  
}



function fr2(){

var tl_ = new TimelineMax();  
tl_.timeScale( 1 );  
tl_
.to("[id*='txt-1']", 1, {ease:Power2.easeOut, autoAlpha:0}, 0)
.from("[id*='txt-2']", 1, {ease:Power2.easeOut, autoAlpha:0, x: 20}, 0.5)



;
return tl_  
}


function fr3(){

var tl_ = new TimelineMax();  
tl_.timeScale( 1 );  
tl_
.to("[id*='txt-2']", 1, {ease:Power2.easeOut, autoAlpha:0}, 0)
.from("[id*='txt-3']", 1, {ease:Power2.easeOut, autoAlpha:0, x: 20}, 0.5)




;
return tl_  
}

function fr4(){

var tl_ = new TimelineMax();  
tl_.timeScale( 1 );  
tl_

.to("[id*='txt-3']", 1, {ease:Power2.easeOut, autoAlpha:0}, 0.5)
.to("[id*='txt-0']", 1, {ease:Power2.easeOut, autoAlpha:0}, 0.7)

.from("[id*='txt-4']", 1, {ease:Power2.easeOut, autoAlpha:0}, 1)
.from("[id*='logo']", 1, {ease:Power2.easeOut, autoAlpha:0}, 2.5)
.from("[id*='btn']", 1, {ease:Power2.easeOut, y: 150, autoAlpha: 0}, 1.7)

/*
.to("[id*='img-2-b'], [id*='img-2-c']", 1.5, {y: 300, ease:Power2.easeInOut}, 0)
.to("[id*='img-2-a']", 1.5, {y: 300, ease:Power2.easeInOut}, 0.2)

.to("[id*='img-1-b']", 1.5, {y: 300, ease:Power2.easeInOut}, 0.4)
.to("[id*='img-1-a']", 1.5, {y: 300, ease:Power2.easeInOut}, 0.6)

*/

;
return tl_  
}




var tl_line = new TimelineMax();
tl_line.add(TweenMax );


function initAnimations(){
    multitimeline.timeScale(1); 
}


//HANDLERS
function initHandlers() {

var clicktag = document.getElementById('clickTag');
    clicktag.addEventListener('mouseup', function(event) {
        window.open(window.clickTag,'_blank');
        
    })


    clicktag.addEventListener('mouseover', function(event) {
    TweenMax.to("[id*='cta-hover']", 0.3, {ease:Power2.easeInOut, autoAlpha: 1})
    TweenMax.to("[id*='cta-out']", 0.3, {ease:Power2.easeInOut, autoAlpha: 0})
    TweenMax.to("[id*='btn']", 0.3, {ease:Power2.easeInOut, backgroundColor: "white"})

    })

    clicktag.addEventListener('mouseout', function(event) {
    TweenMax.to("[id*='cta-hover']", 0.3, {ease:Power2.easeInOut, autoAlpha: 0})
    TweenMax.to("[id*='cta-out']", 0.3, {ease:Power2.easeInOut, autoAlpha: 1})
    TweenMax.to("[id*='btn']", 0.3, {ease:Power2.easeInOut, backgroundColor: "transparent"})

    })

}

