---
layout: post
title:  "Esc Wireless For Modular Drones"
categories: project
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
The main focus of the work has been the collection of the PWM signals from the flight controller and their communication to the slaves module that have also to replicate that signal for the ESCs

# Results

I have developed the firmware for both the transmitter and the receiver on a Nordic nrf52832 mcu. The transmission introduced a delay of around 5.5 ms measured with the PicoScope oscilloscope. Finally we also mounted our system on a regular drone and verified that the delay was still small enough to let the drone fly.

# Applied knowledge
`electronics`

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
