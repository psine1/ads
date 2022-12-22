var myBanner = myBanner || {};
myBanner.main = function() {

	var width = 728;
	var height = 90;
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
		"laptop_main.png", 
		"txt_2.png", 
		"txt_3.png", 
		"cta_txt.png", 
		"txt_legal.png", 
		"txt_5.png", 
		"txt_4.png", 
		"logo_win10.png", 
		"laptop_endframe.png", 
		"pack.png", 
		"logo_lg_white.png", 
		"logo_lg_gray.png", 
	];

	myBanner.preloadImages(images, function() {

		/* Create elements
		================================================= */


		

		var frame_1 = myBanner.createElement({width: 728, height: 90, parent: banner});
			var frame_1_bg = myBanner.createElement({backgroundImage: "frame_1_bg.jpg", retina: true, parent: frame_1, rotation: 0.1, force3D: true});
			var txt_1 = myBanner.createElement({backgroundImage: "txt_1.png", left: 239, top: 12, retina: true, parent: frame_1, rotation: 0.1, force3D: true});
			var gram = myBanner.createElement({left: 248, top: 37, width: 226, height: 23, parent: frame_1});
				var g = myBanner.createElement({backgroundImage: "g.png", retina: true, parent: gram, rotation: 0.1, force3D: true});
				var r = myBanner.createElement({backgroundImage: "r.png", left: 32, top: 1, retina: true, parent: gram, rotation: 0.1, force3D: true});
				var a = myBanner.createElement({backgroundImage: "a.png", left: 174, top: 1, retina: true, parent: gram, rotation: 0.1, force3D: true});
				var m = myBanner.createElement({backgroundImage: "m.png", left: 204, top: 1, retina: true, parent: gram, rotation: 0.1, force3D: true});
			var gram_overlay = myBanner.createElement({backgroundImage: "gram_overlay.png", left: 0, top: 0, retina: true, parent: frame_1, rotation: 0.1, force3D: true});
		var frame_2 = myBanner.createElement({width: 728, height: 90, parent: banner});
			var frame_2_bg = myBanner.createElement({backgroundImage: "frame_2_bg.jpg", retina: true, parent: frame_2, rotation: 0.1, force3D: true});
			var laptop_main_container = myBanner.createElement({left: 407, top: -2, width: 139, height: 84, parent: frame_2});
				var laptop_main = myBanner.createElement({backgroundImage: "laptop_main.png", retina: true, parent: laptop_main_container, rotation: 0.1, force3D: true});
			var txt_2 = myBanner.createElement({backgroundImage: "txt_2.png", left: 185, top: 35, retina: true, parent: frame_2, rotation: 0.1, force3D: true});
			var txt_3 = myBanner.createElement({backgroundImage: "txt_3.png", left: 350, top: 30, retina: true, parent: frame_2, rotation: 0.1, force3D: true});
		var endframe = myBanner.createElement({left: 12, top: 14, width: 693, height: 71, parent: banner});
			var cta = myBanner.createElement({left: 372, top: 42, width: 79, height: 20, parent: endframe});
				var cta_base = myBanner.createElement({backgroundColor: "#9a0a2e", width: 79, height: 20, parent: cta, rotation: 0.1, force3D: true});
				var cta_txt = myBanner.createElement({backgroundImage: "cta_txt.png", left: 13, top: 6, retina: true, parent: cta, rotation: 0.1, force3D: true});
			var txt_legal = myBanner.createElement({backgroundImage: "txt_legal.png", top: 65, retina: true, parent: endframe, rotation: 0.1, force3D: true});
			var txt_5 = myBanner.createElement({backgroundImage: "txt_5.png", left: 313, top: 25, retina: true, parent: endframe, rotation: 0.1, force3D: true});
			var txt_4 = myBanner.createElement({backgroundImage: "txt_4.png", left: 294, top: 1, retina: true, parent: endframe, rotation: 0.1, force3D: true});
			var logo_win10 = myBanner.createElement({backgroundImage: "logo_win10.png", left: 588, top: 9, retina: true, parent: endframe, rotation: 0.1, force3D: true});
			var pack_container = myBanner.createElement({left: 130, top: 4, width: 42, height: 58, parent: endframe, perspective: 200});
				var pack_inner_container = myBanner.createElement({width: 42, height: 58, parent: pack_container});
					var pack = myBanner.createElement({backgroundImage: "pack.png", retina: true, parent: pack_inner_container, rotation: 0.1, force3D: true});
			var laptop_endframe = myBanner.createElement({backgroundImage: "laptop_endframe.png", left: 157, retina: true, parent: endframe, rotation: 0.1, force3D: true});
		var logo_lg = myBanner.createElement({left: 7, top: 7, width: 62, height: 27, parent: banner});
			var logo_lg_white = myBanner.createElement({backgroundImage: "logo_lg_white.png", retina: true, parent: logo_lg, rotation: 0.1, force3D: true});
			var logo_lg_gray = myBanner.createElement({backgroundImage: "logo_lg_gray.png", retina: true, parent: logo_lg, rotation: 0.1, force3D: true});



		/* Settings
		================================================= */

		//add to all images ---> , rotation: 0.1, force3D: true
		//add to pack_container ---> , perspective: 200

		// endframe_bg_guide.style.opacity = 0;


		TweenLite.set(cta_base, {borderRadius: 2});
		pack_inner_container.style.overflow = "hidden";
		frame_2.style.overflow = "hidden";
		cta.style.overflow = "hidden";

		var border = myBanner.createElement({width: width, height: height, border: "solid 1px #000", zIndex: 99, boxSizing: "border-box", parent: banner});

		/* Initiate
		================================================= */
		init();
		interactions();

		function init() {

			/* Functions
			================================================= */

			laptop_main.hover = new MyTimeline({repeat:0, delay: 9.5})
				.to(laptop_main, 1.4, {y: 0, ease: Power1.easeInOut})
				.chain()
				.to(laptop_main, 1.4, {y: 0, ease: Power1.easeInOut}, "+=0.5")
				.chain()


			gram.in = function() {
				return new MyTimeline()
				.from(g, 2.8, {x: 100 - g.get("left")+(g.get("width")/2), ease: Power3.easeOut})
				.from(m, 2.8, {x: 100 - m.get("left")-(m.get("width")/2), ease: Power3.easeOut})
				.offset(.4)
				.from(r, 2.4, {x: 100 - r.get("left")+(r.get("width")/2) - 25, ease: Power4.easeOut})
				.from(a, 2.4, {x: 100 - a.get("left")-(a.get("width")/2) + 30, ease: Power4.easeOut})
			}

			frame_2.in_1 = function() {
				return new MyTimeline()
				.to(frame_1, 2, {x: -width, ease: Quad.easeInOut})
				.from(frame_2, 2, {x: width, ease: Quad.easeInOut})

				.chain(-.45)
				// .to(logo_lg_white, .2, {autoAlpha:0})
				.from(logo_lg_gray, .2, {autoAlpha:0})
				.offset(-.7)
				.to(txt_1 ,.7, {opacity: 0})
			}

			frame_2.in_2 = function() {
				return new MyTimeline()
				// .to(frame_2, 2.5, {x: -width/2-72, ease: Quad.easeInOut})
				.fromTo(frame_2_bg, 2.5, {y: -15, scaleX: 1.25, scaleY: 1.8, transformOrigin: "100% 50%"}, {y: 0, scaleX: 1.4, scaleY: 1.7, ease: Power1.easeInOut, transformOrigin: "100% 50%"})
				.to(laptop_main_container, 2.5, {x: -210, ease: Quad.easeInOut})
				
			}

			txtIn = function(txt) {
				return new MyTimeline()
				.from(txt, 1.2, {autoAlpha:0})
				.from(txt, 1, {y: 4, ease: Power3.easeOut})
			}

			fadeOut = function(txt) {
				return new MyTimeline()
				.to(txt, .7, {autoAlpha:0})
			}

			endframe.in = function() {
				return new MyTimeline()
				.to(txt_2, .1, {opacity: 0})
				.to(txt_3, .5, {opacity: 0}, 0)
				.to(laptop_main_container, 1.5, {opacity: 1, scale: 1, x: -120}, 0)
				.to(frame_2_bg, 1.5, {y: 0, scaleX: 1, scaleY: 1, ease: Power2.easeInOut, transformOrigin: "100% 50%"})
				.end(1)
				.to(laptop_main_container, 0.5, {autoAlpha: 0})	
				.end(0.1)				
				.add(txtIn(txt_4))
				.from([laptop_endframe, logo_win10, txt_legal, cta], .7, {opacity: 0})
				.chain(-.2)
				.from(laptop_endframe, 1.1, {x: width/3.8 - laptop_endframe.get("left") - (laptop_endframe.get("width")/2), ease: Power2.easeInOut})
				.offset(.3)
				.from(pack, .1, {opacity: 0})
				.chain()
				.from(pack_container, .7, {x: 70, ease: Power2.easeOut})
				.offset(.1)
				.add(txtIn(txt_5))
				.offset(.1)
				.from(pack_inner_container, .5, {scaleX: 1.2, scaleY: 1, rotationY: -25, transformOrigin: "100% 50%", ease: Power2.easeOut})
				.from(pack, .5, {x: -3, ease: Power2.easeOut})


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
			.add(fadeOut(txt_2))
			.add(frame_2.in_2())
			.chain(-.2)
			.add(txtIn(txt_3))
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
				TweenLite.to(cta, .2, {scale: 1.035})
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