
//PRELOAD DE IMG
this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
//ACA HAY QUE CARGAR LAS IMAGENES QUE SE USEN
var imageArray = new Array("images/bg-1.jpg"

 );

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

  alert("IE");
  
}


// VARIABLES GLOBALES
var r = 100;
var dur = 1;

// elem, elemImg, boxsIn_X, boxsOut_X, boxsIn_Y, boxsOut_Y, elemOut

var multitimeline = new TimelineMax({paused:false, repeat: 0});
    multitimeline
    .add(divider('#bg-1', 0, 0, 'null', 0.5, -0.5), 0)
    .add(fr1(), 0)
    .set('#color-1, #color-2, #color-3, #color-4', {left: "0px"}, 2.8)
    .add(divider('#bg-2, [id*="lantern"]',  -50, 0, 'null', -0.5, 0.5), 2.8)
    .add(fr2(), 3.1)
    .add(divider('#bg-3', 0, -50, '#null', 0.5, 0.5), 5.8)
    .add(fr3(), 6.1)
    .add(divider('#scene4',  0, 0, '#null'), 8.8)
    .add(fr4(), 9.1)
    ;

//TweenMax.set("#img-2", {autoAlpha: 0});

TweenMax.set('#bg-1 img', {transformOrigin: '100% 60%'})

function fr1(){ 

        var tl_ = new TimelineMax({repeat: 0});  
        tl_.timeScale( 1 );  
        tl_
        .staggerFrom('[id*="txt-1-"]', 1, {y: 50, autoAlpha: 0, ease:Power3.easeOut}, 0.2, 1)
        .fromTo('[id*="bg-1-elem"]', 5, {rotation: -1, y: -2}, {rotation: 2, y: 2, repeat: -1, yoyo: true, transformOrigin: '50% 100%', eease:Linear.easeNone}, 0 )
        .to('[id*="cloud-"]', 8, {x: -30, eease:Linear.easeNone}, 0 )
        .fromTo('[class*="light"]', 3, {scale: 1.3, x: -50, y: -100, rotation: 10}, {scale: 2, x: 0, y: 0, rotation: 0, transformOrigin: '0% 0%', ease:Power3.easeOut}, 0)  

        ;

      return tl_  
}

function fr2(){ 

    var tl_ = new TimelineMax({repeat: 0});  
    tl_.timeScale( 1 );  
    tl_
          .from('#scene2', 0.01, {autoAlpha: 0, ease:Power3.easeOut}, 0)
          .to('[id*="txt-1-"]', 1, {autoAlpha: 0, ease:Power3.easeOut}, 0.5 )

          .staggerFrom('[id*="txt-2-"]', 1, {y: 50, autoAlpha: 0, ease:Power3.easeOut}, 0.2, 1)
          .fromTo('[id*="lantern"] IMG', 1, {rotation: -2}, {rotation: 2, repeat: -1, yoyo: true, transformOrigin: '25px 115px', eease:Linear.easeNone}, 0 )

          ;
    return tl_  
}

function fr3(){ 

    var tl_ = new TimelineMax({repeat: 0});  
    tl_.timeScale( 1 );  
    tl_
          .from('#scene3', 0.01, {autoAlpha: 0, ease:Power3.easeOut}, 0)
          .staggerFrom('[id*="txt-3-"]', 1, {y: 50, autoAlpha: 0, ease:Power3.easeOut}, 0.2, 1)
          .to('[id*="txt-2-"]', 1, {autoAlpha: 0, ease:Power3.easeOut}, 0.5 )
          .fromTo('[class*="light"]', 8, {scale: 1.3, x: -20, y: -100, rotation: 10}, {scale: 2, x: 0, y: 0, rotation: 0, transformOrigin: '0% 0%', ease:Power3.easeOut}, 0)  

          ;
    return tl_  
}


function fr4(){ 

    var tl_ = new TimelineMax({repeat: 0});  
    tl_.timeScale( 1 );  
    tl_

          .set('[class*="light"]', {top: -100}, 0)  

          .from('#scene4', 0.01, {autoAlpha: 0, ease:Power3.easeOut}, 0)

          .from('#bg-4', 0.5, {autoAlpha: 0, ease:Power3.easeOut}, 0)
          .fromTo('[class*="light"]', 8, {scale: 1.5, x: -20, y: -100, rotation: 10}, {scale: 2, x: 0, y: -60, rotation: -5, transformOrigin: '0% 0%', ease:Power3.easeOut}, 0)  

          .to('[id*="txt-3-"]', 1, {autoAlpha: 0, ease:Power3.easeOut}, 0 )
          .from('#border', 1.5, {scale: 2.5, ease:Power3.easeOut}, 0)

          .from('#logo-end', 1.5, {scale: 0, autoAlpha: 0, ease:Elastic.easeOut.config(0.6, 0.3)}, 0.5)
          .from('[id*="txt-4-"]', 2, {scale: 1.25, autoAlpha: 0, transformOrigin: '50% 55%', ease:Power3.easeOut}, 0.7)

          .from('#cta', 1.5, {scale: 1.25, autoAlpha: 0, ease:Back.easeOut.config(0.5)}, 1)      

          ;
    return tl_  
}



function divider(elem, boxsIn_X, boxsIn_Y, elemOut, rotateIn, rotateOut){ 

var tl_ = new TimelineMax();  
tl_

      .fromTo(elem, 5, {rotation: rotateIn, scale: 1.12}, {rotation: 0, scale: 1, ease:Power3.easeOut}, 0)  
      .fromTo(elem, 5, {x: boxsIn_X, y: boxsIn_Y}, {x: 0, y: 0, ease:Power3.easeOut}, 0)  
    //  .fromTo(elemImg, 1, {scale: 1, rotation: 5}, {scale: 1.08, rotation: 0, ease:Power3.easeOut}, "-=0.2")  
      
      .fromTo(elemOut, 0.5, {rotation: 0, scale: 1.08}, {rotation: rotateOut, scale: 1.12, ease:Power3.easeInOut}, 0)  

      


      ;

return tl_  
}





function initAnimations(){
    multitimeline.play(0.5);
    
//      multitimeline.play(25);

}


//HANDLERS
function initHandlers() {

var clicktag = document.getElementById('clickTag');
    clicktag.addEventListener('mouseup', function(event) {
        
         
        window.open(window.clickTag,'_blank');
        
          
    })


setTimeout(function() {

  clicktag.addEventListener('mouseenter', function (e) {
      a.enter();
  });

  clicktag.addEventListener('mouseleave', function (e) {
      a.leave();
  });

}, 1000);






  var a = {
    enter: function () {
      console.log('enter');
      var tl = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl
        .to("#cta", 0.3, {scale: 1, backgroundColor: "#fdb913", ease:Power2.easeOut}, 0)
    },
    leave: function () {
      console.log('leave');
      var tl = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl
        .to("#cta", 0.3, {scale: 1, backgroundColor: "#ffffff", ease:Power2.easeOut}, 0)

    },
  };

}

