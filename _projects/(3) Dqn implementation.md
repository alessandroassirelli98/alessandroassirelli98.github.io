---
name: Dqn Implementation
tools: [alone, coursework, RL, python]
image: /assets/imgs/dqn-implementation/miniature.png
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
---

# Overview

The objective of this project was to train an agent using the Deep Q-Network (DQN) algorithm to learn how to control a swing up manuever of a double pendulum. The double pendulum consists of two connected rods, where the motion of the second rod is influenced by the position and velocity of the first rod. The agent's task was to learn how to manipulate the torque applied to the first joint of the pendulum to stabilize it in an upright position.

# Description

To accomplish this task, I employed the following steps:

- Environment Setup: I set up a simple simulation environment that modeled the physics of the double pendulum. This environment provided the agent with the current state information, such as the angles and angular velocities of the pendulum rods.

- Deep Q-Network Architecture: I designed a neural network, known as the Q-network, which took the state of the double pendulum as input and predicted the Q-values for each possible action. The network consisted of multiple layers of neurons, enabling it to learn complex relationships between the state and optimal actions.

- Replay Memory: I implemented a replay memory to store the agent's experiences. This memory allowed the agent to learn from past interactions by randomly sampling and reusing experiences during the training process, providing a more stable learning process.

- Training Process: Using the DQN algorithm, I iteratively trained the agent by interacting with the environment, selecting actions based on exploration and exploitation, and updating the Q-network using the collected experiences. The training process aimed to minimize the discrepancy between predicted Q-values and target Q-values, enabling the agent to make better decisions over time.

- Evaluation and Fine-Tuning: After training the agent, I evaluated its performance by running simulations of the double pendulum. I fine-tuned the DQN algorithm by adjusting hyperparameters, network architecture, and exploration-exploitation strategies to improve the agent's control and stabilization capabilities.

# Results and Achievements:
Through this project, I achieved significant milestones and noteworthy outcomes:

- Successfully developed and trained a DQN algorithm to control and stabilize a double pendulum in python.
- The trained agent demonstrated the ability to effectively stabilize the double pendulum in an upright position.
- Achieved a basic understanding of the underlying principles and techniques used in reinforcement learning and applied them in a practical scenario.


# Keywords
`Coursework`, `Python`, `Reinforcement Learning`

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/