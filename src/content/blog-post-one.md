---
title: Using Autonomous Drones for Wildfire Mitigation
description: A repository of information regarding my undergraduate research at the University of Northern Colorado.
date: 2020-11-27
path: /autonomous-drones-wildfire-mitigation
featuredImage: ./images/drone.jpg
featuredImageAlt: "Dark abstract shapes"
tags: ["programming"]
author: Doug Mellon
---
**I will continuously update this post with information regarding my undergraduate research at the University of Northern Colorado.

#Research Papers
###Coordination Between Unmanned Aerial and Ground Vehicles: A Taxonomy and Optimization Perspective
####Main Thoughts
Discusses using a combination of autonomous drones and autonomous ground vehicles to coordinate tasks. Could be used to optimize communication.

The main purpose of this paper is to present the use of coordination between autonomous drones as well as autonomous ground vehicles. Their premise being that coordinating multiple UAVs, or multiple UAV groups, to perform tasks can dramatically improve the effectiveness of the whole system from the viewpoint of performance in accomplishing tasks and robustness, and reliability. Some uses they propose are in border patrol, fire detection, cooperative target tracking, and mobile sensor network.

####Notes of Interest
- Sensors located on UAVs are usually limited in operating airspeed and altitude while UGVs can be deployed to accurately locate ground targets.
- Due to advantages in altitude, communication links among UAVs can be less blocked by obstacles than that among UGVs.
- Task assignment of UGVs and UAVs in wildfire detection and fighting using cooperative UAVs/UGVs platforms. A cooperative control framework for a hierarchical UAVs/UGVs platform is presented. In the top-most level, an airship is used as a mobile mission controller to perform mission planning, assignment and system-level decision making for both UAVs and UGVs. Then, the task assignment problem is formulated as a pure integer linear program which can be easily solved by Matlab’s optimization toolkit. The algorithm proposed for task allocation is a typically centralized one whose effectiveness highly relies on the airship.
- For large-scale UAGVs, centralized decision-making approaches are usually computationally infeasible while decentralized decision-making approaches consume more time and the optimality of solutions cannot be guaranteed. To achieve a better tradeoff between optimality and efficiency, a promising way is using hybrid decision-making approaches, which incorporates the advantages of both centralized and decentralized ones. [A]
[A] All vehicles are divided into some small-scale sub-teams, and each sub-team selects one vehicle as its leader. Each leader makes decisions for all members in this sub-team and coordinates the behaviors of different sub-teams using a decentralized approach.
- In wildfire fighting, with multiple fire-points in a large field, managing a whole system on a team-level can promote the efficiency of making decisions and achieve a better tradeoff between solution quality and solution time. Each sub-team consists of a certain number of UAVs and UGVs, and one vehicle (eg., a UAV) is selected as the leader of this sub-team. Each sub-team, represented by the leader, participates into the decision making as a whole. During the mission, all the leaders constitute a connected network. Each leader makes decisions for all members in the sub-team, coordinates its behaviors through negotiation with other leaders in a decentralized way.
- Within each team, a centralized approach is adopted to solve a small-scale optimization problem, which guarantees the quality of solutions to some extent. Among all sub-teams, decentralized coordination approaches improve the robustness and scalability of the whole system.

####Additional References
“Cooperative forest fire surveillance using a team of small unmanned aerial vehicles”

###Use of Fire-Extinguishing Balls for a Conceptual System of Drone-Assisted Wildfire Fighting
####Main Thoughts
Focuses on the control of fires using extinguishing balls. Uses a scout to find spot fires and monitor any risks the fires propose to infrastructure. Relays information to other drones equipped with extinguishing balls which are used to stop hotspots. Focuses on building the drones.

####Notes of Interest

This paper examines the potential use of fire extinguishing balls as part of a proposed system, where drone and remote-sensing technologies are utilized cooperatively as a supplement to traditional firefighting methods. The proposed system consists of (1) scouting unmanned aircraft system (UAS) to detect spot fires and monitor the risk of wildfire approaching a building, fence, and/or firefighting crew via remote sensing, (2) communication UAS to establish and extend the communication channel between scouting UAS and fire-fighting UAS, and (3) a fire-fighting UAS autonomously traveling to the waypoints to drop fire extinguishing balls (environmental friendly, heat activated suppressants). This concept is under development through a transdisciplinary multi- institutional project. The scope of this paper encloses general illustration of this design, and the experiments conducted so far to evaluate fire extinguishing balls. The results of the experiments show that smaller size fire extinguishing balls available in the global marketplace attached to drones might not be effective in aiding in building fires (unless there are open windows in the buildings already). On the contrary, results show that even the smaller size fire extinguishing balls might be effective in extinguishing short grass fires (around 0.5 kg size ball extinguished a circle of 1-meter of short grass). This finding guided the authors towards wildfire fighting rather than building fires. The paper also demonstrates building of heavy payload drones (around 15 kg payload), and the progress of development of an apparatus carrying fire-extinguishing balls attachable to drones.

Cooperative forest fire surveillance using a team of small unmanned air vehicles
####Main Thoughts
This paper explores the feasibility of using multiple low-altitude, short endurance (LASE) unmanned air vehicles (UAVs) to cooperatively monitor and track the propagation of large forest fires. A real-time algorithm is described for tracking the perimeter of fires with on-board infrared sensors. They develop a decentralized multiple-UAV approach to monitoring the perimeter of a fire. The UAVs are assumed to have limited communication and sensing range. Salient features of the approach include the ability to monitor a changing fire perimeter, the ability to systematically add and remove UAVs from the team, and the ability to supply time-critical information to fire fighters.

Notes of Interest
- To combat forest fires effectively, their early detection and continuous tracking is vital.
- Images are typically captured by low earth orbiting satellites with an orbital period of about ten hours, and with a resolution that is only sufficient for fire detection.
- Fire fighters need frequent and high-quality information updates on the progress of fires to effectively and safely fight them.
- Fire fighters are often required to enter fire regions with little knowledge of how and where the fire is propagating, placing their lives at risk.
- The limited availability of high-altitude, long-endurance (HALE) UAVs systems during peak fire season may limit their overall effectiveness and emphasizes the need for lower-cost, locally implementable systems.
- Low-altitude, short-endurance (LASE) UAVs are expected to be a key technology for enhanced fire monitoring. NASA is actively pursing this possibility with ongoing research projects aimed at tracking the growth of fires using LASE UAVs.
- Problems that need to be addressed before LASE UAVs can be used for fire monitoring:
    - UAVs need to be able to plan their path using limited real-time information.
    - LASE UAVs typically cannot carry enough fuel to endure a long fire fighting mission, which means that the UAV must have the intelligence to return to the home base for refueling.
    - For large fires, the information update rate may still be too low if only a single LASE UAV is employed.
    - Fires generate tremendous heat and turbulence directly above the burning region. Therefore, crossing directly over the fire will place low-altitude UAVs at significant risk. As a consequence, LASE UAVs are effectively restricted to the airspace over the unburned region of the fire.
- Issues addressed in this paper:
    - Overcoming limited communication range and flight duration.
    - Developing a suitable coordination strategy for fire monitoring.
    - Forming team consensus in the presence of nosy or uncertain information.
  
- A key challenge in implementing decentralized cooperative strategies is to form consensus among members of the team when communication links are intermittent or noisy and sensed information is inconsistent among team members.


###Optimization approaches for civil applications of unmanned aerial vehicles (UAVs) or aerial drones: A survey
####Main Thoughts
Unmanned aerial vehicles (UAVs), or aerial drones, are an emerging technology with significant market potential. UAVs may lead to substantial cost savings in, for instance, monitoring of difficult-to-access infrastructure, spraying fields and performing surveillance in precision agriculture, as well as in deliveries of packages. In some applications, like disaster management, transport of medical supplies, or environmental monitoring, aerial drones may even help save lives. In this article, we provide a literature survey on optimization approaches to civil applications of UAVs. Our goal is to provide a fast point of entry into the topic for interested researchers and operations planning specialists. We describe the most promising aerial drone applications and outline characteristics of aerial drones relevant to operations planning. In this review of more than 200 articles, we provide insights into widespread and emerging modeling approaches. We conclude by suggesting promising directions for future research.



