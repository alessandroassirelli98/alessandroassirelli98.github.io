---
name: Mechanical design of a massage gun
tools: [coursework, team, system modeling, cad, fem]
image: /assets/imgs/massage_gun/miniature/miniature.png
description: Coursework that consisted in the complete design of a mechatronics device. It received maximum grade

---

![project_idea](/assets/imgs/massage_gun/1.png)
![project_idea](/assets/imgs/massage_gun/2.png)

# Overview
This project consists on the design of a 2-degrees of freedom (DoF) massage gun designed for medical and rehabilitation purposes. Unlike traditionl massage guns, that perform actions only in one direction ours employs a reciprocating motion mechanism and incorporates a rotational head. The objective of this project is to design the system, implementing the rotational functionality and realize a prototype with improved overall performance.

# Description
To achieve the final design the following phases has been followed:

- Problem statement: the problem has been carefully defined by also analyzing what other companies are currently doing and the product's requirements have been defined

- Modeling: Various concepts have been generated, then the most promising one has been developed. A mathematical model has been realized in order to estimate the motor requirements given the specification of the product. The model has been developed in MapleSim which provided a kinematics and dynamics description of the system. Finally an optimization on the parametrs such as the lengths of the rods has been carried out.

- Mechanical design: given the parameters from the mathematical model we proceeded with a structural analysis, first with didactic methods, then with FEM. The study comprised also some specific techniques to dimension particular components like bearings. The additional DoF brought some difficulties in dimensioning the bearings that needed to be chosen carefully in order to guarantee the lifetime we were seeking.

- CAD modeling: we developed a cad model in order to be able to print it and to undertake the FEM analysis

# Results
Overall this project has been an interesting application of mechanical engineering knowledge and let us develop a system from the beginning to the end.
The project finished with a complete design for a product. The work was very complete and included:

- Kinematics and dynamics modeling

- Structural analysis

- FEM

- CAD design

<div class="flex-parent jc-center">
{% include elements/button.html link="/technical_details/Massage_gun.pdf" text="Technical report" %}
</div>
