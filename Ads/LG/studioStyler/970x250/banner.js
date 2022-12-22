var myBanner = myBanner || {};
myBanner.main = function() {

	var width = 970;
	var height = 250;
	var banner = myBanner.createElement({id: "banner", position: "absolute", top: 0, width: width, height: height, backgroundColor: "#fff", overflow: "hidden", cursor: "pointer", parent: document.body});

	var images = [
		"endframe_bg.jpg", 
		"cta_txt.png", 
		"cta_shine.png", 
		"txt_3.png", 
		"txt_4.png", 
		"frame_2_bg.jpg", 
		"txt_2.png", 
		"frame_1_bg.jpg", 
		"txt_1.png", 
		"endframe_shine.png", 
		"frame_1_shine.png", 
		"frame_2_shine.png", 
		"logo_lg_2.jpg", 
		"logo_lg_1.jpg", 
		"steam.png", 	
	];

	myBanner.preloadImages(images, function() {

		/* Create elements
		================================================= */


		
		var frame_1 = myBanner.createElement({width: 970, height: 250, parent: banner});
			var frame_1_bg = myBanner.createElement({backgroundImage: "frame_1_bg.jpg", retina: false, parent: frame_1});
			var txt_1 = myBanner.createElement({backgroundImage: "txt_1.png", left: 144, top: 152, retina: true, parent: frame_1, rotation: 0.1, force3D: true});

		var frame_2 = myBanner.createElement({width: 970, height: 250, parent: banner});
			var frame_2_bg = myBanner.createElement({backgroundImage: "frame_2_bg.jpg", retina: false, parent: frame_2});
			var txt_2 = myBanner.createElement({backgroundImage: "txt_2.png", left: 144, top: 152, retina: true, parent: frame_2, rotation: 0.1, force3D: true});
		
		var endframe = myBanner.createElement({width: 970, height: 250, parent: banner});
			var endframe_bg = myBanner.createElement({backgroundImage: "endframe_bg.jpg", retina: false, parent: endframe});
			var cta = myBanner.createElement({left: 548, top: 192, width: 136, height: 15, parent: endframe});
				var cta_txt = myBanner.createElement({backgroundImage: "cta_txt.png", retina: true, parent: cta});
				var cta_shine = myBanner.createElement({backgroundImage: "cta_shine.png", retina: true, parent: cta});
			var txt_3 = myBanner.createElement({backgroundImage: "txt_3.png", left: 548, top: 73, retina: true, parent: endframe, rotation: 0.1, force3D: true});
			var txt_4 = myBanner.createElement({backgroundImage: "txt_4.png", left: 547, top: 141, retina: true, parent: endframe, rotation: 0.1, force3D: true});
		
		
		var frame_2_overlay = myBanner.createElement({/*backgroundColor: "#00ff00",*/ left: 0, top: 0, width: 970, height: 250, parent: banner});
		var frame_1_overlay = myBanner.createElement({/*backgroundColor: "#00ff00",*/ left: 0, top: 0, width: 970, height: 250, parent: banner});

		var shine_container = myBanner.createElement({left: 0, top: 0, width: 970, height: 250, parent: banner});
			var endframe_shine = myBanner.createElement({backgroundImage: "endframe_shine.png", top: 0, parent: shine_container});
			var frame_1_shine = myBanner.createElement({backgroundImage: "frame_1_shine.png", left: 0, parent: shine_container});
			var frame_2_shine = myBanner.createElement({backgroundImage: "frame_2_shine.png", left: 0, top: 0, parent: shine_container});

		var steam = myBanner.createElement({width: 300, height: 250, top: 100, left: 430, parent: banner});
			var steam_1 = myBanner.createElement({backgroundImage: "steam.png", retina: false, parent: steam});
			var steam_2 = myBanner.createElement({backgroundImage: "steam.png", retina: false, parent: steam});
			var steam_3 = myBanner.createElement({backgroundImage: "steam.png", retina: false, parent: steam});
			var steam_4 = myBanner.createElement({backgroundImage: "steam.png", retina: false, parent: steam});			

		var logo_lg = myBanner.createElement({top: 28, width: 128, height: 192, parent: banner});
			var logo_lg_2 = myBanner.createElement({backgroundImage: "logo_lg_2.jpg", retina: true, parent: logo_lg, rotation: 0.1, force3D: true});
			var logo_lg_1 = myBanner.createElement({backgroundImage: "logo_lg_1.jpg", top: 114, retina: true, parent: logo_lg});



		/* Settings
		================================================= */
		//firefox fix
		// , rotation: 0.1, force3D: true

		var frameBorderWidth = 5;
		var frameBorderPadding = 8;
		var frameBorderColor = "#f7f6f7";

		var frame_border = myBanner.createElement({left: frameBorderPadding, top: frameBorderPadding, width: width - frameBorderPadding*2, height: height - frameBorderPadding*2, zIndex: 9, parent: banner});
			var frame_b_1 = myBanner.createElement({backgroundColor: frameBorderColor, left: 0, bottom: height - (logo_lg.get("top") + logo_lg_1.get("top")) - frameBorderPadding, width: frameBorderWidth, height: (logo_lg.get("top") + logo_lg_1.get("top")) - frameBorderPadding, parent: frame_border});
			var frame_b_2 = myBanner.createElement({backgroundColor: frameBorderColor, left: 0, top: 0, width: width - frameBorderPadding*2, height: frameBorderWidth, parent: frame_border});
			var frame_b_3 = myBanner.createElement({backgroundColor: frameBorderColor, top: 0, right: 0, width: frameBorderWidth, height: height - frameBorderPadding*2, parent: frame_border});
			var frame_b_4 = myBanner.createElement({backgroundColor: frameBorderColor, bottom: 0, right: 0, width: width - frameBorderPadding*2, height: frameBorderWidth, parent: frame_border});
			var frame_b_5 = myBanner.createElement({backgroundColor: frameBorderColor, left: 0, bottom: 0, width: frameBorderWidth, height: height - frameBorderPadding*2, parent: frame_border});

		var frame_b_1_length = frame_b_1.get("height");
		var frame_b_2_length = frame_b_2.get("width");
		var frame_b_3_length = frame_b_3.get("height");
		var frame_b_4_length = frame_b_4.get("width");
		var frame_b_5_length = frame_b_5.get("height");

		TweenLite.set([frame_b_1, frame_b_3, frame_b_5], {height: 0})
		TweenLite.set([frame_b_2, frame_b_4], {width: 0})

		
		var frame_1_overlay_fill = myBanner.createElement({
			left: -frame_1_overlay.get("left"), top: -frame_1_overlay.get("top"), backgroundImage: "frame_1_over_bg.png", retina: true, 
			parent: frame_1_overlay})

		var frame_2_overlay_fill = myBanner.createElement({
			left: -frame_2_overlay.get("left"), top: -frame_2_overlay.get("top"), backgroundImage: "frame_2_over_bg.png", retina: true, 
			parent: frame_2_overlay})

		TweenMax.set([frame_1_overlay, frame_2_overlay, shine_container], {overflow: "hidden", zIndex: 10})

	

		var borderInner = myBanner.createElement({width: width, height: height, border: "solid 2px #aaa", boxSizing: "border-box", zIndex: 99, parent: banner});
		var border = myBanner.createElement({width: width, height: height, border: "solid 1px #000000", boxSizing: "border-box", zIndex: 99, parent: banner});

		//shine


		/* shine element 1 */
		var shine_1 = myBanner.createElement({type: "canvas", left: frame_1_shine.get("left"), top: frame_1_shine.get("top"), width: frame_1_shine.get("width"), height: frame_1_shine.get("height"), parent: shine_container});
		
		var shineCtx_1 = shine_1.getContext("2d");
		var shineImage_1 = new Image(); shineImage_1.src = "frame_1_shine.png";
		var shineMaskPos_1 = {x: 0, y: 0};
	
		TweenMax.set(frame_1_shine, {visibility: "hidden"});	// hide shine image

		/* shine element 2 */
		var shine_2 = myBanner.createElement({type: "canvas", left: frame_2_shine.get("left"), top: frame_2_shine.get("top"), width: frame_2_shine.get("width"), height: frame_2_shine.get("height"), parent: shine_container});
		
		var shineCtx_2 = shine_2.getContext("2d");
		var shineImage_2 = new Image(); shineImage_2.src = "frame_2_shine.png";
		var shineMaskPos_2 = {x: 0, y: 0};
	
		TweenMax.set(frame_2_shine, {visibility: "hidden"});	// hide shine image

		/* shine element 3 */
		var shine_3 = myBanner.createElement({type: "canvas", left: endframe_shine.get("left"), top: endframe_shine.get("top"), width: endframe_shine.get("width"), height: endframe_shine.get("height"), parent: shine_container});
		
		var shineCtx_3 = shine_3.getContext("2d");
		var shineImage_3 = new Image(); shineImage_3.src = "endframe_shine.png";
		var shineMaskPos_3 = {x: 0, y: 0};
	
		TweenMax.set(endframe_shine, {visibility: "hidden"});	// hide shine image

		/* shine element 4 */
		var shine_4 = myBanner.createElement({type: "canvas", left: cta_shine.get("left"), top: cta_shine.get("top"), width: cta_shine.get("width"), height: cta_shine.get("height"), parent: cta});
		
		var shineCtx_4 = shine_4.getContext("2d");
		var shineImage_4 = new Image(); shineImage_4.src = "cta_shine.png";
		var shineMaskPos_4 = {x: -50, y: 0};
	
		TweenMax.set(cta_shine, {visibility: "hidden"});	// hide shine image


		/* Initiate
		================================================= */
		init();
		interactions();

		function init() {

			/* Functions
			================================================= */

			shine_1.in_tl = new MyTimeline(/*{paused: true}*/)
			.fromTo(shineMaskPos_1, 3, {x: -150}, {x: 800, ease: Power1.easeOut});

			shine_2.in_tl = new MyTimeline(/*{paused: true}*/)
			.fromTo(shineMaskPos_2, 3, {x: -250}, {x: 800, ease: Power1.easeOut});

			shine_3.in_tl = new MyTimeline(/*{paused: true}*/)
			.fromTo(shineMaskPos_3, 3.5, {x: -250}, {x: 800, ease: Power1.easeOut});


			var borderSpd = .5;
			var borderEase = Sine.easeInOut;

			frameBorderIn = function() {
				return new MyTimeline()
				.to([frame_b_1, frame_b_3, frame_b_5], 0.01, {height: 0})
				.to([frame_b_2, frame_b_4], 0.01, {width: 0})
				.chain()
				.to(frame_border, 0.01, {opacity: 1})
				.chain()
				.to(frame_b_1, frame_b_1_length/(height-frameBorderPadding*2)*borderSpd, {height: frame_b_1_length, ease: Quad.easeIn})
				.chain()
				.to(frame_b_2, frame_b_2_length/(width-frameBorderPadding*2)*borderSpd, {width: frame_b_2_length, ease: borderEase})
				.chain()
				.to(frame_b_3, frame_b_3_length/(height-frameBorderPadding*2)*borderSpd, {height: frame_b_3_length, ease: borderEase})
				.chain()
				.to(frame_b_4, frame_b_4_length/(width-frameBorderPadding*2)*borderSpd, {width: frame_b_4_length, ease: borderEase})
				.chain()
				.to(frame_b_5, frame_b_5_length/(height-frameBorderPadding*2)*borderSpd, {height: frame_b_5_length, ease: Quad.easeOut})
			}


				function steamAnim(){
				    tt2 = new TimelineMax();
				    tt2
				    .fromTo(steam_1,2.5,{opacity:0,scale:.1,y:-20},{opacity:0.5,scale:1,y:0, ease: Power3.easeOut},'starSteam')
				    .staggerFromTo([steam_2, steam_3],1,{cycle:{opacity:[0,0],scale:[.1,.1],x:[0,0]}},{cycle:{opacity:[0.3,0.3],scale:[.5,.5],x:[50,-50]}, ease: Power3.easeOut},'.1','starSteam+=.25')
				    .fromTo(steam_4, 1.75,{opacity:0,scaleX:.1,scaleY:.1},{opacity:.6,scaleX:1,scaleY:.5, ease: Power3.easeOut},'starSteam+=.5')
				    //.fromTo(steam_4, 1.75,{opacity:0,scaleX:.1,scaleY:.1},{opacity:.6,scaleX:1,scaleY:.5, ease: Power3.easeOut},'starSteam+=.75')
				    .to(steam ,1.75,{opacity:0},'-=.75')

					tt2.duration(5);

				    return tt2;
				}	



			txtIn = function(txt) {
				return new MyTimeline()
				.from(txt, 1.2, {x: -10, autoAlpha:0, ease: Power2.easeOut})
			}

			txtIn2 = function(txt) {
				return new MyTimeline()
				.from(txt, .9, {x: -10, autoAlpha:0, ease: Power2.easeOut})
			}

			txtOut = function(txt) {
				return new MyTimeline()
				.to(txt, .7, {alpha: 0, ease: Power1.easeInOut})
			}

			

			logo_lg_2.in = new MyTimeline()
				.from(logo_lg_2, .7, {opacity: 0})
				.from(logo_lg_2, 1, {x: 20, ease: Power3.easeOut})
				// .chain(-.4)
				


			

			/* Timeline
			================================================= */

			var main_tl = new MyTimeline()

			.offset(.25)
			.from(banner, .3, {opacity: 0})
			.chain()
			.add(frameBorderIn())
			.add(txtIn(txt_1))
			.add(steamAnim())				
			.offset(.5)
			.add(shine_1.in_tl)
			.offset(3)
			.add(txtOut(txt_1))
			.from(frame_2, 1, {opacity: 0})
			.to(frame_1_overlay, 1, {opacity: 0})
			.from(frame_2_overlay, 1, {opacity: 0})
			.chain(-.3)
			.add(txtIn(txt_2))
			.offset(.5)
			.add(shine_2.in_tl)
			.offset(3)
			.add(txtOut(txt_2))
			.add(txtOut(logo_lg_1))
			.offset(.2)
			.from(endframe, 1, {opacity: 0})
			.to(frame_2_overlay, 1, {opacity: 0})
			.chain(-.3)
			.add(logo_lg_2.in)
			.offset(.5)
			.add(txtIn2(txt_3))
			.offset(.5)
			.add(shine_3.in_tl)
			.offset(.5)
			.add(txtIn2(txt_4))
			.offset(1)
			.add(txtIn2(cta))

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
				return new MyTimeline(/*{paused: true}*/)
				.fromTo(shineMaskPos_4, 1, {x: -50}, {x: shine_4.get("width"), ease: Power1.easeOut})
			}
		}

	
		// update canvas
		TweenLite.ticker.addEventListener("tick", update);
		function update () {
			//shine 1
			var shineMask_1 = shineCtx_1.createLinearGradient(shineMaskPos_1.x, 0, shineMaskPos_1.x + 150, 60);
			shineMask_1.addColorStop(0, "rgba(0, 0, 0, 0)");
			shineMask_1.addColorStop(0.4, "rgba(0, 0, 0, 1)");
			shineMask_1.addColorStop(0.6, "rgba(0, 0, 0, 1)");
			shineMask_1.addColorStop(1, "rgba(0, 0, 0, 0)");

			shineCtx_1.clearRect(0, 0, 800, 800);
			shineCtx_1.globalCompositeOperation = "source-over";
			shineCtx_1.fillStyle = shineMask_1;
			shineCtx_1.fillRect(0, 0, shine_1.width, shine_1.height);
			shineCtx_1.globalCompositeOperation = "source-in";
			shineCtx_1.drawImage(shineImage_1, 0, 0, shineImage_1.width, shineImage_1.height); /* /2 means retina */

			//shine 2
			var shineMask_2 = shineCtx_2.createLinearGradient(shineMaskPos_2.x, 0, shineMaskPos_2.x + 150, 60);
			shineMask_2.addColorStop(0, "rgba(0, 0, 0, 0)");
			shineMask_2.addColorStop(0.4, "rgba(0, 0, 0, 1)");
			shineMask_2.addColorStop(0.6, "rgba(0, 0, 0, 1)");
			shineMask_2.addColorStop(1, "rgba(0, 0, 0, 0)");

			shineCtx_2.clearRect(0, 0, 800, 800);
			shineCtx_2.globalCompositeOperation = "source-over";
			shineCtx_2.fillStyle = shineMask_2;
			shineCtx_2.fillRect(0, 0, shine_2.width, shine_2.height);
			shineCtx_2.globalCompositeOperation = "source-in";
			shineCtx_2.drawImage(shineImage_2, 0, 0, shineImage_2.width, shineImage_2.height); /* /2 means retina */

			//shine 3
			var shineMask_3 = shineCtx_3.createLinearGradient(shineMaskPos_3.x, 0, shineMaskPos_3.x + 150, 60);
			shineMask_3.addColorStop(0, "rgba(0, 0, 0, 0)");
			shineMask_3.addColorStop(0.4, "rgba(0, 0, 0, 1)");
			shineMask_3.addColorStop(0.6, "rgba(0, 0, 0, 1)");
			shineMask_3.addColorStop(1, "rgba(0, 0, 0, 0)");

			shineCtx_3.clearRect(0, 0, 800, 800);
			shineCtx_3.globalCompositeOperation = "source-over";
			shineCtx_3.fillStyle = shineMask_3;
			shineCtx_3.fillRect(0, 0, shine_3.width, shine_3.height);
			shineCtx_3.globalCompositeOperation = "source-in";
			shineCtx_3.drawImage(shineImage_3, 0, 0, shineImage_3.width, shineImage_3.height); /* /2 means retina */


			//shine 4
			var shineMask_4 = shineCtx_4.createLinearGradient(shineMaskPos_4.x, 0, shineMaskPos_4.x + 50, 0);
			shineMask_4.addColorStop(0, "rgba(0, 0, 0, 0)");
			shineMask_4.addColorStop(0.4, "rgba(0, 0, 0, 1)");
			shineMask_4.addColorStop(0.6, "rgba(0, 0, 0, 1)");
			shineMask_4.addColorStop(1, "rgba(0, 0, 0, 0)");

			shineCtx_4.clearRect(0, 0, 500, 500);
			shineCtx_4.globalCompositeOperation = "source-over";
			shineCtx_4.fillStyle = shineMask_4;
			shineCtx_4.fillRect(0, 0, shine_4.width, shine_4.height);
			shineCtx_4.globalCompositeOperation = "source-in";
			shineCtx_4.drawImage(shineImage_4, 0, 0, shineImage_4.width/2, shineImage_4.height/2); /* /2 means retina */

	
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