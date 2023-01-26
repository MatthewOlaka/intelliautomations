var controller = new ScrollMagic.Controller();

var tl2FirstScroll = new TimelineMax();

tl2FirstScroll

.set('.top_img', {transformOrigin: "center"})
.to('.top_img', 2, {autoAlpha: 0}, "-=2")

var scene1 = new ScrollMagic.Scene({
    triggerElement:'.trigger1',
    triggerHook: 0,
    duration: "100%",
    /* offset: 200 */

})

.setTween(tl2FirstScroll)
.setPin(".trigger1")
.addIndicators()
.addTo(controller);

$(".project").each(function(){

    var picOverlay = $(this).find(".overlay");
    var projectInfo = $(this).find(".project-info");
    var subHeading = $(this).find(".sub_heading2");



    var animateIn = new TimelineMax();



animateIn
.fromTo(picOverlay, 2,{skewX:30, scale:1.5}, {skewX:0, xPercent:100, transformOrigin: "0% 100%", ease: Power4.easeOut})

.from(projectInfo, 1, {opacity: 0, x: -20, ease: Expo.easeInOut}, "-=1.5")

.from(subHeading, 1, {autoAlpha: 0, y:30},  "-=0.8")

// Make a scrollMagic Scene

var scene = new ScrollMagic.Scene({
    triggerElement: this,
    offset: "900"

})

.addIndicators()
.setTween(animateIn).addTo(controller)


/* scene.triggerHook("onCenter")
 */
});


