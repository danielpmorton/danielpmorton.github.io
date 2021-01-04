---
layout: post
title: "Additive Manufacturing of TPMS Lattices for Heat Exchange or Filtration"
date: 2020-08-31
excerpt: "Details on a process I developed for both NASA and COVID volunteering"
tags: [design, manufacturing]
feature: /assets/img/tpmsFeatureImg.PNG
comments: false
project: true
---

TPMS (Triply-Periodic Minimal Surface) lattices are unique in that they can be modeled by a single equation in 3D space, with surfaces defined as every location within the design boundary where the implicit function equals some isovalue (typically equal to 0). An interesting property of these is that when fluid is passed through the structure, these have a very high surface area to pressure drop ratio - meaning, as the flow passes through a TPMS lattice, it experienced minimal resistance yet is highly likely to encounter a surface boundary. This is incredibly useful for both particle filtration and heat exchange, and particularly for heat exchangers, these structures can be modified to include multiple interwoven bifurcating fluid domains. 

<a href="/assets/img/tpms/eqns.png"><img src="/assets/img/tpms/eqns.png"></a>
> Equations for the three main types of TPMS lattices I work with

## Heat Exchangers

<figure class="half">
    <a href="/assets/img/tpms/hx.png"><img src="/assets/img/tpms/hx.png"></a>
    <a href="/assets/img/tpms/anim.gif"><img src="/assets/img/tpms/anim.gif"></a>
</figure>
> Example of a cross-flow heat exchanger modeled in COMSOL. TPMS type: Schwarz, with a 001-111 vector rotation

<a href="/assets/img/tpms/vfield.png"><img src="/assets/img/tpms/vfield.png"></a>
> Z-component velocity field slice in COMSOL for the two counter-flow fluid domains

## General Structures

A key focus was generating these structures so that the flow bifurcates, rather than passing directly through. While there are many more types of TPMS and countless modifications that can be made, these images below represent the ones that both bifurcate and are most likely to be 3D-printable. 

Here, blue represents a solid feature, and shades of pink represent the fluid domains. Flow is oriented so it passes from top to bottom. Some TPMS structures are rotated such that the flow direction is aligned with the vector of the highest bifurcation.

<figure class="half">
    <a href="/assets/img/tpms/d001.png"><img src="/assets/img/tpms/d001.png"></a>
    <a href="/assets/img/tpms/g110.png"><img src="/assets/img/tpms/g110.png"></a>
</figure>
> Left: Diamond (standard 001 orientation); Right: Gyroid (001-110 rotation)

<figure class="half">
    <a href="/assets/img/tpms/d111.png"><img src="/assets/img/tpms/d111.png"></a>
    <a href="/assets/img/tpms/s111.png"><img src="/assets/img/tpms/s111.png"></a>
</figure>
> Left: Diamond (001-111 rotation); Right: Schwarz (001-111 rotation)

<figure class="half">
    <a href="/assets/img/tpms/alt.png"><img src="/assets/img/tpms/alt.png"></a>
</figure>
> Alternate custom TPMS design with two solid and two fluid domains, for very high surface areas at the expense of being more difficult to manufacture

## Filter Cartridges

<figure class="half">
    <a href="/assets/img/tpms/d001filter.png"><img src="/assets/img/tpms/d001filter.png"></a>
    <a href="/assets/img/tpms/g110filter.png"><img src="/assets/img/tpms/g110filter.png"></a>
</figure>
> Left: Diamond (standard 001 orientation); Right: Gyroid (001-110 rotation)

<figure class="half">
    <a href="/assets/img/tpms/d111filter.png"><img src="/assets/img/tpms/d111filter.png"></a>
    <a href="/assets/img/tpms/s111filter.png"><img src="/assets/img/tpms/s111filter.png"></a>
</figure>
> Left: Diamond (001-111 rotation); Right: Schwarz (001-111 rotation)

## Additional Info

Please contact me if you would like to know more about these and how they were modeled. Or, <a href="https://github.com/danielpmorton/TPMS-Modeler">check out my "TPMS Modeler" repository on Github</a>
