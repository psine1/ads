//PRELOAD DE IMG
this.addEventListener('DOMContentLoaded', preloadImages, true);

var loadedImages = 0;
//ACA HAY QUE CARGAR LAS IMAGENES QUE SE USEN
var imageArray = [
  'copy-01-01.png',
  'copy-02-01.png',
  'copy-03-01.png',
  'copy-04-01.png',
  'cta.png',
  'img-snow.jpg',
  'logo.png',
  'copyright.png',
  'ink-side.png',
];

function preloadImages(e) {
  for (var i = 0; i < imageArray.length; i++) {
    var tempImage = new Image();
    tempImage.addEventListener('load', trackProgress, true);
    tempImage.src = 'images/' + imageArray[i];
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
if (
  navigator.userAgent.indexOf('MSIE') !== -1 ||
  navigator.appVersion.indexOf('Trident/') > 0
) {
}

// VARIABLES GLOBALES
// var _tt = new TimelineMax();

function initAnimations() {
  // _tt.timeScale(1);
  init();
}

//HANDLERS
function initHandlers() {
  var clicktag = document.getElementById('clickTag');

  clicktag.addEventListener('mouseup', function (event) {
    window.open(window.clickTag, '_blank');
  });

  clicktag.addEventListener('mouseenter', function (e) {
    if (ready) {
      a.enter();
    }
  });

  clicktag.addEventListener('mouseleave', function (e) {
    if (ready) {
      a.leave();
    }
  });

  var a = {
    enter: function () {
      console.log('enter');
      var tl = gsap.timeline({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl.to('.cta', { transformOrigin: '50% 50%', scale: 1.08, y: -25 })
        .to('.cover', { y: -545 - 10 }, '<')
        .to('.logo', { y: -10, scale: 0.9, transformOrigin: '50% 50%' }, '<');
    },
    leave: function () {
      console.log('leave');
      var tl = gsap.timeline({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl.to('.cta', { transformOrigin: '50% 50%', scale: 1, y: 0 })
        .to('.cover', { y: -545 }, '<')
        .to('.logo', { y: 0, scale: 1, transformOrigin: '50% 50%' }, '<');
    },
  };
}
