$(document).ready(function () {
    $('#hero-slider').slider({
        indicators: false,
        height: 600,
        interval: 2500
    });

    $('#hero-slider').tilt({
        scale: 1.10, // 2 = 200%, 1.5 = 150%, etc..
        glare: true, // Enables glare effect
        maxGlare: 0.4 // From 0 - 1.
    });
});
