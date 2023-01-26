var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    TweenMax.from(".logo", 1, {
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })


    TweenMax.from(".juice", 1, {
      delay: 2,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".leaves .layer:nth-child(1)", 2, {
      delay: 2,
      opacity: 0,
      y: 800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".cam4-container", 2, {
      delay: 2.8,
      opacity: 0,
      y: 800,
      ease: Expo.easeInOut
    })

    /* TweenMax.from(".longcam", 2, {
        delay: 5.1,
        opacity: 1,
        y: -800,
        ease: Expo.easeInOut
      }) */

    TweenMax.from(".leaves .layer:nth-child(3)", 2, {
      delay: 2.2,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".leaves .layer:nth-child(4)", 2, {
      delay: 2.3,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".leaves .layer:nth-child(5)", 2, {
      delay: 2.5,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".title", 1, {
      delay: 1,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".tagline", 1, {
      delay: 1.3,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".pages", 1, {
      delay: 1.3,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".quote", 1, {
      delay: 1.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    var controller_h = new ScrollMagic.Controller();

    $(function () { 
		// init controller horizontal

		// build tween horizontal
    var tween_h = new TimelineMax();

    tween_h
    .to(".juice", 0.5, {triggerElement: ".pin", rotation: 360, transformOrigin: "top left", ease: Linear.easeNone}, "-=2")
    .to('.top_img', 0.5, {autoAlpha: 0}, "-=1.6");
    

		// build scene
		var scene_h = new ScrollMagic.Scene({duration: "100%"})
            .setTween(tween_h)
            /* .setPin("#animate") */
            .setPin('.pin')
			.addIndicators({name: "rotate"}) // add indicators (requires plugin)
			.addTo(controller_h);
	});




var controller_h = new ScrollMagic.Controller();

/* var animeIn = new TimelineMax(); */
var animeIn = gsap.timeline()


animeIn

/* .to('.leaves .layer:nth-child(2)', 3, {x: "-30%"})
.to('.leaves .layer:nth-child(2)', 3, {y: "60%"}, "-=3") */

.to('.cam4-container', 3, {x: "-20%"})
.to('.cam4-container', 3, {y: "50%"}, "-=3")
/* .to('.longcam', 3, {y: "50%"}, "-=3") */


var scene2 = new ScrollMagic.Scene({
    triggerElement: ".longcam",
    duration: "100%"

})
    .addIndicators()
    .setTween(animeIn)
    .addTo(controller_h);

    var controller_dc = new ScrollMagic.Controller();   
    var animeIndropcam = gsap.timeline()

    animeIndropcam
    
    
    .from('.dropcam', 0.3, {autoAlpha: 0}, "-=3")
    .to('.dropcam', 3, {y: "50%"}, "-=3")
    
    
    var scene3 = new ScrollMagic.Scene({
        triggerElement: ".longcam",
        duration: "100%",
        offset: 200
        
    
    })
        .addIndicators()
        .setTween(animeIndropcam)
        .addTo(controller_dc);
    

    var controller_hp = new ScrollMagic.Controller();   
    var animeInhandphone = gsap.timeline()

    animeInhandphone
    
    
    .from('.handphone', 5, {autoAlpha: 0, x: "-40%"}, "-=5")
    /* .to('.handphone', 5, {x: "10%"}, "-=5") */
    .to('.handphone', 5, {x: "-20%"})

    
    
    var scene3 = new ScrollMagic.Scene({
        triggerElement: ".handphone-trigger",
        duration: "100%",
        offset: -100
        
    
    })
        .addIndicators()
        .setTween(animeInhandphone)
        .addTo(controller_hp);

        var controller_l = new ScrollMagic.Controller();   
        var animeInlocks = gsap.timeline()
    
        animeInlocks
        
        
        /* .from('.handphone', 5, {autoAlpha: 0, x: "-40%"}, "-=5") */
        /* .to('.handphone', 5, {x: "10%"}, "-=5") */
        .to('.locksphone', 5, {y: "-55%"}, "-=5")
        .to('.locks1', 5, {y: "29%"}, "-=5")
    
        
        
        var scene4 = new ScrollMagic.Scene({
            triggerElement: ".locks1-trigger",
            duration: "100%"
            /* offset: -100 */
            
        
        })
            .addIndicators()
            .setTween(animeInlocks)
            .addTo(controller_l);
    
    
    var controller_lbs = new ScrollMagic.Controller();

    var animeInlocksbs = new TimelineMax();
    
    animeInlocksbs
    
    .set('.silverlock', {transformOrigin: "center"})
    .to('.silverlock', 2, {autoAlpha: 0}, "-=2")
    .to('.h3 span', 2, {autoAlpha: 0}, "-=2")
    
    var scene5 = new ScrollMagic.Scene({
        triggerElement:'.locks-trigger',
        triggerHook: 0,
        duration: "100%",
        /* offset: 400 */
    
    })
    
    .setTween(animeInlocksbs)
    .setPin(".lockwrapper")
    .addIndicators()
    .addTo(controller_lbs);