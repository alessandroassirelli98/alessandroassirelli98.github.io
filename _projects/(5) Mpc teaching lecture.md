---
name: Mpc teaching lecture
tools: [alone, teaching, matlab, optimal control]
image: /assets/imgs/mpc_lecture/miniature/miniature.png
description: A lecture I held to my students colleagues abot optimal control
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



![project_idea](/assets/imgs/mpc_lecture/1.png)

# Overview:
During a course I had the opportunity to held a teaching lesson for a group of students on the application of Model Predictive Control (MPC) for the control of a unicycle. The unicycle has been chosen for sake of simplicity. The objective of this lecture was to provide students with a general understanding of MPC principles and its practical implementation in the context of unicycle control. Through this lesson, I aimed to empower students with the knowledge and skills necessary to tackle also more complex control problems using MPC techniques.
# Description:
The teaching lesson was designed with the following key objectives in mind:

- Introduce students to the fundamentals of Model Predictive Control and its advantages in control systems.
- Illustrate the application of MPC in the control of a unicycle, which is a nonlinear system.
- Explain the mathematical modeling of the unicycle dynamics and its representation in state-space form.
- Demonstrate the formulation of the MPC problem, including the prediction horizon, constraints, and cost function.
- Provide hands-on experience by implementing and simulating the MPC controller for the unicycle using appropriate software tools.
- Assess the performance and stability of the MPC controller under different scenarios and disturbances.

The teaching lesson was carefully prepared to ensure effective knowledge transfer and engagement. The key steps involved in lesson preparation were as follows:

- Research and Content Development: Thorough research was conducted to gather the necessary theoretical concepts and practical examples related to MPC and unicycle control. The lesson content was developed, focusing on clarity, coherence, and the gradual introduction of complex topics. I also took a lot of inspiration from what I learnt during my internship (the one about quadruped locomotion)

- Lesson Structure and Flow: The lesson was structured to provide a logical progression of concepts, starting with an introduction to MPC and gradually moving towards its application in unicycle control.

- general tutorial on software tools used have been also prepared in order to provide other students with the necessary knowledge

- Visual Aids and Demonstrations: Visual aids, including diagrams, graphs, and simulations, were prepared to enhance understanding and illustrate the concepts visually. Simulations and demonstrations were utilized to showcase the behavior of the unicycle under MPC control.

- Hands-on Activities and Exercises: Interactive activities and exercises in Matlab were designed to encourage active participation. These activities included formulating control objectives, tuning controller parameters, and analyzing the impact of constraints on the control performance.


# Results
I have received very positive feedbacks from students that also asked for further material and clarifications. The lecture concluded with the completion of the tutorials

You can have a brief look at the code here, but they require additional code that can be found on the repo


<div class="flex-parent jc-center">
{% include elements/button.html link="https://github.com/alessandroassirelli98/mpc_lecture" text="Project repo" %}
{% include elements/button.html link="/technical_details/intro_casadi.mlx" text="Lecture LiveScript 1" %}
{% include elements/button.html link="/technical_details/intro_casadi.mlx" text="Lecture LiveScript 2" %}

</div>

