---
name: Dqn Implementation
tools: [alone, coursework, RL, python]
image: /assets/imgs/dqn-implementation/miniature/miniature.png
description: Implementation of a DQN algorithm in python to control a double pendulum robot
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


<center><iframe width="800" height="300" src="/assets/imgs/dqn-implementation/Double pendulum.mp4" frameborder="0" allowfullscreen></iframe></center>
![project_idea](/assets/imgs/dqn-implementation/1.png)
# Overview

The objective of this project was to train an agent using the Deep Q-Network (DQN) algorithm to learn how to control a swing up manuever of a double pendulum. The double pendulum consists of two connected rods, where the motion of the second rod is influenced by the position and velocity of the first rod. The agent's task was to learn how to manipulate the torque applied to the first joint of the pendulum to stabilize it in an upright position.

# Description

To accomplish this task, I employed the following steps:

- Environment Setup: set up a simple simulation environment that modeled the physics of the double pendulum. This environment provided the agent with the current state information, such as the angles and angular velocities of the pendulum rods.

- Deep Q-Network Architecture: designed a neural network, known as the Q-network, which took the state of the double pendulum as input and predicted the Q-values for each possible action. The network consisted of multiple layers of neurons, enabling it to learn complex relationships between the state and optimal actions.

- Replay Memory: implemented a replay memory to store the agent's experiences. This memory allowed the agent to learn from past interactions by randomly sampling and reusing experiences during the training process, providing a more stable learning process.

- Training Process: using the DQN algorithm, I iteratively trained the agent by interacting with the environment, selecting actions based on exploration and exploitation, and updating the Q-network using the collected experiences. The training process aimed to minimize the discrepancy between predicted Q-values and target Q-values, enabling the agent to make better decisions over time.

- Evaluation and Fine-Tuning: After training the agent, I evaluated its performance by running simulations of the double pendulum. I fine-tuned the DQN algorithm by adjusting hyperparameters, network architecture, and exploration-exploitation strategies to improve the agent's control and stabilization capabilities.

# Results:
Through this project I achieved the following goals,:

- Successfully developed and trained a DQN algorithm to control and stabilize a double pendulum in python.
- The trained agent demonstrated the ability to effectively stabilize the double pendulum in an upright position.
- Achieved a basic understanding of the underlying principles and techniques used in reinforcement learning and applied them in a practical scenario.

<div class="flex-parent jc-center">
  {% include elements/button.html link="/technical_details/Alessandro_Assirelli_Assignment03.pdf" text="Technical report" %}
  {% include elements/button.html link="https://github.com/alessandroassirelli98/orc/tree/main/03_assignment" text="Project repo" %}
</div>