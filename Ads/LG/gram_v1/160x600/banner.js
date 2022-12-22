var myBanner = myBanner || {};
myBanner.main = function() {

	var width = 160;
	var height = 600;
	var banner = myBanner.createElement({id: "banner", width: width, height: height, overflow: "hidden", cursor: "pointer", zIndex: 1, parent: document.body});


	var images = [
		"frame_1_bg.jpg", 
		"txt_1.png", 
		"m.png", 
		"a.png", 
		"r.png", 
		"g.png", 
		"frame_2_bg.jpg", 
		"laptop_main.png", 
		"txt_3.png", 
		"txt_2.png", 
		"txt_legal.png", 
		"cta_txt.png", 
		"txt_5.png", 
		"txt_4.png", 
		"pack.png", 
		"laptop_endframe.png", 
		"logo_win10.png", 
		"logo_lg_white.png", 
		"logo_lg_gray.png", 
	];

	myBanner.preloadImages(images, function() {

		/* Create elements
		================================================= */

				
		

		var frame_1 = myBanner.createElement({width: 160, height: 600, zIndex: 1, parent: banner});
			var frame_1_bg = myBanner.createElement({backgroundImage: "frame_1_bg.jpg", retina: true, parent: frame_1, rotation: 0.1, force3D: true});
			var txt_1 = myBanner.createElement({backgroundImage: "txt_1.png", left: 13, top: 531, retina: true, parent: frame_1, rotation: 0.1, force3D: true});
			var gram = myBanner.createElement({left: 8, top: 381, width: 145, height: 26, parent: frame_1});
				var m = myBanner.createElement({backgroundImage: "m.png", left: 121, retina: true, parent: gram, rotation: 0.1, force3D: true});
				var a = myBanner.createElement({backgroundImage: "a.png", left: 79, retina: true, parent: gram, rotation: 0.1, force3D: true});
				var r = myBanner.createElement({backgroundImage: "r.png", left: 44, retina: true, parent: gram, rotation: 0.1, force3D: true});
				var g = myBanner.createElement({backgroundImage: "g.png", retina: true, parent: gram, rotation: 0.1, force3D: true});
		var frame_2 = myBanner.createElement({left: -192, top: -204, width: 603, height: 806, parent: banner});
			var frame_2_bg = myBanner.createElement({backgroundImage: "frame_2_bg.jpg", retina: true, parent: frame_2, rotation: 0.1, force3D: true});
			
			var laptop_main_container = myBanner.createElement({left: 193, top: 490, width: 160, height: 145, parent: frame_2});
				var laptop_main = myBanner.createElement({backgroundImage: "laptop_main.png", retina: true, parent: laptop_main_container, rotation: 0.1, force3D: true});
			var txt_2 = myBanner.createElement({backgroundImage: "txt_2.png", left: 221, top: 320, retina: true, parent: frame_2, rotation: 0.1, force3D: true});
			var txt_3 = myBanner.createElement({backgroundImage: "txt_3.png", left: 219, top: 320, retina: true, parent: frame_2, rotation: 0.1, force3D: true});

		var endframe = myBanner.createElement({left: 7, top: 87, width: 151, height: 504, parent: banner});
			var txt_legal = myBanner.createElement({backgroundImage: "txt_legal.png", left: 12, top: 483, retina: true, parent: endframe, rotation: 0.1, force3D: true});
			var cta = myBanner.createElement({left: 26, top: 394, width: 93, height: 24, parent: endframe});
				var cta_base = myBanner.createElement({backgroundColor: "#a50034", width: 93, height: 24, parent: cta, rotation: 0.1, force3D: true});
				var cta_txt = myBanner.createElement({backgroundImage: "cta_txt.png", left: 16, top: 8, retina: true, parent: cta, rotation: 0.1, force3D: true});
			var pack_container = myBanner.createElement({top: 101, width: 44, height: 60, parent: endframe, perspective: 200});
				var pack_inner_container = myBanner.createElement({width: 44, height: 60, parent: pack_container});
					var pack = myBanner.createElement({backgroundImage: "pack.png", retina: true, parent: pack_inner_container, rotation: 0.1, force3D: true});
			var laptop_endframe = myBanner.createElement({backgroundImage: "laptop_endframe.png", left: 28, top: 98, retina: true, parent: endframe, rotation: 0.1, force3D: true});
			var logo_win10 = myBanner.createElement({backgroundImage: "logo_win10.png", left: 30, retina: true, parent: endframe});
			var txt_5 = myBanner.createElement({backgroundImage: "txt_5.png", left: 18, top: 306, retina: true, parent: endframe, rotation: 0.1, force3D: true});
			var txt_4 = myBanner.createElement({backgroundImage: "txt_4.png", left: 28, top: 209, retina: true, parent: endframe, rotation: 0.1, force3D: true});

		var logo_lg = myBanner.createElement({left: 10, top: 10, width: 48, height: 21, zIndex: 2, parent: banner});
			var logo_lg_white = myBanner.createElement({backgroundImage: "logo_lg_white.png", retina: true, parent: logo_lg, rotation: 0.1, force3D: true});
			var logo_lg_gray = myBanner.createElement({backgroundImage: "logo_lg_gray.png", retina: true, parent: logo_lg, rotation: 0.1, force3D: true});



		/* Settings
		================================================= */

		//add to all images ---> , rotation: 0.1, force3D: true
		//add to pack_container ---> , perspective: 200

		TweenLite.set(cta_base, {borderRadius: 2});
		pack_inner_container.style.overflow = "hidden";
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
				.to(laptop_main, 1.4, {y: -10, ease: Power1.easeInOut})
				.chain()
				.to(laptop_main, 1.4, {y: 0, ease: Power1.easeInOut}, "+=0.5")
				.chain()


			gram.in = function() {
				return new MyTimeline()
				.from(g, 2.4, {x: 35, ease: Power3.easeOut})
				.from(m, 2.4, {x: -36, ease: Power3.easeOut})
				// .offset(.4)
				.from(r, 2.4, {x: 12, ease: Power4.easeOut})
				.from(a, 2.4, {x: -12, ease: Power4.easeOut})
			}

			frame_2.in_1 = function() {
				return new MyTimeline()
				.to(frame_1, 2, {x: -width, ease: Quad.easeInOut})
				.from(frame_2, 2, {x: width, ease: Quad.easeInOut})
				.chain(-.85)
				// .to(logo_lg_white, .2, {autoAlpha:0})
				.from(logo_lg_gray, .25, {autoAlpha:0})
			}

			frame_2.in_2 = function() {
				return new MyTimeline()
				.to(txt_2, 2.5, {x: -width*1.5, ease: Quad.easeInOut})
				.from(txt_3, 2.5, {x: width*1.5, ease: Quad.easeInOut})
			    .to(laptop_main_container, 2.5, {x: -209, ease: Quad.easeInOut})
			}

			txtIn = function(txt) {
				return new MyTimeline()
				.from(txt, 1.2, {autoAlpha:0})
				.from(txt, 1, {y: 4, ease: Power3.easeOut})
			}

			endframe.in = function() {
				return new MyTimeline()
				.to(txt_3, .5, {opacity: 0}, 0)
				// .to(frame_2, 1.5, {x: -width/2-10, ease: Power2.easeInOut})
				.to(laptop_main_container, 1.5, {opacity: 1, scale: 0.4, y: -110, x: -43}, 0)
				.from(frame_2_bg, 1.5, {x: 160, y: 180, ease: Power2.easeInOut})
				.end(1)
				.to(laptop_main_container, 0.5, {autoAlpha: 0})	
				.end(0.1)
				.add(txtIn(txt_4))
				.from([laptop_endframe, logo_win10, txt_legal, cta], .7, {opacity: 0})
				.chain(-.2)
				.from(laptop_endframe, 1.1, {x: width/2.2 - laptop_endframe.get("left") - (laptop_endframe.get("width")/2), ease: Power2.easeInOut})
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