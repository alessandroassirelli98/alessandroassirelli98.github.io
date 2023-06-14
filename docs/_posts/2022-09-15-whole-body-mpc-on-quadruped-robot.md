---
layout: post
categories: project
---

# Images

![project_idea](/assets/imgs/esc-wireless/project_idea.png)
![system_concept_drawio](/assets/imgs/esc-wireless/architecture_concept.drawio.png)

# Overview:
The objective of this project was to design and implement a novel Whole-Body Model Predictive Controller for the locomotion of an impedence controlled quadruped robot (Solo12). By deploying our algorithm on the real robot we sought to achieve dynamic and versatile robot movements, without relying on predefined foot references.

# Description:
To accomplish our goal, we followed a systematic approach that included the following key steps:


- Whole-Body MPC: We implemented a Whole-Body Model Predictive Controller that could handle complex robot dynamics including contacts. By formulating the control problem as an optimization task, the control algorithm could plan and execute motions while considering the whole system dynamics, kinematics, and actuator limits.

- Impedance Control: As the MPC controller was running at around 100 [Hz] the Low Level Controller (LLC) of the robot needed to run at a higher frequency in order to effectively stabilize the system. The LLC was designed as a PD+ controller that takes as position and velocity reference the ones obtained by the prediction of the MPC and the Riccati gains as feedback gains. It calculates the errors by subtracting the measured values to the reference quantities and multiplied by the gains, it finally added the optimal control torques found by the MPC.

- Foot Reference-Free Approach: One of the key innovations in our project was the elimination of predefined foot references in the MPC framework. Instead of relying on precalculated foot trajectories, we introduced a cost term in the cost function that dynamically adjusted the robot's foot position based on the required forward velocity.

- Simulation and Experimental Validation: We conducted extensive simulations and real-world experiments to validate the performance of our Whole-Body MPC approach. Simulations allowed us to assess the control framework's behavior in various scenarios, while physical experiments provided practical insights and fine-tuning opportunities.

# Results
Through our collaborative efforts, we achieved remarkable milestones and outcomes:

- Successful development and implementation of a Whole-Body MPC framework for impedance-controlled robot locomotion.
- Innovative foot reference-free approach.
- Demonstrated locomotion capabilities even in presence of external disturbances.
- Demonstrated abilities of push recovery
- Validation through comprehensive simulations and experimental tests, confirming the effectiveness, robustness, and practical applicability of our Whole-Body MPC approach.

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
