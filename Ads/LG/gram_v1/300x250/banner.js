var myBanner = myBanner || {};
myBanner.main = function() {

	var width = 300;
	var height = 250;
	var banner = myBanner.createElement({id: "banner", width: width, height: height, overflow: "hidden", cursor: "pointer", zIndex: 1, parent: document.body});


	var images = [
		"frame_1_bg.jpg", 
		"txt_1.png", 
		"g.png", 
		"r.png", 
		"a.png", 
		"m.png", 
		"gram_overlay.png", 
		"frame_2_bg.jpg", 
		"txt_3.png", 
		"txt_2.png", 
		"laptop_main.png", 
		"txt_legal.png", 
		"pack.png", 
		"laptop_endframe.png", 
		"logo_win10.png", 
		"cta_txt.png", 
		"txt_5.png", 
		"txt_4.png", 
		"lg_logo_gray.png", 
		"lg_logo_white.png", 
	];

	myBanner.preloadImages(images, function() {

		/* Create elements
		================================================= */

		var frame_1 = myBanner.createElement({width: 300, height: 250, parent: banner});
			var frame_1_bg = myBanner.createElement({backgroundImage: "frame_1_bg.jpg", retina: true, parent: frame_1});
			var txt_1 = myBanner.createElement({backgroundImage: "txt_1.png", left: 50, top: 201, retina: true, parent: frame_1});
			var gram = myBanner.createElement({left: 20, top: 119, width: 264, height: 26, parent: frame_1});
				var g = myBanner.createElement({backgroundImage: "g.png", retina: true, parent: gram, rotation: 0.1, force3D: true});
				var r = myBanner.createElement({backgroundImage: "r.png", left: 41, top: 1, retina: true, parent: gram, rotation: 0.1, force3D: true});
				var a = myBanner.createElement({backgroundImage: "a.png", left: 205, top: 1, retina: true, parent: gram, rotation: 0.1, force3D: true});
				var m = myBanner.createElement({backgroundImage: "m.png", left: 240, top: 1, retina: true, parent: gram, rotation: 0.1, force3D: true});
			var gram_overlay = myBanner.createElement({backgroundImage: "gram_overlay.png", left: 0, top: 0, retina: true, parent: frame_1});
		var frame_2 = myBanner.createElement({top: -88, width: 600, height: 359, parent: banner});
			var frame_2_bg = myBanner.createElement({backgroundImage: "frame_2_bg.jpg", parent: frame_2, rotation: 0.1, force3D: true});
			var txt_3 = myBanner.createElement({backgroundImage: "txt_3.png", left: 474, top: 208, retina: true, parent: frame_2, rotation: 0.1, force3D: true});
			var txt_2 = myBanner.createElement({backgroundImage: "txt_2.png", left: 27, top: 206, retina: true, parent: frame_2, rotation: 0.1, force3D: true});
			var laptop_main_container = myBanner.createElement({left: 125, top: 129, width: 346, height: 191, parent: frame_2});
				var laptop_main = myBanner.createElement({backgroundImage: "laptop_main.png", retina: true, parent: laptop_main_container, rotation: 0.1, force3D: true});
		var endframe = myBanner.createElement({width: 300, height: 250, parent: banner});
			var txt_legal = myBanner.createElement({backgroundImage: "txt_legal.png", left: 10, top: 229, retina: true, parent: endframe});
			var pack_container = myBanner.createElement({left: 39, top: 73, width: 65, height: 89, parent: endframe});
				var pack_inner_container = myBanner.createElement({width: 65, height: 89, parent: pack_container});
					var pack = myBanner.createElement({backgroundImage: "pack.png", retina: true, parent: pack_inner_container});
			var laptop_endframe = myBanner.createElement({backgroundImage: "laptop_endframe.png", left: 81, top: 68, retina: true, parent: endframe});
			var logo_win10 = myBanner.createElement({backgroundImage: "logo_win10.png", left: 207, top: 16, retina: true, parent: endframe});
			var cta = myBanner.createElement({left: 210, top: 220, width: 80, height: 20, parent: endframe});
				var cta_base = myBanner.createElement({backgroundColor: "#a50034", width: 80, height: 20, parent: cta});
				var cta_txt = myBanner.createElement({backgroundImage: "cta_txt.png", left: 13, top: 6, retina: true, parent: cta});
			var txt_5 = myBanner.createElement({backgroundImage: "txt_5.png", left: 48, top: 200, retina: true, rotation: 0.1, parent: endframe});
			var txt_4 = myBanner.createElement({backgroundImage: "txt_4.png", left: 30, top: 175, retina: true, rotation: 0.1, parent: endframe});
			
		var lg_logo = myBanner.createElement({left: 11, top: 10, width: 45, height: 20, rotation: 0.1, parent: banner});
			var lg_logo_gray = myBanner.createElement({backgroundImage: "lg_logo_gray.png", retina: true, parent: lg_logo});
			var lg_logo_white = myBanner.createElement({backgroundImage: "lg_logo_white.png", retina: true, parent: lg_logo});



		/* Settings
		================================================= */

		//add to all images ---> , rotation: 0.1, force3D: true
		//add to pack_container ---> , perspective: 200

		TweenLite.set(cta_base, {borderRadius: 2});
		pack_inner_container.style.overflow = "hidden";

		var border = myBanner.createElement({width: width, height: height, border: "solid 1px #000", zIndex: 99, boxSizing: "border-box", parent: banner});

		/* Initiate
		================================================= */
		init();
		interactions();

		function init() {

			/* Functions
			================================================= */

			laptop_main.hover = new MyTimeline({repeat:0, delay: 9.5})
				.to(laptop_main, 1.4, {y: -10, ease: Power1.easeInOut})
				.chain()
				.to(laptop_main, 1.4, {y: 0, ease: Power1.easeInOut}, "+=0.5")
				.chain()


			gram.in = function() {
				return new MyTimeline()
				.from(g, 2.8, {x: width/2.5 - g.get("left")+(g.get("width")/2), ease: Power3.easeOut})
				.from(m, 2.8, {x: width/2.5 - m.get("left")-(m.get("width")/2), ease: Power3.easeOut})
				.offset(.4)
				.from(r, 2.4, {x: width/2.5 - r.get("left")+(r.get("width")/2) - 35, ease: Power4.easeOut})
				.from(a, 2.4, {x: width/2.5 - a.get("left")-(a.get("width")/2) + 40, ease: Power4.easeOut})
			}

			frame_2.in_1 = function() {
				return new MyTimeline()
				.to(frame_1, 2, {x: -width, ease: Quad.easeInOut})
				.from(frame_2, 2, {x: width, ease: Quad.easeInOut})
				.chain(-.6)
				.to(lg_logo_white, .2, {autoAlpha:0})
				.from(lg_logo_gray, .2, {autoAlpha:0})
			}

			frame_2.in_2 = function() {
				return new MyTimeline()
				.to(frame_2, 2.5, {x: -width, ease: Quad.easeInOut})
				.to(laptop_main_container, 2.5, {x: 0, ease: Quad.easeInOut})
			}

			txtIn = function(txt) {
				return new MyTimeline()
				.from(txt, 1.2, {autoAlpha:0})
				.from(txt, 1, {y: 4, ease: Power3.easeOut})
			}

			endframe.in = function() {
				return new MyTimeline()
				.to(txt_3, .5, {opacity: 0}, 0)
				.to(frame_2, 1.5, {x: -width/2-10, ease: Power2.easeInOut}, 0)
				.to(laptop_main_container, 1.5, {opacity: 1, scale: 0.8, y: 0, x: 12}, 0)
				.to(frame_2_bg, 1.5, {y: 27, ease: Power2.easeInOut}, 0)
				.end(1)
				.to(laptop_main_container, 0.5, {autoAlpha: 0})	
				.end(0.1)							
				.add(txtIn(txt_4))
				.from([laptop_endframe, logo_win10, txt_legal, cta], .7, {opacity: 0})
				.chain(-.2)
				.from(laptop_endframe, 1.1, {x: width/2 - laptop_endframe.get("left") - (laptop_endframe.get("width")/2), ease: Power2.easeInOut})
				.offset(.3)
				.from(pack, .1, {opacity: 0})
				.chain()
				.from(pack_container, .7, {x: 70, ease: Power2.easeOut})
				.offset(.1)
				.add(txtIn(txt_5))
				.offset(.1)
				.from(pack_inner_container, .5, {scaleX: 1.2, scaleY: 1, rotationY: -40, transformOrigin: "100% 50%", ease: Power2.easeOut})
				.from(pack, .5, {x: -5, ease: Power2.easeOut})


			}

			

			/* Timeline
			================================================= */

			var main_tl = new MyTimeline()

			// .offset(.5)
			.from(banner, .3, {alpha: 0})
			.chain(-.2)
			.add(gram.in())
			.chain(-.5)
			.add(frame_2.in_1())
			.chain(1.5)
			.add(frame_2.in_2())
			.chain(1.5)
			.add(endframe.in())

			// scrubber(main_tl);

		}

		

		
		/* Interactions
		================================================= */
		function interactions() {
			// click logic goes here
			banner.onclick = function() {
				window.open(window.clickTag,"_blank");
			}

			banner.onmouseover = function () {
				TweenLite.to(cta_base, .2, {backgroundColor: "#c6003e"})
				TweenLite.to(cta, .2, {scale: 1.05})
			}

			banner.onmouseout = function () {
				TweenLite.to(cta_base, .2, {backgroundColor: "#a50034"})
				TweenLite.to(cta, .2, {scale: 1.001})

			}
		}

		/* Scrubber
		================================================= */
		// function scrubber(tl) {
		// 	if (window.location.origin == "file://") {
		// 		myBanner.include(["../scrubber.min.js"], function() {
		// 			if (myBanner.scrubberController) myBanner.scrubberController.create({"main timeline": tl});
		// 		});
		// 	}
		// }
		
	});
};