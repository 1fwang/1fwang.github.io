---
title: "Globally-Optimal Contrast Maximisation for Event Cameras"
author: "Xin Peng, Ling Gao, <b>Yifu Wang</b> and Laurent Kneip."
collection: publications
permalink: /tpami2021
excerpt: 
date: 2021-01-15
venue: IEEE Transactions on Pattern Analysis and Machine Intelligence
paperurl: https://ieeexplore.ieee.org/document/9329204
citation: 
youtubeId: 
#header:
#   teaser: tpami2021_t.jpg
---

<a href="https://1fwang.github.io/files/tpami2021.pdf" target="_blank"><b>[PDF]</b></a>&emsp;
<a href="https://1fwang.github.io/files/peng2021globally.txt" target="_blank"><b>[BibTex]</b></a>

![firenet_banner](/images/tpami2021.png){:class="img-responsive"}

<b>Abstract.</b> 
Event cameras are bio-inspired sensors that perform well in challenging illumination conditions and have high temporal resolution. However, their concept is fundamentally different from traditional frame-based cameras. The pixels of an event camera operate independently and asynchronously. They measure changes of the logarithmic brightness and return them in the highly discretised form of time-stamped events indicating a relative change of a certain quantity since the last event. New models and algorithms are needed to process this kind of measurements. The present work looks at several motion estimation problems with event cameras. The flow of the events is modelled by a general homographic warping in a space-time volume, and the objective is formulated as a maximisation of contrast within the image of warped events. Our core contribution consists of deriving globally optimal solutions to these generally non-convex problems, which removes the dependency on a good initial guess plaguing existing methods. Our methods rely on branch-and-bound optimisation and employ novel and efficient, recursive upper and lower bounds derived for six different contrast estimation functions. The practical validity of our approach is demonstrated by a successful application to three different event camera motion estimation problems.


<b>Reference:</b>
X. Peng, L. Gao, Y. Wang and L. Kneip, "Globally-Optimal Contrast Maximisation for Event Cameras," in IEEE Transactions on Pattern Analysis and Machine Intelligence, doi: 10.1109/TPAMI.2021.3053243.
