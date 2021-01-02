---
layout: post
title: "Mechatronics Robot"
date: 2019-12-17
excerpt: "Coursework from MAE 3780 - Mechatronics"
tags: [coursework]
feature: https://user-images.githubusercontent.com/40682860/103447470-b658b800-4c59-11eb-89d8-ac01760d7504.png
comments: false
project: true
---

During the 2019 CubeCraze challenge, opposing teams' robots had to collect a number of wooden cubes from a competition board and bring them back to their sides, making sure they had the greatest number at the end of 60 seconds. Our strategy was to use a winch-controlled gate to collect these cubes to our side, then return to the opponent's side to push their blocks off the board. 

I was in charge of nearly all of the electronics and code behind the robot. Since the starting point on the board was randomly assigned, the robot sensed its position via three QTI infrared emitter/receivers (for edge detection) and a color sensor (for determining the side of the board). The motors were controlled with three H-bridges that were manually assembled and soldered, and the final code for the project was written entirely in C, making use of the registers on the ATMEGA 328P microcontroller on the Arduino Uno. 

## Media

<figure class="half">
    <a href="/assets/img/3780/front.png"><img src="/assets/img/3780/front.png"></a>
    <a href="/assets/img/3780/rear.png"><img src="/assets/img/3780/rear.png"></a>
    <a href="/assets/img/3780/winch.png"><img src="/assets/img/3780/winch.png"></a>
    <a href="/assets/img/3780/side.png"><img src="/assets/img/3780/side.png"></a>
</figure>

![Strategy](/assets/img/3780/3780strategy.jpg)

## Report
      
[Access the full report PDF](/pdfs/3780.pdf){: .btn}
