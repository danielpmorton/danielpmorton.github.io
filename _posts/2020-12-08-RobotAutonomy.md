---
layout: post
title: "Principles of Robot Autonomy"
date: 2021-12-08
excerpt: "Coursework from AA274 / CS 237 at Stanford"
tags: [coursework, robotics]
feature: /assets/img/stanford_s.png
comments: false
project: true
---

**New post! Under construction**


<figure class="half">
    <a href="/assets/img/274/gazebo1.png"><img src="/assets/img/274/gazebo1.png"></a>
    <a href="/assets/img/274/gazebo2.png"><img src="/assets/img/274/gazebo2.png"></a>
</figure>

Screenshots from Gazebo - the robot traversing our 3D environment


<a href="/assets/img/274/rviz.png"><img src="/assets/img/274/rviz.png" style="max-height:300px; max-width: 100%; height: auto; width: auto;"></a>

A screenshot from RViz showing the path planning, the camera FOV visualizer, our planned waypoints (red dots), and the planned "rescue locations" (green dots). This occupancy grid was continually updated (and improved) as the robot moved around the map and collected more LIDAR measurements. The AA274 was a bonus visualization using line list markers. 


<a href="/assets/img/274/rqt.png"><img src="/assets/img/274/rqt.png"></a>

An RQT visualization of the ROS computation graph. Some of the key nodes include /detector, which was running the Tensorflow object detection from the camera input, and /fsm, our finite state machine. 

<a href="/assets/img/274/fsm2.png"><img src="/assets/img/274/fsm2.png" style="max-height:300px; max-width: 100%; height: auto; width: auto;"></a>

A diagram showing the primary states and transitions of our finite state machine (FSM) which controlled the behavior of the robot. 


