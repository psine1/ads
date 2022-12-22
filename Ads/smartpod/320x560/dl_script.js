// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

var ecid;
var action;
var collapsedPanel;
var expandedPanel;
var collapsedExit;
var closeBtn;
var autoCol;
var orientate;

// VARIABLES GLOBALES
var _tt = new TimelineMax();

var container = document.querySelector('#pagedeck');
var closeBtn = document.querySelector('#close_btn');
var introDiv = document.querySelector('#banner-page > .banner');
var expandedDiv = document.querySelector('#expanded');
var mainContent = document.querySelector('#main_content');
var journeyContainer = document.querySelector('.journeyContainer');
var globalcta = document.querySelector('#globalcta');
var journeyContent1 = document.querySelectorAll('#journey1 .feature_content');
var journeyContent2 = document.querySelectorAll('#journey2 .feature_content');
var journeyContent3 = document.querySelectorAll('#journey3 .feature_content');
var journeyContents = [
  journeyContent1,
  journeyContent2,
  journeyContent3
];
var fullContents = document.querySelectorAll('.full_content');

var videoContainers = document.querySelectorAll('.videoContainer');
var videos = document.querySelectorAll('video');
var videoCurrentTimes = document.querySelectorAll('.currentTime');
var videoTotalTimes = document.querySelectorAll('.totalTime');
var videoProgressBars = document.querySelectorAll('.progressBar');
var videoFullScreenBtns = document.querySelectorAll('.fullScreen');
var videoReplayBtns = document.querySelectorAll('.replayBtn');
var currentVideo;
var currentProgress;
var currentTimer;

var logo = document.querySelector('#logo');
var url_main = document.querySelectorAll('.url_main');

var arrowLeft = document.querySelector('.arrowLeft');
var arrowRight = document.querySelector('.arrowRight');

var iconReadMore = document.querySelectorAll('.icon-readMore');
var iconReadMoreVideo = document.querySelectorAll('.icon-readMore-video');
var iconBack = document.querySelectorAll('.icon-back');
var iconBackVideo = document.querySelectorAll('.icon-back-video');
var iconPlay = document.querySelectorAll('.icon-play');
var iconPlayBack = document.querySelectorAll('.icon-play-back');
var contBar = document.querySelectorAll('.contBar');

var journey1 = document.querySelector('#journey1');
var journey2 = document.querySelector('#journey2');
var journey3 = document.querySelector('#journey3');

var journey1_button = document.querySelector('#journey1_button');
var journey2_button = document.querySelector('#journey2_button');
var journey3_button = document.querySelector('#journey3_button');
var bottomJourneys = document.querySelectorAll('.bottomJourney');

var journey1Int = document.querySelector('#journey1').children;

var slidesContainer = document.querySelector('.slidesContainer').children;
var slidesContainer2 = document.querySelector('.slidesContainer2').children;
var slidesContainer3 = document.querySelector('.slidesContainer3').children;

var currentJourney = 1;
var currentSlide = 0;
var maxSlideIndex = 3;
var featureContent = journeyContents[0];

// Initialize videoOpened flag
var videoOpened = false;
var readMoreOpened = false;

var videoTimer = false;
var readMoreTimer = false;

var j1 = false;
var j2 = false;
var j3 = false;

var slider1 = false;
var slider2 = false;
var slider3 = false;
var slider4 = false;

var currentSlideJr = 0;
var currentSlidebutton = 0;
var currentJourneybutton = currentJourney;


var hideMRAIDClose = function() {
  if (studio.common.Environment.hasType(
      studio.common.Environment.Type.IN_APP)) {
    // Hide the MRAID close button and use the creative's close button instead.
    Enabler.setUseCustomClose(true);
  }
};

//Images preload
this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
var imageArray = new Array(
  "images/Arrow-Left.png",
  "images/Arrow-Right.png",
  "images/Drag-Arrow.png",
  "images/Drag-Open.png",
  "images/icon_smartPod_a.png",
  "images/icon_smartPod_b.png",
  "images/icon-back.png",
  "images/icon-play.png",
  "images/icon-readMore.png",
  "images/img-j-2.jpg",
  "images/img-j-3.jpg",
  "images/journey1/j1_sld_1.jpg",
  "images/journey1/j1_sld_2.jpg",
  "images/journey1/j1_sld_3.jpg",
  "images/journey1/j1_sld_4.jpg",
  "images/journey2/j2_sld_1.jpg",
  "images/journey2/j2_sld_2.jpg",
  "images/journey2/j2_sld_3.jpg",
  "images/journey2/j2_sld_4.jpg",
  "images/journey3/j3_sld_1.jpg",
  "images/journey3/j3_sld_2.jpg",
  "images/journey3/j3_sld_3.jpg",
);

function preloadImages(e) {
  console.log('preload', e)
    for (var i = 0; i < imageArray.length; i++) {
        var tempImage = new Image();

        tempImage.addEventListener("load", trackProgress, true);
        tempImage.src = imageArray[i];
    }
}

function trackProgress(e) {
    console.log('track progress', e.target.outerHTML)
    loadedImages++;

    if (loadedImages == imageArray.length) {
        imagesLoaded();
    }
}

function imagesLoaded() {
    console.log('images loaded')
    if(Enabler.isVisible()) {
      initAd();
    } else {
      Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, initAd);
    }
}

initAd = function(){
  console.log('init ad')
  document.getElementById('loader-container').style.display = 'none';
  document.getElementById('banner_content').style.display = 'block';

	container = document.getElementById('container');
	collapsedPanel = document.getElementById('collapsed');
	expandedPanel = document.getElementById('expanded');
	collapsedExit = document.getElementById('collapsed_clickthrough');
	closeBtn = document.getElementById('close_btn');

	addListeners();
  hideMRAIDClose();
}

addListeners = function (){
	Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START, expandStartHandler);
	Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START, collapseStartHandler);
	Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH, expandFinishHandler);
	Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH, collapseFinishHandler);

	if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/Android/i))){ 
	  collapsedExit.addEventListener('touchend', onCollapsedExitHandler, false);
	  //exitBtn.addEventListener('touchend', onExitHandler, false);
	  closeBtn.addEventListener('touchend', onCloseHandler, false);

	// Modify creative according to orientation.
	//Enabler.addEventListener(studio.events.StudioEvent.ORIENTATION, orientateHandler);
	}else{
    collapsedExit.addEventListener('click', onCollapsedExitHandler, false);
    //exitBtn.addEventListener('click', onExitHandler, false);
    //exitBtn1.addEventListener('click', onExitHandler, false);
    closeBtn.addEventListener('click', onCloseHandler, false);
  }
  onInitHandler();
  initAnimations();
}

var tl_ = new TimelineMax();
var tl_readMore = new TimelineMax({ paused: true });
var tl_readMoreVideo = new TimelineMax({ paused: true });
var tl_video = new TimelineMax({ paused: true });
var tl_set = new TimelineMax();


initAnimations = function (){
  tl_
    .from('#bg_intro', 3, { scale: 1.2, ease: Power1.easeInOut }, 0)
    .from('#title_smart', 0.7, { y: 50, opacity: 0, ease: Power1.easeInOut }, 0.5)
    .from('#icon_smartPod_a', 0.7, { x: 110, ease: Power1.easeInOut }, 0.5)
    .from('#icon_smartPod_b', 0.7, {x: 151, ease: Power1.easeInOut }, 0.5)
    .from('#icon_smartPod_b img', 0.7, {x: -151, ease: Power1.easeInOut }, 0.5)
    .to('#icon_smartPod_a', 0.7, { x: 110, ease: Power1.easeInOut }, 1.5)
    .to('#icon_smartPod_b', 0.7, {x: 151, ease: Power1.easeInOut }, 1.5)
    .to('#icon_smartPod_b img', 0.7, {x: -151, ease: Power1.easeInOut }, 1.5)
    .to('#icon_smartPod_a', 0.7, { x: 0, ease: Power1.easeInOut }, 2.5)
    .to('#icon_smartPod_b', 0.7, {x: 0, ease: Power1.easeInOut }, 2.5)
    .to('#icon_smartPod_b img', 0.7, {x: 0, ease: Power1.easeInOut }, 2.5);

  tl_readMore
    .to('.arrow', 0.5, { autoAlpha: 0, ease: Power1.easeInOut }, 0)
    .to('#journey1, #journey2, #journey3', 0.7, { width: 360, marginLeft: 0, ease: Power1.easeInOut }, 0)
    .to('.slide', 0.7, { width: 360, marginLeft: 0, ease: Power1.easeInOut, onStart: openFullContent }, 0)
    .to('.feature_content', 0.7, { y: 160, ease: Power1.easeInOut }, 0)
    .to('.gradientimage', 0.5, { opacity: 0, ease: Power1.easeInOut }, 0)    

    .to('.txtIsi', 0.7, { opacity: 1, ease: Power1.easeInOut }, 0.7)
    //.to('.gradientIsi', 0.3, { opacity: 1, ease: Power1.easeInOut }, 0.5)
    .to('.txtIsiVideo', 0.7, { opacity: 1, ease: Power1.easeInOut }, 0.7)

    .to('.icon-readMore', 0.7, { autoAlpha: 0, ease: Power1.easeInOut }, 0)
    .to('.contBar', 0.7, { autoAlpha: 0, ease: Power1.easeInOut, onComplete: function() {
      Enabler.counter('readMore-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
      
      featureContent[currentSlide].classList.add('--active');
    } }, 0)
    .to('.icon-back', 0.6, { autoAlpha: 1, top: 20, pointerEvents: 'all', ease: Power1.easeInOut}, 0);

  tl_readMoreVideo
    .to('.arrow', 0.5, { autoAlpha: 0, ease: Power1.easeInOut }, 0)
    .to('#journey1, #journey2, #journey3', 0.7, { width: 360, marginLeft: 0, ease: Power1.easeInOut }, 0)
    .to('.slide', 0.7, { width: 360, marginLeft: 0, ease: Power1.easeInOut, onStart: openFullContent }, 0)
    .to('.feature_content', 0.7, { y: 160, ease: Power1.easeInOut }, 0)
    .to('.gradientimage', 0.5, { opacity: 0, ease: Power1.easeInOut }, 0)    



    .to('.txtIsi', 0.7, { opacity: 1, ease: Power1.easeInOut }, 0.7)
    //.to('.gradientIsi', 0.3, { opacity: 1, ease: Power1.easeInOut }, 0.5)  
    .to('.txtIsiVideo', 0.7, { opacity: 1, ease: Power1.easeInOut }, 0.7)

    .to('.icon-readMore-video', 0.7, { autoAlpha: 0, ease: Power1.easeInOut }, 0)
    .to('.icon-play', 0.7, { autoAlpha: 0, ease: Power1.easeInOut }, 0)            
    .to('.contBar', 0.7, { autoAlpha: 0, ease: Power1.easeInOut }, 0)
    .to(['.icon-back-video'], 0.6, { autoAlpha: 1, top: 20, pointerEvents: 'all', ease: Power1.easeInOut }, 0.2)
    .to(['.icon-play-back'], 0.6, { autoAlpha: 0, top: 20, pointerEvents: 'all', ease: Power1.easeInOut }, 0.2)
    .to('.tittle_main', 0.7, { width: "250px", ease: Power1.easeInOut, onComplete: function() {
      Enabler.counter('readMore-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );

      featureContent[currentSlide].classList.add('--active');


    }}, 0);

  tl_video
    .to('.arrow', 0.5, { autoAlpha: 0, ease: Power1.easeInOut }, 0)
    .to('#journey1, #journey2, #journey3', 0.7, { width: 360, marginLeft: 0, ease: Power1.easeInOut }, 0)
    .to('.slide', 0.7, { width: 360, marginLeft: 0, ease: Power1.easeInOut, onStart: openFullContentVideo }, 0)
    .to('.feature_content', 0.7, { y: 160, ease: Power1.easeInOut }, 0)
    .to('.gradientimage', 0.5, { opacity: 0, ease: Power1.easeInOut }, 0)    
    .to('.imgJourneyVideo', 0.01, { opacity: 0, ease: Power1.easeInOut }, 0)        

    .to('.txtIsi', 0.7, { opacity: 1, ease: Power1.easeInOut }, 0.7)
    //.to('.gradientIsi', 0.3, { opacity: 1, ease: Power1.easeInOut }, 0.5)
    .to('.txtIsiVideo', 0.7, { opacity: 1, ease: Power1.easeInOut }, 0.7)

    .to('.icon-readMore-video', 0.7, { autoAlpha: 0, ease: Power1.easeInOut }, 0)
    .to('.icon-play', 0.7, { autoAlpha: 0, ease: Power1.easeInOut }, 0)
    .to('.contBar', 0.7, { autoAlpha: 0, ease: Power1.easeInOut }, 0)
    .to(['.icon-back-video'], 0.6, { autoAlpha: 1, top: 225, pointerEvents: 'all', ease: Power1.easeInOut }, 0.2)
    .to(['.icon-play-back'], 0.6, { autoAlpha: 0, top: 225, pointerEvents: 'all', ease: Power1.easeInOut }, 0.2)
    .to('.tittle_main', 0.7, { width: "250px", ease: Power1.easeInOut, onComplete: function() {
      Enabler.counter('watchVideo-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );

      featureContent[currentSlide].classList.add('--active');
    } }, 0)
    .to('.videoContainer', 0.7, { display:"block", opacity: 1, ease: Power1.easeInOut}, 0.2);


tl_set
  .to(slidesContainer, 0.01, { opacity: 0}, 0)
  .to(slidesContainer[0], 0.01, { opacity: 1}, 0)
  .to(slidesContainer[1], 0.01, { x: 340}, 0)
  .to(slidesContainer[2], 0.01, { x: 680}, 0)
  .to(slidesContainer[3], 0.01, { x: 1020}, 0)
  .to(slidesContainer2, 0.01, { opacity: 0}, 0)
  .to(slidesContainer2[0], 0.01, { opacity: 1}, 0)          
  .to(slidesContainer2[1], 0.01, { x: 340}, 0)
  .to(slidesContainer2[2], 0.01, { x: 680}, 0)
  .to(slidesContainer2[3], 0.01, { x: 1020}, 0)
  .to(slidesContainer3, 0.01, { opacity: 0}, 0)
  .to(slidesContainer3[0], 0.01, { opacity: 1}, 0)          
  .to(slidesContainer3[1], 0.01, { x: 340}, 0)
  .to(slidesContainer3[2], 0.01, { x: 680}, 0)
 // .to(slidesContainer3[3], 0.01, { x: 1020}, 0)
  .set('.replayBtn', { opacity: 0, pointerEvents: 'none' }, 0);


}




// IF pc or mac is being use.
onInitHandler = function (){
	expandedPanel.style.display = "none";
  collapsedPanel.style.display = "block";

  window.addEventListener('resize', adjustMargins);
  window.addEventListener('orientationchange', adjustMargins);

  globalcta.addEventListener('click', function() {
    Enabler.exit('Global cta', "https://www.digitaland.tv");
    introDiv.style.display = "block";
    expandedDiv.style.display = "none";
    Enabler.requestCollapse();
  });

  logo.addEventListener('click', function() {
    Enabler.exit('logo', "https://www.enbrel.com/rheumatoid-arthritis/ra-enbrel-treatment-results/");
    //introDiv.style.display = "block";
    //expandedDiv.style.display = "none";
    //Enabler.requestCollapse();
  });  

  url_main.forEach(function(button) {
    button.addEventListener('click', click_url);
  });

	arrowLeft.addEventListener('click', function() {
    if(!TweenMax.isTweening('.slidesContainer')) {
      resetSlideExpand();
      stopAllVideos();
      closeFullContent();
      closeFullContentVideo();

      if(currentSlide > 0) {
        currentSlide--;
        slideLeft();

        if(currentSlide == 0) {
          arrowLeft.style.display = 'none';
        } else if(currentSlide == maxSlideIndex -1) {
          arrowRight.style.display = 'block';
        }
      }
    }

 slider1 = false;
 slider2 = false;
 slider3 = false;
 slider4 = false;

        currentSlideJr = currentSlide;
        currentJourneybutton = currentJourney;


        if(currentSlide == 0) {
        Enabler.stopTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 2) );
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        }

        if(currentSlide == 1) {
        Enabler.stopTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 2) );
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        }   

        if(currentSlide == 2) {
        Enabler.stopTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 2) );
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        } 

        if(currentSlide == 3) {
        Enabler.stopTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 2) );
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        }                       


  });
  arrowRight.addEventListener('click', function() {
    if(!TweenMax.isTweening('.slidesContainer')) {
      resetSlideExpand();
      stopAllVideos();
      closeFullContent();
      closeFullContentVideo();

      if(currentSlide < maxSlideIndex) {
        currentSlide++;
        slideRight();
        if (currentSlide == 1) {
          arrowLeft.style.display = 'block';
        } else if (currentSlide == maxSlideIndex) {
          arrowRight.style.display = 'none';
        }
      } 
    }

        currentSlideJr = currentSlide;
        currentJourneybutton = currentJourney;

        if(currentSlide == 0) {
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        Enabler.stopTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide) );
        }

        if(currentSlide == 1) {
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        Enabler.stopTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide) );
        }   

        if(currentSlide == 2) {
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        Enabler.stopTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide) );
        } 

        if(currentSlide == 3) {
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        Enabler.stopTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide) );
        }  

  });

  videoContainers.forEach(function(videoContainer) {
    videoContainer.addEventListener('click', function(){
      toggleVideo(this.children[0])
    });
  });

  videoFullScreenBtns.forEach(function(fullscreenBtn) {
    fullscreenBtn.addEventListener('click', toggleFullscreen, false);
    fullscreenBtn.addEventListener('tap', toggleFullscreen, false);
  });

  videoReplayBtns.forEach(function(replayBtn) {
    replayBtn.addEventListener('click', replayVideo, false);
    replayBtn.addEventListener('tap', replayVideo, false);
  })

  bottomJourneys.forEach(function(journey) {
    journey.addEventListener('click', clickJourneyButtons)
  });

  iconReadMore.forEach(function(button) {
    button.addEventListener('click', click_readMore);
  });
  iconBack.forEach(function(button){
    button.addEventListener('click', click_readMore_back);
  });
  iconReadMoreVideo.forEach(function(button){
    button.addEventListener('click', click_readMore_video);
  });
  iconBackVideo.forEach(function(button){
    button.addEventListener('click', click_readMore_video_back);
  });
  iconPlay.forEach(function(button){
    button.addEventListener('click', click_video);
  });
  iconPlayBack.forEach(function(button){
    console.log('add playBack event', button)
    button.addEventListener('click', click_video_back);
  });
  contBar.forEach(function(button){
    button.addEventListener('click', click_contbar);
  });

  journey1_button.addEventListener('click', openJ1);
  journey2_button.addEventListener('click', openJ2);
  journey3_button.addEventListener('click', openJ3);

	/*onExpandHandler(); // Auto expand when
  	autoCol = setTimeout(function(){
		Enabler.requestFullscreenCollapse();
		expandedPanel.style.display = "none";
		collapsedPanel.style.display = "block";
		clearTimeout(autoCol);
	}, 7000);*/





}

// IF mobile devices is being use.
orientateHandler = function	() {
}

collapseFinishHandler = function () {
	//console.log("== collapseFinishHandler ==");
}
expandFinishHandler = function () {
	//console.log("== expandFinishHandler ==");
}

onExpandHandler = function(e){
  collapsedPanel.style.display = "none";
  expandedPanel.style.display = "block";

  currentJourney = 1;
  featureContent = journeyContents[0];

  journey1_button.style.transform = 'translateX(0)';
  journey1_button.dataset.pos = 'left';
  journey2_button.style.transform = 'translateX(0)';
  journey2_button.dataset.pos = 'left';
  journey3_button.style.transform = 'translateX(168)';
  journey3_button.dataset.pos = 'right';

  TweenMax.set(journey1, {autoAlpha: 1, display: 'block', top: 0}, 0)
  TweenMax.set(journey2, {opacity: 0, display: 'none', visibility: 'visible', top: 0, height: '100%'}, 0)
  TweenMax.set(journey3, {opacity: 0, display: 'none', visibility: 'visible', top: 0, height: '100%'}, 0)
  TweenMax.fromTo('#expanded', 0.7, {opacity: 0, y: 500}, { opacity: 1, y: 0, ease: Power1.easeInOut, onComplete: function(){
    adjustMargins();
    
    Enabler.requestFullscreenExpand();
  } });

    Enabler.startTimer('Timer-ExpandAd');
    j1 = true;
  //  Enabler.startTimer('Timer-Journey-j1');   
    
    Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );

        currentSlideJr = currentSlide;
        currentJourneybutton = currentJourney;    

resetSlidesState();


}

onCollapsedExitHandler = function(e){
	onExpandHandler();
	//Enabler.exit('HTML5_Collapsed_Clickthrough');

  adjustMargins();
  journey2.style.display = 'none';
  journey3.style.display = 'none';

  currentSlide = 0;
  arrowLeft.style.display = 'none';


}

onExitHandler = function(e){
	Enabler.exit('HTML5_Expanded_Clickthrough', window.clickTag);
	clearTimeout(autoCol);
	Enabler.requestFullscreenCollapse();
	expandedPanel.style.display = "none";
	collapsedPanel.style.display = "block";
}

onCloseHandler = function(e){
	Enabler.counter('HTML5_Manual_Close');
	clearTimeout(autoCol);
	closeAd();
      Enabler.stopTimer('Timer-ExpandAd');



if(readMoreOpened == true){
Enabler.stopTimer('Timer-readMore-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
}

if(videoOpened == true){
Enabler.stopTimer('Timer-watchVideo-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
}

  Enabler.stopTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide +1) );


}

closeAd = function(){
	Enabler.requestFullscreenCollapse();
	Enabler.reportManualClose();
}

collapseStartHandler = function(e) {
  TweenMax.fromTo(collapsedPanel, 0.4, { opacity: 0, display: 'block'}, { opacity: 1, ease: Power1.easeInOut}, 0)
  TweenMax.to(expandedPanel, 0.4, { opacity: 0, ease: Power1.easeInOut, onComplete: function() {
    resetAnimationsCollapse();

    expandedPanel.style.display = "none";
    Enabler.finishFullscreenCollapse();
  } }, 0);
}

expandStartHandler = function(e) {
	Enabler.finishFullscreenExpand();
}

adjustMargins = function() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  var vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', vh + 'px');

  // Get the margin from the difference between the width of container and 320px
  var margin = container.clientWidth - 320;
  // Add top and bottom margin to mainContent
  mainContent.style.height = 'calc(100% - '+ margin +'px)';
}

toggleVideo = function(video) {
  if(video.paused) {
      video.play()
  } else {
      video.pause()
  }
}

stopAllVideos = function() {
  videos.forEach(function(video) {
    video.pause()
    video.currentTime = 0;
  })

  TweenMax.set('.customElements', { opacity: 1}, 0);
  TweenMax.set('.replayBtn', { opacity: 0, pointerEvents: 'none'}, 0);
}

resetAnimationsCollapse = function() {
  stopAllVideos();
  resetContBar();
  closeFullContent();
  closeFullContentVideo();
  resetSlideExpand();
  resetSlidesState();  

  TweenMax.set(journey1_button, {opacity: 0, pointerEvents: 'none'}, 0)
  TweenMax.set(journey2_button, {opacity: 1, pointerEvents: 'all', x:0}, 0)
  TweenMax.set(journey3_button, {opacity: 1, pointerEvents: 'all', x:168}, 0)
};

clickJourneyButtons = function(e) {
  var jIndex = parseInt(e.target.dataset.index);
  var jPos = e.target.dataset.pos;
  var oldX;
  var newX;

        currentSlideJr = currentSlide;
        currentJourneybutton = currentJourney;
        currentSlideButton = currentSlideJr;    
  
  stopAllVideos();
  resetContBar();
  closeFullContent();
  closeFullContentVideo();
  resetSlideExpand();
  resetSlidesState();


  
  featureContent = journeyContents[jIndex - 1];
  
  if (jPos == 'left') {
    oldX = -200;
    newX = 0;
  } else {
    oldX = 368;
    newX = 168;
  }

  if (jIndex == 3) {
    maxSlideIndex = 2
  } else {
    maxSlideIndex = 3
  }

  switch(currentJourney) {
    case 1:
      TweenMax.fromTo('#journey1_button', 0.7,
      {opacity: 0, x: oldX}, {opacity: 1, pointerEvents: 'all', x: newX, ease: Power1.easeInOut, onComplete: function() {
        journey1.style.display = 'none';
      }}, 0.2);

      journey1_button.dataset.pos = jPos;
      break;
    case 2:
      TweenMax.fromTo('#journey2_button', 0.7,
      {opacity: 0, x: oldX}, {opacity: 1, pointerEvents: 'all', x: newX, ease: Power1.easeInOut, onComplete: function() {
        journey2.style.display = 'none';
      } }, 0.2);

      journey2_button.dataset.pos = jPos;
      break;
    case 3:
      TweenMax.fromTo('#journey3_button', 0.7,
      {opacity: 0, x: oldX}, {opacity: 1, pointerEvents: 'all', x: newX, ease: Power1.easeInOut, onComplete: function() {
        journey3.style.display = 'none';
      } }, 0.2);

      journey3_button.dataset.pos = jPos;
      break;
  }

  e.target.style.opacity = 0;
  e.target.style.pointerEvents = 'none';
  currentJourney = jIndex;
};

resetSlideExpand = function() {
  tl_video.seek(0);
  tl_video.pause();
  tl_readMore.seek(0);
  tl_readMore.pause();
  tl_readMoreVideo.seek(0);
  tl_readMoreVideo.pause();
  videoOpened = false;
  readMoreOpened = false;



};

resetSlidesState = function() {
  currentSlide = 0;
  TweenMax.set('.slide', {opacity: 0}, 0); 
  TweenMax.set('[id^="slide1"]', {opacity: 1}, 0.1);
  TweenMax.set(['.slidesContainer', '.slidesContainer2', '.slidesContainer3'], {x: 0}, 0.1);

  arrowLeft.style.display = 'none';
  arrowRight.style.display = 'block';
};

resetContBar = function() {
  journeyContainer.classList.remove('--opened');
  TweenMax.set(journeyContainer, { height: "calc(100% - 150px)"}, 0);
  TweenMax.set('.barArrow', { rotation: 0}, 0);
};

openFullContent = function() {
  fullContents.forEach(function(elm) {
    elm.classList.add('--opened')
  });
};


openFullContentVideo = function() {
  fullContents.forEach(function(elm) {
    elm.classList.add('--openedVideo')
  });
};

closeFullContent = function() {
  featureContent[currentSlide].classList.remove('--active');
  fullContents.forEach(function(elm) {
    elm.classList.remove('--opened')
  });

};


closeFullContentVideo = function() {
  featureContent[currentSlide].classList.remove('--active');
  fullContents.forEach(function(elm) {
    elm.classList.remove('--openedVideo')
  });

};


click_readMore = function() {
  readMoreOpened = true;
  readMoreTimer = false;    

  tl_readMore.play();
    Enabler.startTimer('Timer-readMore-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );

$('.txtIsi').css({'height':'calc(100% - 85px)'});

TweenMax.to('.gradientIsi', 0.01, { opacity: 1, ease: Power1.easeInOut, delay: 0.5 }, 0)

};

click_readMore_back = function() {
  closeFullContent();
  closeFullContentVideo();
  closeContBar();

  tl_readMore.reverse();

  videoOpened = false;
  readMoreOpened = false;

  videoTimer = false;
  readMoreTimer = false;  
    Enabler.stopTimer('Timer-readMore-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
    TweenMax.to('.gradientIsi', 0.01, { opacity: 0, ease: Power1.easeInOut, delay: 0 }, 0)
};

click_readMore_video = function() {
  readMoreOpened = true;
  readMoreTimer = false;    
  tl_readMoreVideo.play();

      Enabler.startTimer('Timer-readMore-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );

 $('.txtIsi').css({'height':'calc(100% - 85px)'});
TweenMax.to('.gradientIsi', 0.01, { opacity: 1, ease: Power1.easeInOut, delay: 0.5 }, 0)

};

click_readMore_video_back = function() {
  closeFullContent();
  closeFullContentVideo();
  stopAllVideos();
  closeContBar();
  
  if (videoOpened) {
    tl_video.reverse();
  } else {
    tl_readMoreVideo.reverse();
  }

  videoOpened = false;
  readMoreOpened = false;

  videoTimer = false;
  readMoreTimer = false;    

        Enabler.stopTimer('Timer-readMore-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        TweenMax.to('.gradientIsi', 0.01, { opacity: 0, ease: Power1.easeInOut, delay: 0 }, 0)

};

click_video = function(e) {
  initVideo();

  videoOpened = true;
  videoTimer = true;

  tl_video.play();

  Enabler.startTimer('Timer-watchVideo-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );

 $('.txtIsi').css({'height':'calc(100% - 185px)'});
TweenMax.to('.gradientIsi', 0.01, { opacity: 1, ease: Power1.easeInOut, delay: 0.5 }, 0)

}

initVideo = function() {
  var index = (currentSlide+1) / 2 -1;
  currentVideo = videos[index];
  currentVideo.play();
  videoTotalTimes[index].innerHTML = '00:' + parseInt(currentVideo.duration);
  currentTimer = videoCurrentTimes[index];
  currentProgress = videoProgressBars[index].children[0];

  currentVideo.ontimeupdate = updateVideo;
}

updateVideo = function(e) {
  var percentage = (currentVideo.currentTime / currentVideo.duration) * 100;

  if(percentage == 100) {
    TweenMax.to('.customElements', 0.3, { opacity: 0, ease: Power1.easeInOut} )
    TweenMax.to('.replayBtn', 0.3, { opacity: 1, pointerEvents: 'all', ease: Power1.easeInOut} )
  } else {
    currentTimer.innerHTML = '00:' + ('0' + parseInt(currentVideo.currentTime)).slice(-2);
    currentProgress.style.width = percentage + '%';
  }
}

toggleFullscreen = function() {
	if (currentVideo.requestFullScreen) {
		currentVideo.requestFullScreen();
	} else if (currentVideo.webkitRequestFullScreen) {
		currentVideo.webkitRequestFullScreen();
	} else if (currentVideo.webkitEnterFullScreen) {
    currentVideo.webkitEnterFullScreen();
  } else if (currentVideo.mozRequestFullScreen) {
		currentVideo.mozRequestFullScreen();
  }
  setTimeout(function() {
    currentVideo.play();
  }, 1)
}

replayVideo = function() {
  TweenMax.to('.customElements', 0.3, { opacity: 1, ease: Power1.easeInOut });
  TweenMax.to('.replayBtn', 0.3, { opacity: 0, pointerEvents: 'none', ease: Power1.easeInOut, onComplete: function() {
    currentVideo.currentTime = 0;
    currentVideo.play();
  }} );

  Enabler.counter('replayVideo_j1_slide' + parseInt(currentSlide + 1));
}

click_video_back = function() {
  closeFullContentVideo();
  closeContBar();

  tl_video.reverse();

  videoOpened = false;
  readMoreOpened = false;

  videoTimer = false;
  readMoreTimer = false;    

  Enabler.stopTimer('Timer-watchVideo-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );

  TweenMax.to('.gradientIsi', 0.01, { opacity: 0, ease: Power1.easeInOut, delay: 0 }, 0)

}

click_contbar = function() {
  if(journeyContainer.classList.contains('--opened')) {
    closeContBar();
  } else {
    openContBar();
  }
}

openContBar = function() {
  journeyContainer.classList.add('--opened')
  TweenMax.to(journeyContainer, 0.5, { height: "calc(100% - 100px)", ease: Power1.easeInOut }, 0);
  TweenMax.to('.barArrow', 0.5, { rotation: 180, ease: Power1.easeInOut}, 0);

  Enabler.counter('expandText-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );  
}

closeContBar = function() {
  journeyContainer.classList.remove('--opened')
  TweenMax.to(journeyContainer, 0.5, { height: "calc(100% - 150px)", ease: Power1.easeInOut }, 0);
  TweenMax.to('.barArrow', 0.5, { rotation: 0, ease: Power1.easeInOut}, 0);

  Enabler.counter('closeText-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
}

slideRight = function() {
  TweenMax.to('.slidesContainer', 0.5, { x: "-=340" , ease: Power1.easeInOut }, 0);
  TweenMax.to(slidesContainer, 0.5, { opacity: 0 , ease: Power1.easeInOut }, 0);        
  TweenMax.to(slidesContainer[currentSlide], 0.5, { opacity: 1 , ease: Power1.easeInOut }, 0);

  TweenMax.to('.slidesContainer2', 0.5, { x: "-=340" , ease: Power1.easeInOut }, 0);
  TweenMax.to(slidesContainer2, 0.5, { opacity: 0 , ease: Power1.easeInOut }, 0);        
  TweenMax.to(slidesContainer2[currentSlide], 0.5, { opacity: 1 , ease: Power1.easeInOut }, 0);

  if(currentSlide < 3) {
    TweenMax.to('.slidesContainer3', 0.5, { x: "-=340" , ease: Power1.easeInOut }, 0);
    TweenMax.to(slidesContainer3, 0.5, { opacity: 0 , ease: Power1.easeInOut }, 0);        
    TweenMax.to(slidesContainer3[currentSlide], 0.5, { opacity: 1 , ease: Power1.easeInOut }, 0);
  }

  Enabler.counter('next-j' + currentJourney + '-slide' + parseInt(currentSlide) );

};
slideLeft = function() {
  TweenMax.to('.slidesContainer', 0.5, { x: "+=340", ease: Power1.easeInOut }, 0);
  TweenMax.to(slidesContainer, 0.5, { opacity: 0 , ease: Power1.easeInOut }, 0);    
  TweenMax.to(slidesContainer[currentSlide], 0.5, { opacity: 1 , ease: Power1.easeInOut }, 0);

  TweenMax.to('.slidesContainer2', 0.5, { x: "+=340", ease: Power1.easeInOut }, 0);
  TweenMax.to(slidesContainer2, 0.5, { opacity: 0 , ease: Power1.easeInOut }, 0);    
  TweenMax.to(slidesContainer2[currentSlide], 0.5, { opacity: 1 , ease: Power1.easeInOut }, 0);     

  TweenMax.to('.slidesContainer3', 0.5, { x: "+=340", ease: Power1.easeInOut }, 0);
  TweenMax.to(slidesContainer3, 0.5, { opacity: 0 , ease: Power1.easeInOut }, 0);    
  TweenMax.to(slidesContainer3[currentSlide], 0.5, { opacity: 1 , ease: Power1.easeInOut }, 0);

  Enabler.counter('prev-j' + currentJourney + '-slide' + parseInt(currentSlide + 2) );
};

openJ1 = function(e) {
  Enabler.counter('changeJourney-j1-slide1');
      

  Enabler.stopTimer('Timer-Journey-j' + currentJourneybutton + '-slide' + parseInt(currentSlideButton +1) );

console.log('Timer-Journey-j' + currentJourneybutton + '-slide' + parseInt(currentSlideButton +1) );

        if(currentSlide == 0) {
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        }

        if(currentSlide == 1) {
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        }   

        if(currentSlide == 2) {
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        } 

        if(currentSlide == 3) {
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        }  


if(readMoreTimer == false){
Enabler.stopTimer('Timer-readMore-j' + currentJourneybutton + '-slide' + parseInt(currentSlideButton + 1) );
}

if(videoTimer == false){
Enabler.stopTimer('Timer-watchVideo-j' + currentJourneybutton + '-slide' + parseInt(currentSlideButton + 1) );
}

  videoTimer = false;

  readMoreTimer = false;  


  var jPos = e.target.dataset.pos;
  var tl_OpenJ1 = new TimelineMax({ paused: false });
  var newX;

  if (jPos == 'left') {
    newX = 0;
  } else {
    newX = 320;
  }

  tl_OpenJ1
    .fromTo('#journey1', 1, {x: newX, width: 0, height: "calc(0% + 100px)", top: "calc(100% + 16px)", rotation: 0.01, ease: Power1.easeOut }, {x: 0, width: 320, height: "calc(100% + 0px)", top: "calc(0% + 0px)"})
    .fromTo('#journey2', 0.9, {top: "calc(0% + 0px)", autoAlpha: 1}, { top: "calc(-100% + 16px)", autoAlpha: 0, ease: Power1.easeOut}, 0)
    .fromTo('#journey3', 0.9, {top: "calc(0% + 0px)", autoAlpha: 1}, { top: "calc(-100% + 16px)", autoAlpha: 0, ease: Power1.easeOut}, 0)
    
  journey1.style.display = 'block';
  TweenMax.to('#journey1', 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, 0);


TweenMax.to('.gradientIsi', 0.01, { opacity: 0, ease: Power1.easeInOut, delay: 0 }, 0)
  resetSlideExpand();

};

openJ2 = function(e) {
  Enabler.counter('changeJourney-j2-slide1');
  Enabler.stopTimer('Timer-Journey-j' + currentJourneybutton + '-slide' + parseInt(currentSlideButton +1) );


console.log('Timer-Journey-j' + currentJourneybutton + '-slide' + parseInt(currentSlideButton +1) );

        if(currentSlide == 0) {
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        }

        if(currentSlide == 1) {
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        }   

        if(currentSlide == 2) {
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        } 

        if(currentSlide == 3) {
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        }  

if(readMoreTimer == false){
Enabler.stopTimer('Timer-readMore-j' + currentJourneybutton + '-slide' + parseInt(currentSlideButton + 1) );
}

if(videoTimer == false){
Enabler.stopTimer('Timer-watchVideo-j' + currentJourneybutton + '-slide' + parseInt(currentSlideButton + 1) );
}

  videoTimer = false;
  readMoreTimer = false;  



  var jPos = e.target.dataset.pos;
  var tl_OpenJ2 = new TimelineMax({ paused: false });
  var newX;

  if (jPos == 'left') {
    newX = 0;
  } else {
    newX = 320;
  }

  tl_OpenJ2
    .fromTo('#journey2', 1, {x: newX, width: 0, height: "calc(0% + 100px)", top: "calc(100% + 16px)", rotation: 0.01, ease: Power1.easeOut }, {x: 0, width: 320, height: "calc(100% + 0px)", top: "calc(0% + 0px)"})
    .fromTo('#journey1', 0.9, {top: "calc(0% + 0px)", autoAlpha: 1}, { top: "calc(-100% + 16px)", autoAlpha: 0, ease: Power1.easeOut}, 0)
    .fromTo('#journey3', 0.9, {top: "calc(0% + 0px)", autoAlpha: 1}, { top: "calc(-100% + 16px)", autoAlpha: 0, ease: Power1.easeOut}, 0)

  journey2.style.display = 'block';
  TweenMax.to('#journey2', 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, 0);


TweenMax.to('.gradientIsi', 0.01, { opacity: 0, ease: Power1.easeInOut, delay: 0 }, 0)
  resetSlideExpand();


};

openJ3 = function(e) {
  Enabler.counter('changeJourney-j3-slide1');
  Enabler.stopTimer('Timer-Journey-j' + currentJourneybutton + '-slide' + parseInt(currentSlideButton +1) );

console.log('Timer-Journey-j' + currentJourneybutton + '-slide' + parseInt(currentSlideButton +1) );

        if(currentSlide == 0) {
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        }

        if(currentSlide == 1) {
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        }   

        if(currentSlide == 2) {
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        } 

        if(currentSlide == 3) {
        Enabler.startTimer('Timer-Journey-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
        }  

if(readMoreTimer == false){
Enabler.stopTimer('Timer-readMore-j' + currentJourneybutton + '-slide' + parseInt(currentSlideButton + 1) );
}

if(videoTimer == false){
Enabler.stopTimer('Timer-watchVideo-j' + currentJourneybutton + '-slide' + parseInt(currentSlideButton + 1) );
}
  videoTimer = false;
  readMoreTimer = false;  


  var jPos = e.target.dataset.pos;
  var tl_OpenJ3 = new TimelineMax({ paused: false });
  var newX;

  if (jPos == 'left') {
    newX = 0;
  } else {
    newX = 320;
  }
  
  tl_OpenJ3          
  .fromTo('#journey3', 1, {x: newX, width: 0, height: "calc(0% + 100px)", top: "calc(100% + 16px)", rotation: 0.01, ease: Power1.easeOut }, {x: 0, width: 320, height: "calc(100% + 0px)", top: "calc(0% + 0px)"})
  .fromTo('#journey1', 0.9, {top: "calc(0% + 0px)", autoAlpha: 1}, { top: "calc(-100% + 16px)", autoAlpha: 0, ease: Power1.easeOut}, 0)
  .fromTo('#journey2', 0.9, {top: "calc(0% + 0px)", autoAlpha: 1}, { top: "calc(-100% + 16px)", autoAlpha: 0, ease: Power1.easeOut}, 0)   

  journey3.style.display = 'block';         
  TweenMax.to('#journey3', 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, 0);


    TweenMax.to('.gradientIsi', 0.01, { opacity: 0, ease: Power1.easeInOut, delay: 0 }, 0)
  resetSlideExpand();

};

click_url = function(e) {
  //Enabler.counter('urlOpen-j' + currentJourney + '-slide' + parseInt(currentSlide + 1) );
  Enabler.exit('urlOpen-j' + currentJourney + '-slide' + parseInt(currentSlide + 1), window.clickTag);
};

enablers = function() {
  Enabler.counter('readMore-j1-slide1');        
  Enabler.counter('readMore-j1-slide2');        
  Enabler.counter('readMore-j1-slide3');        
  Enabler.counter('readMore-j1-slide4');

  Enabler.counter('readMore-j2-slide1');  
  Enabler.counter('readMore-j2-slide2');  
  Enabler.counter('readMore-j2-slide3');                    
  Enabler.counter('readMore-j2-slide4'); 

  Enabler.counter('readMore-j3-slide1');  
  Enabler.counter('readMore-j3-slide2');  
  Enabler.counter('readMore-j3-slide3');    


  Enabler.counter('next-j1-slide1');        
  Enabler.counter('next-j1-slide2');        
  Enabler.counter('next-j1-slide3');        
  Enabler.counter('next-j1-slide4');        

  Enabler.counter('next-j2-slide1');  
  Enabler.counter('next-j2-slide2');  
  Enabler.counter('next-j2-slide3');                    
  Enabler.counter('next-j2-slide4'); 

  Enabler.counter('next-j3-slide1');  
  Enabler.counter('next-j3-slide2');  
  Enabler.counter('next-j3-slide3');   


  Enabler.counter('prev-j1-slide1');        
  Enabler.counter('prev-j1-slide2');        
  Enabler.counter('prev-j1-slide3');        
  Enabler.counter('prev-j1-slide4');        

  Enabler.counter('prev-j2-slide1');  
  Enabler.counter('prev-j2-slide2');  
  Enabler.counter('prev-j2-slide3');                    
  Enabler.counter('prev-j2-slide4'); 

  Enabler.counter('prev-j3-slide1');  
  Enabler.counter('prev-j3-slide2');  
  Enabler.counter('prev-j3-slide3');    


  Enabler.counter('watchVideo-j1-slide1');        
  Enabler.counter('watchVideo-j1-slide2');        
  Enabler.counter('watchVideo-j1-slide3');        
  Enabler.counter('watchVideo-j1-slide4');        

  Enabler.counter('watchVideo-j2-slide1');  
  Enabler.counter('watchVideo-j2-slide2');  
  Enabler.counter('watchVideo-j2-slide3');                    
  Enabler.counter('watchVideo-j2-slide4'); 

  Enabler.counter('watchVideo-j3-slide1');  
  Enabler.counter('watchVideo-j3-slide2');  
  Enabler.counter('watchVideo-j3-slide3'); 


  Enabler.counter('expandText-j1-slide1');        
  Enabler.counter('expandText-j1-slide2');        
  Enabler.counter('expandText-j1-slide3');        
  Enabler.counter('expandText-j1-slide4');        

  Enabler.counter('expandText-j2-slide1');  
  Enabler.counter('expandText-j2-slide2');  
  Enabler.counter('expandText-j2-slide3');                    
  Enabler.counter('expandText-j2-slide4'); 

  Enabler.counter('expandText-j3-slide1');  
  Enabler.counter('expandText-j3-slide2');  
  Enabler.counter('expandText-j3-slide3'); 


  Enabler.counter('closeText-j1-slide1');        
  Enabler.counter('closeText-j1-slide2');        
  Enabler.counter('closeText-j1-slide3');        
  Enabler.counter('closeText-j1-slide4');        

  Enabler.counter('closeText-j2-slide1');  
  Enabler.counter('closeText-j2-slide2');  
  Enabler.counter('closeText-j2-slide3');                    
  Enabler.counter('closeText-j2-slide4'); 

  Enabler.counter('closeText-j3-slide1');  
  Enabler.counter('closeText-j3-slide2');  
  Enabler.counter('closeText-j3-slide3');  


  Enabler.exit('urlOpen-j1-slide1');        
  Enabler.exit('urlOpen-j1-slide2');        
  Enabler.exit('urlOpen-j1-slide3');        
  Enabler.exit('urlOpen-j1-slide4');        

  Enabler.exit('urlOpen-j2-slide1');  
  Enabler.exit('urlOpen-j2-slide2');  
  Enabler.exit('urlOpen-j2-slide3');                    
  Enabler.exit('urlOpen-j2-slide4'); 

  Enabler.exit('urlOpen-j3-slide1');  
  Enabler.exit('urlOpen-j3-slide2');  
  Enabler.exit('urlOpen-j3-slide3');            
  
  Enabler.counter('replayVideo_j1_slide2');
  Enabler.counter('replayVideo_j1_slide4');



/*Timers*/
  Enabler.startTimer('Timer-readMore-j1-slide1');        
  Enabler.startTimer('Timer-readMore-j1-slide2');        
  Enabler.startTimer('Timer-readMore-j1-slide3');        
  Enabler.startTimer('Timer-readMore-j1-slide4');

  Enabler.startTimer('Timer-readMore-j2-slide1');  
  Enabler.startTimer('Timer-readMore-j2-slide2');  
  Enabler.startTimer('Timer-readMore-j2-slide3');                    
  Enabler.startTimer('Timer-readMore-j2-slide4'); 

  Enabler.startTimer('Timer-readMore-j3-slide1');  
  Enabler.startTimer('Timer-readMore-j3-slide2');  
  Enabler.startTimer('Timer-readMore-j3-slide3');   

  Enabler.startTimer('Timer-watchVideo-j1-slide1');        
  Enabler.startTimer('Timer-watchVideo-j1-slide2');        
  Enabler.startTimer('Timer-watchVideo-j1-slide3');        
  Enabler.startTimer('Timer-watchVideo-j1-slide4');        

  Enabler.startTimer('Timer-watchVideo-j2-slide1');  
  Enabler.startTimer('Timer-watchVideo-j2-slide2');  
  Enabler.startTimer('Timer-watchVideo-j2-slide3');                    
  Enabler.startTimer('Timer-watchVideo-j2-slide4'); 

  Enabler.startTimer('Timer-watchVideo-j3-slide1');  
  Enabler.startTimer('Timer-watchVideo-j3-slide2');  
  Enabler.startTimer('Timer-watchVideo-j3-slide3'); 



  Enabler.stopTimer('Timer-readMore-j1-slide1');        
  Enabler.stopTimer('Timer-readMore-j1-slide2');        
  Enabler.stopTimer('Timer-readMore-j1-slide3');        
  Enabler.stopTimer('Timer-readMore-j1-slide4');

  Enabler.stopTimer('Timer-readMore-j2-slide1');  
  Enabler.stopTimer('Timer-readMore-j2-slide2');  
  Enabler.stopTimer('Timer-readMore-j2-slide3');                    
  Enabler.stopTimer('Timer-readMore-j2-slide4'); 

  Enabler.stopTimer('Timer-readMore-j3-slide1');  
  Enabler.stopTimer('Timer-readMore-j3-slide2');  
  Enabler.stopTimer('Timer-readMore-j3-slide3');   
  
  Enabler.stopTimer('Timer-watchVideo-j1-slide1');        
  Enabler.stopTimer('Timer-watchVideo-j1-slide2');        
  Enabler.stopTimer('Timer-watchVideo-j1-slide3');        
  Enabler.stopTimer('Timer-watchVideo-j1-slide4');        

  Enabler.stopTimer('Timer-watchVideo-j2-slide1');  
  Enabler.stopTimer('Timer-watchVideo-j2-slide2');  
  Enabler.stopTimer('Timer-watchVideo-j2-slide3');                    
  Enabler.stopTimer('Timer-watchVideo-j2-slide4'); 

  Enabler.stopTimer('Timer-watchVideo-j3-slide1');  
  Enabler.stopTimer('Timer-watchVideo-j3-slide2');  
  Enabler.stopTimer('Timer-watchVideo-j3-slide3'); 


  Enabler.startTimer('Timer-Journey-j1-slide1');
  Enabler.startTimer('Timer-Journey-j1-slide2');
  Enabler.startTimer('Timer-Journey-j1-slide3');
  Enabler.startTimer('Timer-Journey-j1-slide4');

  Enabler.stopTimer('Timer-Journey-j1-slide1');
  Enabler.stopTimer('Timer-Journey-j1-slide2');
  Enabler.stopTimer('Timer-Journey-j1-slide3');
  Enabler.stopTimer('Timer-Journey-j1-slide4');

  Enabler.startTimer('Timer-Journey-j2-slide1');
  Enabler.startTimer('Timer-Journey-j2-slide2');
  Enabler.startTimer('Timer-Journey-j2-slide3');
  Enabler.startTimer('Timer-Journey-j2-slide4');

  Enabler.stopTimer('Timer-Journey-j2-slide1');
  Enabler.stopTimer('Timer-Journey-j2-slide2');
  Enabler.stopTimer('Timer-Journey-j2-slide3');
  Enabler.stopTimer('Timer-Journey-j2-slide4');  

  Enabler.startTimer('Timer-Journey-j3-slide1');
  Enabler.startTimer('Timer-Journey-j3-slide2');
  Enabler.startTimer('Timer-Journey-j3-slide3');
  Enabler.startTimer('Timer-Journey-j3-slide4');

  Enabler.stopTimer('Timer-Journey-j3-slide1');
  Enabler.stopTimer('Timer-Journey-j3-slide2');
  Enabler.stopTimer('Timer-Journey-j3-slide3');
  Enabler.stopTimer('Timer-Journey-j3-slide4');



/*timers*/





} 