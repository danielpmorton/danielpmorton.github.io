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

The final project for AA274A involved a "search and rescue" mission, with the following key criteria:
- A self-designed map for the robot to explore
- Implementing SLAM and A* path planning
- Using three different controllers for following the planned trajectory: 1) aligning the robot in the starting direction of the trajectory; 2) following the A* trajectory; and 3) making small corrections to the final pose to match the target (x, y, theta)
- Implementing CNN-based object recognition with TensorFlow
- Using LIDAR scans to detect the walls of the map and fill in a stochastic occupancy grid

This involved two stages: 
First: Explore the world, view all areas of the map, and record the locations of the objects
Second: After being provided a list of 2-3 objects that need to be "rescued", navigate back to them, stop nearby, and then return back to the "home" position 

Our team successfully completed the mission and added in extra functionality including:
- Detecting and stopping at stop signs
- Visualizing our planned waypoints and rescue locations as map markers
- Visualizing the camera field of view
- Adding a bonus visualization/decoration with the AA274 class name

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


