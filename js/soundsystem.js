var scene = document.getElementById('scene');
    /* var parallax = new Parallax(scene); */

    TweenMax.from(".logo", 1, {
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut
      })
    
    TweenMax.from(".soundbar", 2, {
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })


    TweenMax.from(".bigspeaker1", 2, {
      delay: 0.9,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".bigspeaker2", 2, {
      delay: 0.9,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".subwoofer", 2, {
      delay: 0.5,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".midspeaker", 2, {
        delay: 1.5,
        opacity: 0,
        y: -800,
        ease: Expo.easeInOut
      })

      TweenMax.from(".smallspeaker1", 2, {
        delay: 0.9,
        opacity: 0,
        y: -800,
        ease: Expo.easeInOut
      })
  
      TweenMax.from(".smallspeaker2", 2, {
        delay: 0.9,
        opacity: 0,
        y: -800,
        ease: Expo.easeInOut
      })

      TweenMax.from(".title-text", 2, {
        opacity: 0,
        y: -100,
        ease: Expo.easeInOut
      })

      
      
var controller1 = new ScrollMagic.Controller();
var animeIn = new TimelineMax();


animeIn


.to('.title-text', 300, {autoAlpha:0})
.to('.soundbar', 200, {scale: 3.5, x: "12%"})
.to('.soundbar', 200, {scale: 3.5, x: "12%"})
.to('.top_img', 60, {autoAlpha: 0}, "-=100")
.from('.soundbar-text', 100, {autoAlpha: 0}, "-=15")
.to('.soundbar', 100, {scale: 1, x: "-0%"})
.to('.soundbar-text', 100, {autoAlpha: 0}, "-=100")


.to('.bigspeaker1', 100, {scale: 6.5, x: "-80%"})
.to('.bigspeaker1', 100, {scale: 6.5, x: "-80%"})
.from('.bigspeaker-text', 100, {autoAlpha: 0}, "-=100")
.to('.bigspeaker-text', 100, {autoAlpha: 0})
.to('.bigspeaker1', 100, {scale: 1, x: "-0%"}, "-=100")

.to('.subwoofer', 100, {scale: 5.5, x: "400%", y: "-70%"})
.to('.subwoofer', 100, {scale: 5.5, x: "400%", y: "-70%"})
.from('.subwoofer-text', 100, {autoAlpha: 0}, "-=100")
.to('.subwoofer-text', 100, {autoAlpha: 0})
.to('.subwoofer', 100, {scale: 1, x: "0%", y: "0%"}, "-=100")

.to('.midspeaker', 100, {scale: 6.5, x: "-900%", y: "-150%", zIndex: 7})
.to('.midspeaker', 100, {scale: 6.5, x: "-900%", y: "-150%", zIndex: 7})
.from('.midspeaker-text', 100, {autoAlpha: 0}, "-=100")
.to('.midspeaker-text', 100, {autoAlpha: 0})
.to('.midspeaker', 100, {scale: 1, x: "0%", y: "0%"}, "-=100")

.to('.smallspeaker1', 100, {scale: 6.5, x: "150%", y: "-150%", zIndex: 7})
.to('.smallspeaker1', 100, {scale: 6.5, x: "150%", y: "-150%", zIndex: 7})
.from('.smallspeaker-text', 100, {autoAlpha: 0}, "-=100")
.to('.smallspeaker-text', 100, {autoAlpha: 0})
.to('.smallspeaker1', 100, {scale: 1, x: "0%", y: "0%"}, "-=100")

.to('.bottom_img', 100, {autoAlpha: 0}, "-=3")



var scene2 = new ScrollMagic.Scene({
    triggerElement: ".trigger1",
    duration: "100%",
    triggerHook: 0

})
    .addIndicators()
    .setTween(animeIn)
    .setPin('.trigger1')
    .addTo(controller1);

    
    var animeIn2 = new TimelineMax();
    
    
    animeIn2

    .to('.text_rotation1', 3, {y:"-40%", autoAlpha: 0})
    .from('.text_rotation2', 3, {autoAlpha: 0})
    .to('.text_rotation2', 3, {y:"-40%", autoAlpha: 0})
    .from('.text_rotation3', 3, {autoAlpha: 0})
    .to('.text_rotation3', 3, {y:"-40%", autoAlpha: 0})
    .from('.text_rotation4', 3, {autoAlpha: 0})
    .to('.text_rotation4', 3, {y:"-40%", autoAlpha: 0})
    .from('.text_rotation5', 3, {autoAlpha: 0})

    
    var scene3 = new ScrollMagic.Scene({
        triggerElement: ".trigger2",
        duration: "35%",
        
    
    })
        .addIndicators()
        .setTween(animeIn2)
        .addTo(controller1);
  
        var animeIn3 = new TimelineMax();
    
    
        animeIn3
    
        .to('.iphone-image-wrapper', 1, {scale: 1.2, y: "-15%"})
        .to('.iphone-image-wrapper', 1, {scale: 0.7, y: "-50%"})

    
        
        var scene4 = new ScrollMagic.Scene({
            triggerElement: ".trigger2",
            duration: "100%",
            offset: 50
            
        
        })
            .addIndicators()
            .setTween(animeIn3)
            .addTo(controller1);


            var animeIn4 = new TimelineMax();

            animeIn4
            .from('.iphone1-text', 5, {autoAlpha: 0})
            .from('.iphone2-text', 5, {autoAlpha: 0}, "-=5")
            .to('.iphonekahush', 30, {x: "-100%"}, "+=10")
            .to('.iphone1-text', 1, {autoAlpha: 0}, "-=18")
            .to('.iphone2-text', 1, {autoAlpha: 0}, "-=18")
            .to('.iphoneequilizer', 30, {x: "100%"}, "-=30")
            .to('.iphoneequilizer', 3, {autoAlpha: 0})
            .to('.iphonemain', 3, {autoAlpha: 0}, "-=4")
            .to('.iphonekahush', 3, {autoAlpha: 0}, "-=3")
            .from('.iphone3-text', 0.1, {autoAlpha: 0})
            .to('.iphone-image-wrapper', 10, {x: "-30%"})
            .to('.iphone-image-wrapper', 10, {x: "0%"})
            .to('.iphone3-text', 1, {autoAlpha: 0}, "-=3")
            .to(".iphone-image-wrapper", 10, {scale: 1.01, rotation: -90, transformOrigin: "center", ease: Linear.easeNone}, "-=2")
            .to('.iphonelast', 10, {autoAlpha: 0}, "-=3")
            .to(".iphone-image-wrapper", 10, {scale: 1.7, y: 30, x: -30})


            .from('.marshall1', 5, {autoAlpha: 0, y: "-30%"})
            .from('.marshall2', 5, {autoAlpha: 0, y: "-30%"}, "-=5")
            .to('.marshall1', 15, {scale: 1, x: "0%", y: "0%"})
            .to('.marshall1', 10, {scale: 8, x: "80%", y: "-100%"})
            .from('.marshall-text', 10, {autoAlpha: 0, zIndex: 12}, "-=7")
            .to('.marshall1', 20, {scale: 8, x: "80%", y: "-100%"})
            .to('.marshall-text', 10, {autoAlpha: 0, zIndex: 12})
            .to('.marshall1', 10, {scale: 1, x: "0%", y: "0%"})



            var scene5 = new ScrollMagic.Scene({
              triggerElement:'.trigger3',
              duration: "200%",
              offset: 0
            })
            
            .setTween(animeIn4)
            .setPin('.trigger3')
            .addIndicators()
            .addTo(controller1);

            var animeIn5 = new TimelineMax();

            animeIn5
            
            .to('.tower-l', 5, {y: "-5%"})
            .to('.tower-r', 5, {y: "-5%"}, "-=5")
            .to('.tower-mid', 5, {y: "5%"}, "-=5")



            var scene6 = new ScrollMagic.Scene({
              triggerElement:'.trigger5',
              duration: "100%",
              offset: 1300
            })
            
            .setTween(animeIn5)
            .addIndicators()
            .addTo(controller1);

            var animeIn6 = new TimelineMax();

            animeIn6
            
            /* .set('.toproom', {transformOrigin: "center"}) */
            .to('.toproom', 2, {autoAlpha: 0}, "-=2")
            .to('.top-text', 2, {autoAlpha: 0}, "-=2")

            

            var scene7 = new ScrollMagic.Scene({
              triggerElement:'.trigger7',
              duration: "100%",
              triggerHook: 0,
              offset: 1920
            })
            
            .setTween(animeIn6)
            .setPin('.trigger7')
            .addIndicators()
            .addTo(controller1);
