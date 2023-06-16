---
name: Esc wireless for modular drones
tools: [team, coursework, electronics, C]
image: /assets/imgs/esc-wireless/miniature/miniature.png
description: Modular drone architecture proposal and proof of concept. The preoject received maximum grade
---

![project_idea](/assets/imgs/esc-wireless/project_idea.png)


![system_concept_drawio](/assets/imgs/esc-wireless/architecture_concept.drawio.png)


# Overview

Traditional drones have a fixed frame and its components are hardly interchangable, this means that each drone is designed for a certain application. A modular drone can be easily assembled, upgraded, downgraded and disassembled, by means of switchable parts and components. In this project a solution to realize a modular drone is proposed.

The main focus of the project is the presentation of an innovative method for creating a communication link between a flight controller (FC) and an electronic speed controller (ESC) in a drone using ultra-wideband (UWB) technology. Our approach utilizes a UWB module to transmit control signals between the flight controller and the ESC.

# Short description

In order to realize a modular drone we decided to split the components of a regular drone into two different types of modules:
- Master: there is only one module of this type which contains a small battery, the flight controller and a transmitter UWB module.
- Slaves: they are in number equal to the rotors of the drone. Each module contains a battery, an ESC a motor with its propeller and a UWB receiver.

The slaves are connected to an arbitrary payload, along with the master. The latter sends the commands via UWB to the slaves that generate the thrust.
The main focus of the work has been the collection of the PWM signals from the flight controller and their communication to the slaves module that have also to replicate that signal for the ESCs.

To do so the following steps have been carried out:
- Architecture design: We analyzed the problem and developed possible solutions, that were filtered in order to bring us to the final proposal

- PWM readings: implemented the code to precisely collect the pwm signals from the FC

- Communication: the data about the signals have been collected, a message containing all the informations gets prepared and sent via UWB to all the receivers

- PWM replica: once the command is received by each module it has to parse and replicate the signal

- System setup: a brand new drone has been setup including all the custom modules. This included wiring and troubleshooting

- System analysis: a deep analysis about the signals and the code has been carried out in order to spot possible critics in the workflow

- Final test: real fly test to understand how our system affected the drone dynamics

# Results
With this project the following achievement have been reached:
- Successful Communication: The implementation of the UWB communication system between the flight controller and the ESCs proved to be successful. The UWB modules effectively transmitted control signals, allowing for precise and coordinated control of the drone's thrust.

- Accurate PWM Signal Replication: The code developed for replicating the received PWM signals within the Slave modules was effective in accurately controlling the ESCs.

- System Stability: The drone system maintained stability during flight tests, demonstrating that the integration of the UWB communication and modular design did not negatively impact the drone's dynamics. The drone responded well to control inputs.

- Proof of Concept: The successful implementation of the modular drone and UWB communication serves as a proof of concept for future developments and innovations in the drone industry.

The project received maximum grade.

<div class="flex-parent jc-center">
{% include elements/button.html link="/technical_details/Modular_ESC_Motors_Drone_REPORT.pdf" text="Technical report" %}
</div>