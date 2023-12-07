---
name: Modeling and simulation of a robotic leg
tools: [alone, coursework, system modeling, maple, maplesim]
image: /assets/imgs/modeling_and_simulation_of_quadruped_leg/MINIATURE/miniature.png
description: Mathematical model of a quadruped robot leg. The project received maximum grade

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


![project_idea](/assets/imgs/modeling_and_simulation_of_quadruped_leg/1.png)
![project_idea](/assets/imgs/modeling_and_simulation_of_quadruped_leg/2.png)

# Overview
This project consists on modeling a leg for a quadruped robot. The project encompassed various stages, including the selection of an appropriate mechanism for actuation, kinematics analysis, dynamics analysis, and parameters optimization. The objective was to develop an accurate mathematical description of the system

# Description
- Leg Actuation Mechanism Selection: the project began with an evaluation of different actuation mechanisms suitable for the leg of a quadruped robot. Factors such as compactness, power-to-weight ratio, controllability, and suitability for dynamic movements were taken into consideration. After a thorough analysis, a specific actuation mechanism was chosen to meet the project's requirements.

- Kinematics Analysis: the next phase involved conducting a detailed kinematics analysis of the leg. The goal was to accurately describe the motion of the leg given the actuators input. The model also included the kinematics of the planetary gearbox. At this stage we also performed inverse kinematics to find the joint angles that make the foot follow a predefined trajectory. Also a sensitivity analysis has been developed to model how the system would behave in case of errors in the production.

- Dynamics Analysis: after establishing the kinematic model, a dynamics analysis was performed to study the leg's behavior under different conditions. This involved calculating the forces, torques, and accelerations experienced by the leg during various movements. In particular we performed drop and jump simulations, which are two very common situations for a quadruped robot.

- Parameters Optimization: to enhance the leg's performances, parameters optimization was carried out. We decided a target task, in our case jumping, and optimized the system in order to reach maximum height. The optimization also included constraints such as maximum torques and links dimensions range and found the optimal link lenghts. 

# Results
The project has been developed in Maple and MapleSim environments and has been a nice application of technical skills.

- Successfully selected an appropriate actuation mechanism for the leg, considering factors such as compactness, power-to-weight ratio, and controllability.

- Conducted a thorough kinematics analysis, accurately defining joint reference frames and inverse kinematics.

- Carried out dynamics analysis to understand the leg's behavior under various loading conditions.

- Optimized design parameters, including link lengths, joint stiffness, and actuator characteristics to enhance the leg's performance

- The project's findings can be utilized as starting point in the further development of advanced quadruped robots.

<div class="flex-parent jc-center">
{% include elements/button.html link="/technical_details/Leg_project_final.mw" text="Maple file" %}
</div>