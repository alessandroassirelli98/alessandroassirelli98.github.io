---
name: Cnc lookahead controller
tools: [alone, coursework, C]
image: /assets/imgs/cnc_controller/miniature/miniature.png
description: Full implementation of a cnc controller in C. The project received maximum grade
---


<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-D6K1WDDD7F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-D6K1WDDD7F');
</script>


<!-- Matomo -->
<script>
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://alessandroassirelli98.matomo.cloud/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '2']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='//cdn.matomo.cloud/alessandroassirelli98.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<!-- End Matomo Code -->

![project_idea](/assets/imgs/cnc_controller/1.png)
# Overview

The objective of this project was to design and implement a CNC controller in `C` that incorporated a lookahead approach to enhance the toolpath planning and execution. The CNC controller is responsible for translating high-level instructions into precise movements of the machine's cutting tool, ensuring smooth and accurate machining.

# Description
In order to develop the algorithm the following steps have been carried out:
- Toolpath Generation: developed the algorithms to parse the high level G-Code translating it to axis motion.

- Lookahead Technique: implemented a lookahead approach in the CNC controller to enhance the motion planning process. This technique involved analyzing the upcoming segments of the toolpath to anticipate any abrupt changes in direction or speed, allowing the controller to adjust the machine's velocity and acceleration in advance. To do so several steps are needed:

    1. All blocks code need to be parsed and the angle between two consecutive segments must be calculated.

    2. The starting and ending velocity of the segments are not zero when using lookahead. They depends on the nominal feedrate of two adjacent blocks and the angle between the two. the more aligned the segments are, the less the machine has to decelerate
    
    3. The motion profile of each axis has to be calculated. To do so, first all the accelerations are calculated, then the decelerations

- Simulation and Validation: I finally conducted simulations and validations to verify the performance of the CNC controller. I utilized virtual environments to simulate various machining scenarios, analyzing the output toolpaths, and evaluating the ability to smoothly execute the motion plans with the lookahead approach.

# Results:
While being a very manufacturing oriented project, the main topic of this project was programming in `C`. The code is rather complex and the repo can be found here below.

This algorithm has demonstrated to be much efficient with respect to the traditional ones.
In the picture the black vertical lines represent each motion block. Traditional planning need to go back to zero velocity at the end of every block. It is clear that this solution that does not break it's much faster. 

<div class="flex-parent jc-center">
{% include elements/button.html link="https://github.com/alessandroassirelli98/c-cnc-project" text="Project repo" %}
</div>