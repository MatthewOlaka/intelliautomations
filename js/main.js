
var controller = new ScrollMagic.Controller();


var tlFixtureScroll = new TimelineMax();

tlFixtureScroll

.to('.lightf3', 2, {y: "10%"})
.to('.bulb1', 2, {y: "25%"}, "-=2")
.to('.lightf1', 2, {y: "-5%"}, "-=2")
.to('.bulb4', 2, {y: "-10%"}, "-=2")
.to('.lightf2', 2, {y: "-5%"}, "-=2")
.to('.bulb3', 2, {y: "-10%"}, "-=2")
.to('.lightf4', 2, {y: "10%"}, "-=2")
.to('.bulb2', 2, {y: "15%"}, "-=2")
.to('.bulb1', 2, {scale: 2.5}, "-=1.8")
.to('.bulb4', 2, {scale: 2.5}, "-=1.8")
.to('.bulb3', 2, {scale: 2.5}, "-=1.8")
.to('.bulb2', 2, {scale: 2.5}, "-=1.8")
.from('.fixture-text', 2, {autoAlpha: 0}, "-=1")



var scene1 = new ScrollMagic.Scene({
    triggerElement:'.fixture-trigger',
    /* triggerHook: 0.4, */
    duration: "100%",
    /* offset: 400 */
})

.setTween(tlFixtureScroll)
.addIndicators()
.addTo(controller);



$(".project").each(function(){

    var picOverlay = $(this).find(".overlay");
    var projectInfo = $(this).find(".project-info");
    var subHeading = $(this).find(".sub_heading2");



    var animateIn = new TimelineMax();



animateIn
.fromTo(picOverlay, 2,{skewX:30, scale:1.5}, {skewX:0, xPercent:100, transformOrigin: "0% 100%", ease: Power4.easeOut})

.from(projectInfo, 1, {scaleY:0, transformOrigin: "bottom left"}, "-=1.5")

.from(subHeading, 1, {autoAlpha: 0, y:30},  "-=0.8")

// Make a scrollMagic Scene

var scene = new ScrollMagic.Scene({
    triggerElement: this,

})

.addIndicators()
.setTween(animateIn).addTo(controller)


/* scene.triggerHook("onCenter")
 */
});

var tlFirstScroll = new TimelineMax();

tlFirstScroll
.set('.iphone-image-wrapper', {scale: 3, transformOrigin: "center top", y: "90%"})
//3 seconds, scale to half
.to('.iphone-image-wrapper', 2, {scale: 2, y: "-5%"})
.to('.iphone-image-wrapper', 2, {scale: 1, y: "20%"})

var scene1 = new ScrollMagic.Scene({
    triggerElement:'.trigger1',
    /* triggerHook: 0.4, */
    duration: "100%",
    offset: 400
})

.setTween(tlFirstScroll)
.addIndicators()
.addTo(controller);

var tlSecondScroll = new TimelineMax();

tlSecondScroll

.to('.iphone1', 3, {x: "-50%"})
.to('.iphone2', 3, {x: "50%"}, "-=3")
.from('.iphone1-text', 0.3, {autoAlpha: 0}, "-=3")
.from('.iphone2-text', 0.3, {autoAlpha: 0}, "-=3")
.to('.iphone1-text', 3, {x: "-30%"}, "-=3")
.to('.iphone2-text', 3, {x: "30%"}, "-=3")

.set('.iphone-stick', {display: "block"})

.to('.iphone1-img-behind', 3, {x: "-48%"})
.to('.iphone2-img-behind', 3, {x: "57%"}, "-=3")

.to('.iphone1-img', 0.5, {autoAlpha: 0}, "-=3")
.to('.iphone2-img', 0.5, {autoAlpha: 0}, "-=3")

.to('.iphone1-text', 0.3, {autoAlpha: 0}, "-=3")
.to('.iphone2-text', 0.3, {autoAlpha: 0}, "-=3")

var scene2 = new ScrollMagic.Scene({
    triggerElement:'.trigger2',
    triggerHook: 0.05,
    duration: "100%",
    offset: 200
})

.setTween(tlSecondScroll)
.setPin('.trigger2')
.addIndicators()
.addTo(controller);