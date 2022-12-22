var wave1 = $('#feel-the-wave').wavify({
    height: 40,
    bones: 4,
    amplitude: 60,
    color: '#e9e9e9',
    speed: .15
  });
  
  var wave2 = $('#feel-the-wave-two').wavify({
    height: 30,
    bones: 6,
    amplitude: 40,
    color: '#ffffff',
    speed: .25
  });
  
  var colors = ['rgba(255, 281, 75, .8)', '#dc75ff', '#9d9ade', '#6cd7ee', '#aceeae']
  
  $("[data-pause]").on('click', function(){
    wave1.pause();
    wave2.pause();
    return false;
  });
  
  $("[data-play]").on('click', function(){
    wave1.play();
    wave2.play();
    return false;
  });
  
  $("[data-color]").on('click', function(){
    wave1.updateColor({
      color: colors[Math.floor(Math.random()*colors.length)],
      timing: 5
    });
    wave2.updateColor({
      color: colors[Math.floor(Math.random()*colors.length)],
      timing: 3
    });
    return false;
  });
  




  var tl_circularLeft = circleLeft(".banner-image", 5, 10);


  function circleLeft(obj, movX, movY) {
    var tl_circularLeft = new TimelineMax({ repeat: -1, repeatDelay: 0, delay: 0 });
    tl_circularLeft
    .to(obj, 4, {
      bezier: {
        type: "quadratic",
        values:[
          /*p1*/{ x: 0, y: 0, rotation: 0.5 }, { x: movX, y: 0, rotation: 0.5 }, { x: movX, y: movX, rotation: 0.5 },
          /*p2*/{ x: movX, y: movY, rotation: 0.5 }, { x: 0, y: movY, rotation: 0.5 },
          /*p3*/{ x: -movX, y: movY, rotation: 0.5 }, { x: -movX, y: movX, rotation: 0.5 },
          /*p4*/{ x: -movX, y: 0, rotation: 0.5 }, { x: 0, y: 0, rotation: 0.5 }],
        autoRotate: false
      },
      ease: Linear.easeNone
    }, 0);
    
    return tl_circularLeft;
    }

    const nameIframe = document.querySelector('iframe');



    $('[id*="Banner-"]').on('mouseenter touch', function(e){
      console.log('click', this)
      let index = $(this).attr('id').split('-')[1];
      let elem = $('[id*="Banner-'+index+'"]');
  
      this.src += '';
    
          $('[id*="Banner-"]').css({'opacity': '1'});
          $('[id*="Banner-"]').not(elem).css({  'opacity': '0.25'});

    //    console.log(e.elem);    
    });  

