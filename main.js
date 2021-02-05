var scene = document.getElementById('animate-class');
    var parallax = new Parallax(scene);

    TweenMax.from(".logo", 1, {
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    TweenMax.staggerFrom(".menu-links ul li", 1, {
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut
    }, 0.08)


    TweenMax.from(".social", 1, {
      delay: .7,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".left-panel", 2, {
      delay: .5,
      opacity: 0,
      x: 800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".right-panel", 2, {
      delay: 1.5,
      opacity: 0,
      y: 800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".right-panel-image", 2, {
      delay: 1.6,
      opacity: 0,
      y: 900,
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

    TweenMax.from(".more", 1, {
      delay: 1.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".desc", 1, {
      delay: 1.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })