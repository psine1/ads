
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
    .add(divider('#bg-1', '#bg-1 img', -300, 600, 0, 0, 'null'), 0)
    .add(fr1(), 0)
    .set('#color-1, #color-2, #color-3, #color-4', {left: "0px"}, 2.8)
    .add(divider('#bg-2', '#bg-2 img', 0, 0, -600, 600, '#bg-1'), 2.8)
    .add(fr2(), 3.1)
    .add(divider('#bg-3', '#bg-3 img', 300, -300, 0, 0, '#bg-2'), 5.8)
    .add(fr3(), 6.1)
    .add(divider('#bg-4', '#bg-4 img', 0, 0, 600, -600, '#bg-3'), 8.8)
    .add(fr4(), 9.1)
    
    ;

//TweenMax.set("#img-2", {autoAlpha: 0});



function fr1(){ 

        var tl_ = new TimelineMax({repeat: 0});  
        tl_.timeScale( 1 );  
        tl_
        .staggerFrom('[id*="txt-1-"]', 1, {y: 10, autoAlpha: 0, ease:Power3.easeOut}, 0.2, 1.4)
        .from("#flag-green", 1, {scaleX: 0, ease:Power3.easeOut}, 1.3)

        ;



      return tl_  
}

function fr2(){ 

    var tl_ = new TimelineMax({repeat: 0});  
    tl_.timeScale( 1 );  
    tl_
          .from('#scene2', 0.01, {autoAlpha: 0, ease:Power3.easeOut}, 0)
          .to('[id*="txt-1-"]', 1, {autoAlpha: 0, ease:Power3.easeOut}, 1 )
          .from("#flag-orange", 1, {scaleX: 0, ease:Power3.easeOut}, 0.9)

          .staggerFrom('[id*="txt-2-"]', 1, {y: 10, autoAlpha: 0, ease:Power3.easeOut}, 0.2, 1)
          ;
    return tl_  
}

function fr3(){ 

    var tl_ = new TimelineMax({repeat: 0});  
    tl_.timeScale( 1 );  
    tl_
          .from('#scene3', 0.01, {autoAlpha: 0, ease:Power3.easeOut}, 0)
          .staggerFrom('[id*="txt-3-"]', 1, {y: 10, autoAlpha: 0, ease:Power3.easeOut}, 0.2, 1)
          .to('[id*="txt-2-"]', 1, {autoAlpha: 0, ease:Power3.easeOut}, 0.5 )
          .from("#flag-sky", 1, {scaleX: 0, ease:Power3.easeOut}, 0.9)


          ;
    return tl_  
}


function fr4(){ 

        var tl_ = new TimelineMax({repeat: 0});  
        tl_.timeScale( 1 );  
        tl_
              .from('#scene4', 0.01, {autoAlpha: 0, ease:Power3.easeOut}, 0)
              .to('[id*="txt-3-"]', 1, {autoAlpha: 0, ease:Power3.easeOut}, 0.5 )
              .from('#border', 1.5, {scale: 2.5, ease:Power3.easeOut}, 1)

              .from('#logo-end', 1.5, {scale: 0, autoAlpha: 0, ease:Elastic.easeOut.config(0.6, 0.3)}, 2)
              .from('[id*="txt-4-"]', 2, {scale: 1.25, autoAlpha: 0, transformOrigin: '50% 55%', ease:Power3.easeOut}, 2.5)

              .from('#cta', 1.5, {scale: 1.25, autoAlpha: 0, ease:Back.easeOut.config(0.5)}, 3)

              .from('#ball', 0.3, {y: -550, ease:Power1.easeIn}, 2)
              .from('#triangle', 0.3, {y: -550, ease:Power1.easeIn}, 2.1) 
              
              .to('#ball', 0.3, {y: -200, x: -20, rotation: -30, ease:Power1.easeOut}, 2.3)
              .to('#triangle', 0.3, {y: -200, x: 20, rotation: 30, ease:Power1.easeOut}, 2.4) 
              
              .to('#ball', 0.5, {y: 0, x: 0, rotation: 10, ease:Power1.easeIn}, 2.6)
              .to('#triangle', 0.5, {y: 0, x: 0, rotation: -10, ease:Power1.easeIn}, 2.7) 
              
              .to('#ball', 0.5, {y: -20, x: 0, rotation: 0, ease:Power1.easeOut}, 3.1)
              .to('#triangle', 0.5, {y: -20, x: 0, rotation: 0, ease:Power1.easeOut}, 3.2)   
              
              
              .from('#ball img', 4, {rotation: 30, ease:Power1.easeOut}, 2)
              .from('#triangle img', 4, {rotation: 30, ease:Power1.easeOut}, 2.1)          


              ;
    return tl_  
}



function divider(elem, elemImg, boxsIn_X, boxsOut_X, boxsIn_Y, boxsOut_Y, elemOut){ 

    var tl_ = new TimelineMax();  
    tl_
          .fromTo('#color-1', 2.2, {x: boxsIn_X, y: boxsIn_Y}, {x: boxsOut_X, y: boxsOut_Y, ease:Power3.easeInOut}, 0)
          .fromTo('#color-2', 1.95, {x: boxsIn_X, y: boxsIn_Y}, {x: boxsOut_X, y: boxsOut_Y, ease:Power3.easeInOut}, 0.2)
          .fromTo('#color-3', 1.85, {x: boxsIn_X, y: boxsIn_Y}, {x: boxsOut_X, y: boxsOut_Y, ease:Power3.easeInOut}, 0.3)
          .fromTo('#color-4', 1.65, {x: boxsIn_X, y: boxsIn_Y}, {x: boxsOut_X, y: boxsOut_Y, ease:Power3.easeInOut}, 0.4)  
          .fromTo(elemOut, 1.65, {x: 0, y: 0}, {x: boxsOut_X, y: boxsOut_Y, ease:Power3.easeInOut}, 0.2)  

          .fromTo(elem, 1.65, {x: boxsIn_X, y: boxsIn_Y}, {x: 0, y: 0, ease:Power3.easeInOut}, 0.3)  
          .fromTo(elemImg, 4, {scale: 1.05, rotation: 0.5}, {scale: 1, rotation: 0, ease:Power3.easeInOut}, 0.3)            
          ;

return tl_  
}





function initAnimations(){
    multitimeline.play(0.85); 

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

