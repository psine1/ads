
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
    .add(divider('#bg-1, #anim-heart', 50, 0, 'null', 0.5, -0.3), 0)
    .add(fr1(), 0)
    .set('#color-1, #color-2, #color-3, #color-4', {left: "0px"}, 2.8)
    .add(divider('#bg-2, #anim-bottle',  50, 0, '#bg-1, #anim-heart', -0.5, 0.3), 2.8)
    .add(fr2(), 3.1)
    .add(divider('#bg-3, #anim-man', 0, -50, '#bg-2, #anim-bottle', 0.5, -0.3), 5.8)
    .add(fr3(), 6.1)
    .add(divider('#bg-4',  0, 0, '#ull'), 8.8)
    .add(fr4(), 9.1)
    
    ;

    var txt1a = document.getElementById("txt-1-a");
    var txt1b = document.getElementById("txt-1-b");
    var txt2b = document.getElementById("txt-2-b");
    var txt3b = document.getElementById("txt-3-b");
    

function fr1(){ 

        var tl_ = new TimelineMax({repeat: 0});  
        tl_.timeScale( 1 );  
        tl_
        .staggerFrom('[id*="txt-1-"]', 1, {autoAlpha: 0, scale: 1.1, ease:Power3.easeOut}, 0.2, 1)

      //  .to('[id*="txt-1-"]', 1, {filter: 'drop-shadow(0px 0px 15px rgba(237, 89, 99, 1)) blur(0px)', ease:Power3.easeOut}, 0 )



       .to('.anim-heart-1, .anim-heart-2, .anim-heart-3', 0.8, { repeat: -1, x: -2484, ease: SteppedEase.config(3)}, 0)


        .to('[class*="light"]', 0.01, {top: -30}, 0)
        .fromTo('[class*="light"]', 3, {scale: 1.3, x: -50, y: -100, rotation: 10}, {scale: 2, x: 0, y: 0, rotation: 0, transformOrigin: '0% 0%', ease:Power3.easeOut}, 0)  

        ;

      return tl_  
}

function fr2(){ 

    var tl_ = new TimelineMax({repeat: 0});  
    tl_.timeScale( 1 );  
    tl_
          .from('#scene2', 0.01, {autoAlpha: 0, ease:Power3.easeOut}, 0)
          .to('[id*="txt-1-"]', 1, {autoAlpha: 0, ease:Power3.easeOut}, 0 )
     //     .to('[id*="txt-1-"], [id*="txt-2-"]', 1, {filter: 'drop-shadow(0px 0px 15px rgba(239, 169, 65, 1)) blur(0px)', ease:Power3.easeOut}, 0 )

     .add(function(){ 
      txt1a.classList.add("shadow2");
      txt2b.classList.add("shadow2");
     }, 0)

          .staggerFrom('[id*="txt-2-"]', 1, {autoAlpha: 0, scale: 1.1, ease:Power3.easeOut}, 0.2, 0.2)  

          .to('.anim-bottle-1, .anim-bottle-2, .anim-bottle-3', 0.8, { repeat: -1, x: -2484, ease: SteppedEase.config(3)}, 0)


          .to('[class*="light"]', 0.01, {top: 70}, 0)
          .fromTo('[class*="light"]', 5, {scale: 1.3, x: 150, y: 100, rotation: -10}, {scale: 2, x: 0, y: 0, rotation: 0, transformOrigin: '0% 0%', ease:Power3.easeOut}, 0) 

          ;
    return tl_  
}
 
function fr3(){ 

    var tl_ = new TimelineMax({repeat: 0});  
    tl_.timeScale( 1 );  
    tl_
          .from('#scene3', 0.01, {autoAlpha: 0, ease:Power3.easeOut}, 0)
          .staggerFrom('[id*="txt-3-"]', 1, {autoAlpha: 0, scale: 1.1, ease:Power3.easeOut}, 0.2, 0.2)
          .to('[id*="txt-2-"]', 1, {autoAlpha: 0, ease:Power3.easeOut}, 0 )

          .add(function(){ 
            txt1a.classList.add("shadow3");
            txt3b.classList.add("shadow3");
           }, 0)


    //      .to('[id*="txt-1-"], [id*="txt-3-"]', 1, {filter: 'drop-shadow(0px 0px 15px rgba(71, 163, 205, 1)) blur(0px)', ease:Power3.easeOut}, 0 )

    //      .to("#turb-3wave", 0.4, {   attr: { "baseFrequency": 0.03 }, repeat: -1, yoyo: true, ease:Linear.easeNone}, 0)

      //    .to("#turb-3-a-wave", 0.4, {   attr: { "baseFrequency": 0.03 }, repeat: -1, yoyo: true, ease:Linear.easeNone}, 0)
      //    .to("#turb-3-b-wave", 0.4, {   attr: { "baseFrequency": 0.03 }, repeat: -1, yoyo: true, ease:Linear.easeNone}, 0)
          .fromTo("#anim-man", 0.01, {clip:"rect(0px 0px 350px 0px)"}, {clip:"rect(0px 970px 350px 0px)", ease:Power3.easeOut}, 0.3)


          .to('.wrap-man, .wrap-man2, .wrap-man3', 0.8, { repeat: -1, x: -2184, ease: SteppedEase.config(3)}, 0)

          .to('[class*="light"]', 0.01, {top: 20}, 0)
          .fromTo('[class*="light"]', 3, {scale: 1.3, x: -50, y: -100, rotation: 10}, {scale: 2, x: 0, y: 0, rotation: 0, transformOrigin: '0% 0%', ease:Power3.easeOut}, 0)  
          ;
    return tl_  
}



function fr4(){ 

    var tl_ = new TimelineMax({repeat: 0});  
    tl_.timeScale( 1 );  
    tl_
          .from('#scene4', 0.01, {autoAlpha: 0, ease:Power3.easeOut}, 0)

          .from('#bg-4', 0.5, {autoAlpha: 0, ease:Power3.easeOut}, 0)


          .to('[id*="txt-3-"], [id*="txt-1-"]', 1, {autoAlpha: 0, ease:Power3.easeOut}, 0 )
          .from('#border', 1.5, {scale: 2.5, ease:Power3.easeOut}, 0)

          .from('#logo-end', 1.5, {scale: 0, autoAlpha: 0, ease:Elastic.easeOut.config(0.6, 0.3)}, 0.5)
          .from('[id*="txt-4-"]', 2, {scale: 1.25, autoAlpha: 0, transformOrigin: '50% 55%', ease:Power3.easeOut}, 0.7)

          .from('#cta, #wrap-btn', 1.5, {scale: 1.25, autoAlpha: 0, ease:Back.easeOut.config(0.5)}, 1)      
          .from('#anim-flower', 1.5, {scaleY: 0, transformOrigin: "50% 100%", ease:Back.easeOut.config(0.5)}, 1.3)      


          .to('#anim-btn-1, #anim-btn-2, #anim-btn-3', 0.8, { repeat: -1, x: -492, ease: SteppedEase.config(3)}, 0)
          .to("#turb-flower-wave", 0.3, {   attr: { "baseFrequency": 0.03 }, repeat: -1, yoyo: true, ease:Linear.easeNone}, 0)

          
          .set('.wrap-flower-sel', {rotation: -10, x: -10}, 0)

          

          .fromTo('#flower-1', 2, {clip:"rect(200px 0px 156px 0px)"}, {clip:"rect(0px 56px 156px 0px)", transformOrigin: "50% 100%", ease:Power3.easeOut}, 1 )
          .from('#flower-2', 1, {scaleX: 0, ease:Power3.easeOut}, 1.2 )
          .from('#flower-3', 1, {scaleX: 0, ease:Power3.easeOut}, 1.4 )
          .from('#flower-4', 1, {scaleX: 0, ease:Power3.easeOut}, 1.6 )
          .from('#flower-5', 1, {scale: 0, transformOrigin: "20px 36px", ease:Power3.easeOut}, 1.8 )

          ;
    return tl_  
}



function divider(elem, boxsIn_X, boxsIn_Y, elemOut, rotateIn, rotateOut){ 

var tl_ = new TimelineMax();  
tl_

      .fromTo(elem, 1, {rotation: rotateIn, scale: 1.01}, {rotation: 0, scale: 1, ease:Power3.easeInOut}, 0)  
      .fromTo(elem, 4, {x: boxsIn_X, y: boxsIn_Y}, {x: 0, y: 0, ease:Power3.easeInOut}, 0.5)  
    //  .fromTo(elemImg, 1, {scale: 1, rotation: 5}, {scale: 1.08, rotation: 0, ease:Power3.easeOut}, "-=0.2")  
      
      .fromTo(elemOut, 0.5, {rotation: 0, scale: 1}, {rotation: rotateOut, scale: 1.01, ease:Power3.easeInOut}, 0)  

      
      
      ;

return tl_  
}





function initAnimations(){
    multitimeline.play(0.5);

    multitimeline.addPause(18);
    //multitimeline.play(8);

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

