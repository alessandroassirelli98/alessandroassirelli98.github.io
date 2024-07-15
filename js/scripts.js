// @prepros-append vendor/jquery-3.3.1.min.js
// @prepros-append vendor/popper.min.js
// @prepros-append vendor/bootstrap.min.js
// @prepros-append vendor/owl.carousel.min.js
// @prepros-append vendor/aos.js
// @prepros-append vendor/isotope.pkgd.min.js
// @prepros-append vendor/jquery.animateNumber.min.js
// @prepros-append vendor/jquery.waypoints.min.js
// @prepros-append vendor/TweenMax.min.js
// @prepros-append vendor/jquery.easing.1.3.js
// @prepros-append vendor/jarallax.min.js
// @prepros-append vendor/jarallax-video.min.js
// @prepros-append vendor/jquery.validate.min.js
// @prepros-append vendor/jquery.fancybox.min.js
// @prepros-append vendor/stickyfill.min.js
// @prepros-append vendor/imagesloaded.pkgd.min.js
// @prepros-append vendor/ScrollMagic.min.js
// @prepros-append vendor/scrollmagic.animation.gsap.min.js

document.addEventListener("DOMContentLoaded", function() {
    const texts = ["Mechatronics", "Robotics", "Artificial Intelligence"];
    const typingTextElement = document.getElementById("typing-text");
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 130; // Typing speed in milliseconds
    const delayBetweenTexts = 2000; // Delay between texts in milliseconds

    function typeWriter() {
        if (charIndex < texts[textIndex].length) {
            typingTextElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            setTimeout(clearText, delayBetweenTexts);
        }
    }

    function clearText() {
        if (charIndex > 0) {
            typingTextElement.textContent = typingTextElement.textContent.slice(0, -1);
            charIndex--;
            setTimeout(clearText, typingSpeed / 2); // Speed up the clearing process
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter();
});

