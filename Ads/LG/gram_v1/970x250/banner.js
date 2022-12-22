var myBanner = myBanner || {};
myBanner.main = function() {

	var width = 970;
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
		"laptop_main_shadow.png", 
		"laptop_main_img.png", 
		"txt_2.png", 
		"txt_3.png", 
		"txt_legal.png", 
		"cta_txt.png", 
		"pack.png", 
		"txt_5.png", 
		"txt_4.png", 
		"laptop_endframe.png", 
		"logo_win10.png", 
		"logo_lg_white.png", 
		"logo_lg_gray.png", 
	];

	myBanner.preloadImages(images, function() {

		/* Create elements
		================================================= */


		var frame_1 = myBanner.createElement({width: 970, height: 250, zIndex: 1, parent: banner});
			var frame_1_bg = myBanner.createElement({backgroundImage: "frame_1_bg.jpg", retina: false, parent: frame_1, rotation: 0.1, force3D: true});
			var txt_1 = myBanner.createElement({backgroundImage: "txt_1.png", left: 317, top: 196, retina: true, parent: frame_1, rotation: 0.1, force3D: true});
			var gram = myBanner.createElement({left: 204, top: 98, width: 565, height: 58, parent: frame_1});
				var g = myBanner.createElement({backgroundImage: "g.png", retina: true, parent: gram, rotation: 0.1, force3D: true});
				var r = myBanner.createElement({backgroundImage: "r.png", left: 88, top: 2, retina: true, parent: gram, rotation: 0.1, force3D: true});
				var a = myBanner.createElement({backgroundImage: "a.png", left: 437, top: 2, retina: true, parent: gram, rotation: 0.1, force3D: true});
				var m = myBanner.createElement({backgroundImage: "m.png", left: 511, top: 2, retina: true, parent: gram, rotation: 0.1, force3D: true});
			var gram_overlay = myBanner.createElement({backgroundImage: "gram_overlay.png", left: 0, retina: false, parent: frame_1});
		var frame_2 = myBanner.createElement({left: -75, top: -143, width: 1627, height: 618, parent: banner});
			var frame_2_bg = myBanner.createElement({backgroundImage: "frame_2_bg.jpg", retina: false, parent: frame_2, rotation: 0.1, force3D: true});
			var laptop_main_container = myBanner.createElement({left: 490, top: 153, width: 417, height: 241, parent: frame_2});
						
				var laptop_main = myBanner.createElement({width: 417, height: 241, parent: laptop_main_container});
					var laptop_main_shadow = myBanner.createElement({backgroundImage: "laptop_main_shadow.png", left: 9, top: 25, parent: laptop_main, rotation: 0.1, force3D: true});
					var laptop_main_img = myBanner.createElement({backgroundImage: "laptop_main_img.png", retina: true, top: -4, parent: laptop_main, rotation: 0.1, force3D: true});

			var txt_2 = myBanner.createElement({backgroundImage: "txt_2.png", left: 250, top: 225, retina: true, parent: frame_2, rotation: 0.1, force3D: true});
			var txt_3 = myBanner.createElement({backgroundImage: "txt_3.png", left: 1203, top: 223, retina: true, parent: frame_2, rotation: 0.1, force3D: true});

		var endframe = myBanner.createElement({width: 970, height: 250, parent: banner});
			var txt_legal = myBanner.createElement({backgroundImage: "txt_legal.png", left: 14, top: 231, retina: true, parent: endframe});
			var cta = myBanner.createElement({left: 549-5, top: 151, width: 126, height: 32, parent: endframe});
				var cta_base = myBanner.createElement({backgroundColor: "#9a0a2e", width: 126, height: 32, parent: cta, rotation: 0.1, force3D: true});
				var cta_txt = myBanner.createElement({backgroundImage: "cta_txt.png", left: 21, top: 11, retina: true, parent: cta, rotation: 0.1, force3D: true});
			var pack_container = myBanner.createElement({left: 52, top: 59, width: 113, height: 154, parent: endframe, perspective: 200});
				var pack_inner_container = myBanner.createElement({width: 113, height: 154, parent: pack_container});
					var pack = myBanner.createElement({backgroundImage: "pack.png", retina: true, parent: pack_inner_container, rotation: 0.1, force3D: true});
			var txt_5 = myBanner.createElement({backgroundImage: "txt_5.png", left: 452-5, top: 116, retina: true, parent: endframe, rotation: 0.1, force3D: true});
			var txt_4 = myBanner.createElement({backgroundImage: "txt_4.png", left: 445-5, top: 79, retina: true, parent: endframe, rotation: 0.1, force3D: true});
			var laptop_endframe = myBanner.createElement({backgroundImage: "laptop_endframe.png", left: 125, top: 51, retina: true, parent: endframe, rotation: 0.1, force3D: true});
			var logo_win10 = myBanner.createElement({backgroundImage: "logo_win10.png", left: 805, top: 24, retina: true, parent: endframe});

		var logo_lg = myBanner.createElement({left: 14, top: 12, width: 74, height: 33, parent: banner});
			var logo_lg_white = myBanner.createElement({backgroundImage: "logo_lg_white.png", retina: true, parent: logo_lg, rotation: 0.1, force3D: true});
			var logo_lg_gray = myBanner.createElement({backgroundImage: "logo_lg_gray.png", retina: true, parent: logo_lg, rotation: 0.1, force3D: true});

		/* Settings
		================================================= */

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
				.from(g, 2.8, {x: width/3.2 - g.get("left")+(g.get("width")/2), ease: Power3.easeOut})
				.from(m, 2.8, {x: width/3.2 - m.get("left")-(m.get("width")/2), ease: Power3.easeOut})
				.offset(.4)
				.from(r, 2.4, {x: width/3.2 - r.get("left")+(r.get("width")/2) - 35, ease: Power4.easeOut})
				.from(a, 2.4, {x: width/3.2 - a.get("left")-(a.get("width")/2) + 40, ease: Power4.easeOut})
			}

			frame_2.in_1 = function() {
				return new MyTimeline()
				.to(frame_1, 2, {x: -width, ease: Quad.easeInOut})
				.from(frame_2, 2, {x: width, ease: Quad.easeInOut})
				.chain(-.5)
				.from(logo_lg_gray, .2, {autoAlpha:0})
			}

			frame_2.in_2 = function() {
				return new MyTimeline()
				.to(frame_2, 2.5, {x: -width/2-72, ease: Quad.easeInOut})
				.to(laptop_main_container, 2.5, {x: 300, ease: Quad.easeInOut})
			}

			txtIn = function(txt) {
				return new MyTimeline()
				.from(txt, 1.2, {autoAlpha:0})
				.from(txt, 1, {y: 4, ease: Power3.easeOut})
			}

			endframe.in = function() {
				return new MyTimeline()
				.to(txt_2, .1, {opacity: 0})
				.to(txt_3, .5, {opacity: 0}, 0)
				.to(frame_2, 1.5, {x: -width/2+160, ease: Power2.easeInOut}, 0)
				.to(laptop_main_container, 1.5, {opacity: 1, scale: 1, y: 0, x: 225, ease: Power2.easeInOut}, 0)
				.to(frame_2_bg, 1.5, {y: 35, scaleY: .7, ease: Power2.easeInOut}, 0)
				.end(1)
				.to(laptop_main_container, 0.5, {autoAlpha: 0})	
				.end(0.1)											
				.add(txtIn(txt_4))
				.from([laptop_endframe, logo_win10, txt_legal, cta], .7, {opacity: 0})
				.chain(-.2)
				.from(laptop_endframe, 1.1, {x: width/4 - laptop_endframe.get("left") - (laptop_endframe.get("width")/2), ease: Power2.easeInOut})
				.offset(.3)
				.from(pack, .1, {opacity: 0})
				.chain()
				.from(pack_container, .7, {x: 70, ease: Power2.easeOut})
				.offset(.1)
				.add(txtIn(txt_5))
				.offset(.1)
				.from(pack_inner_container, .5, {scaleX: 1.2, scaleY: 1, rotationY: -25, transformOrigin: "100% 50%", ease: Power2.easeOut})
				.from(pack, .5, {x: -9, ease: Power2.easeOut})


			}

			

			/* Timeline
			================================================= */

			var main_tl = new MyTimeline()

			.from(banner, .3, {alpha: 0})
			.chain(-.2)
			.add(gram.in())
			.chain(-.5)
			.add(frame_2.in_1())
			.chain(1.5)
			.add(frame_2.in_2())
			.chain(1.5)
			.add(endframe.in())


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

		
	});
};